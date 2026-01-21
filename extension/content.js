/**
 * DeepGuard Browser Extension - Content Script
 * Handles image capture and API communication from web pages
 */

const API_URL = 'http://localhost:7860/api/predict';

// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'analyzeImage') {
        analyzeImageFromUrl(request.imageUrl)
            .then(result => {
                sendResponse({ success: true, result });
            })
            .catch(error => {
                console.error('Error analyzing image:', error);
                sendResponse({ success: false, error: error.message });
            });

        return true; // Keep channel open for async response
    }
});

/**
 * Fetch image from URL and send to API for analysis
 */
async function analyzeImageFromUrl(imageUrl) {
    try {
        // Fetch the image with proper CORS handling
        const response = await fetch(imageUrl, {
            mode: 'cors',
            credentials: 'omit'
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
        }

        const blob = await response.blob();

        // Validate that we got an image
        if (!blob.type.startsWith('image/')) {
            throw new Error('The fetched content is not an image');
        }

        // Create FormData
        const formData = new FormData();
        formData.append('file', blob, 'image.png');

        // Send to API
        const apiResponse = await fetch(API_URL, {
            method: 'POST',
            body: formData,
            mode: 'cors'
        });

        if (!apiResponse.ok) {
            throw new Error(`API request failed: ${apiResponse.status} ${apiResponse.statusText}`);
        }

        const data = await apiResponse.json();

        if (!data.error) {
            return data;
        } else {
            throw new Error(data.error || 'API request failed');
        }
    } catch (error) {
        // Handle CORS or network errors
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            throw new Error('Unable to connect to the DeepGuard backend. Please ensure the backend is running on localhost:7860');
        } else if (error.message.includes('CORS')) {
            throw new Error('Cannot access this image due to cross-origin restrictions. Try uploading from the extension popup instead.');
        }
        throw error;
    }
}

// Add visual indicator when hovering over images (optional enhancement)
let isEnabled = true;

chrome.storage.local.get(['extensionEnabled'], (data) => {
    isEnabled = data.extensionEnabled !== false; // Default to true
});

// Optional: Add hover effect to images to indicate they can be checked
if (isEnabled) {
    document.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'IMG' && !e.target.dataset.deepguardHover) {
            e.target.dataset.deepguardHover = 'true';
            e.target.style.cursor = 'pointer';
            e.target.title = 'Right-click to check for deepfake';
        }
    }, true);
}
