# Backend API Documentation

> 💡 **What's an API?** Think of it as a menu at a restaurant - it lists all the things you can ask the backend to do for you. This guide explains how to "order" from the DeepGuard backend!

---

## 🤔 Who Needs This Guide?

**You need this if you want to:**
- Build your own app that uses DeepGuard
- Integrate deepfake detection into another program
- Understand how the frontend talks to the backend
- Create automated scripts that analyze images

**You DON'T need this if you just want to:**
- Use the web interface (that's already built!)
- Just detect deepfakes manually

---

## 🌐 Base URL

**When running locally:**
```
http://localhost:5001
```

**What this means:** When DeepGuard is running on your computer, this is the "address" where you can talk to it.

**If you changed the port:** Replace `5001` with whatever port you configured.

---

## 📡 The API Endpoints

Think of these as different "services" you can request. Each one does a specific job.

---

### 1. Health Check ✅

**Purpose:** Check if the server is running and the AI model is loaded

**When to use:** Before sending images, to make sure everything is working

**URL:** `/api/health`  
**Method:** `GET`  
**Needs authentication?** No

#### How to Call It

**Using browser:**
Just visit: `http://localhost:5001/api/health`

**Using curl (command line):**
```bash
curl http://localhost:5001/api/health
```

**Using JavaScript:**
```javascript
fetch('http://localhost:5001/api/health')
  .then(response => response.json())
  .then(data => console.log(data));
```

#### Response

**If everything is working:**
```json
{
  "status": "healthy",
  "model_loaded": true,
  "device": "cuda"
}
```

**What it means:**
- `status`: Overall health ("healthy" or "error")
- `model_loaded`: Is the AI ready? (true/false)
- `device`: What hardware is being used ("cuda" = GPU, "mps" = Apple Silicon, "cpu" = processor)

---

### 2. Predict Image 🔍

**Purpose:** Upload an image and get a deepfake detection result

**When to use:** This is the main function - detecting if an image is fake!

**URL:** `/api/predict`  
**Method:** `POST`  
**Needs authentication?** No  
**Content Type:** `multipart/form-data`

#### How to Call It

**Using curl:**
```bash
curl -X POST \
  -F "file=@/path/to/your/image.jpg" \
  http://localhost:5001/api/predict
```

**Using JavaScript:**
```javascript
const formData = new FormData();
formData.append('file', imageFile);  // imageFile is a File object

fetch('http://localhost:5001/api/predict', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => {
  console.log('Prediction:', data.prediction);
  console.log('Confidence:', data.confidence);
});
```

**Using Python:**
```python
import requests

url = 'http://localhost:5001/api/predict'
files = {'file': open('image.jpg', 'rb')}
response = requests.post(url, files=files)
result = response.json()

print(f"Prediction: {result['prediction']}")
print(f"Confidence: {result['confidence']}")
```

#### Request Parameters

**Form field:** `file`  
**Type:** Image file  
**Accepted formats:** JPG, JPEG, PNG, WebP  
**Max size:** Depends on your server configuration (typically 16MB)

#### Response

**Success:**
```json
{
  "prediction": "FAKE",
  "confidence": 98.5,
  "fake_probability": 0.985,
  "real_probability": 0.015,
  "heatmap": "data:image/png;base64,iVBORw0KGgoAAAANS..."
}
```

**What each field means:**
- `prediction`: Either "REAL" or "FAKE"
- `confidence`: How certain (0-100%)
- `fake_probability`: Mathematical probability it's fake (0.0-1.0)
- `real_probability`: Mathematical probability it's real (0.0-1.0)
- `heatmap`: Base64-encoded image showing suspicious areas

**Error:**
```json
{
  "error": "No file uploaded",
  "status": "error"
}
```

---

### 3. Get History 📚

**Purpose:** Retrieve a list of all past image scans

**When to use:** To review previous analyses or build a history dashboard

**URL:** `/api/history`  
**Method:** `GET`  
**Needs authentication?** No

#### How to Call It

**Using curl:**
```bash
curl http://localhost:5001/api/history
```

**Using JavaScript:**
```javascript
fetch('http://localhost:5001/api/history')
  .then(response => response.json())
  .then(history => {
    history.forEach(scan => {
      console.log(`${scan.filename}: ${scan.prediction} (${scan.confidence}%)`);
    });
  });
```

#### Response

**Success:**
```json
[
  {
    "id": 1,
    "filename": "test.jpg",
    "prediction": "FAKE",
    "confidence": 99.1,
    "timestamp": "2024-10-27 10:00:00"
  },
  {
    "id": 2,
    "filename": "photo.png",
    "prediction": "REAL",
    "confidence": 95.3,
    "timestamp": "2024-10-27 10:05:00"
  }
]
```

**What each field means:**
- `id`: Unique identifier for this scan
- `filename`: Name of the uploaded file
- `prediction`: Result (REAL or FAKE)
- `confidence`: Confidence percentage
- `timestamp`: When the scan happened

**Empty history:**
```json
[]
```

---

### 4. Delete Single Scan 🗑️

**Purpose:** Remove one specific entry from history

**When to use:** User wants to delete a particular scan

**URL:** `/api/history/{scan_id}`  
**Method:** `DELETE`  
**Needs authentication?** No

#### How to Call It

**Using curl:**
```bash
# Delete scan with ID 5
curl -X DELETE http://localhost:5001/api/history/5
```

**Using JavaScript:**
```javascript
const scanId = 5;
fetch(`http://localhost:5001/api/history/${scanId}`, {
  method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log(data.message));
```

#### Response

**Success:**
```json
{
  "message": "Scan deleted successfully",
  "status": "success"
}
```

**Not found:**
```json
{
  "error": "Scan not found",
  "status": "error"
}
```

---

### 5. Clear All History 🧹

**Purpose:** Delete ALL history entries at once

**When to use:** User wants to clear their entire history

**URL:** `/api/history`  
**Method:** `DELETE`  
**Needs authentication?** No

#### How to Call It

**Using curl:**
```bash
curl -X DELETE http://localhost:5001/api/history
```

**Using JavaScript:**
```javascript
fetch('http://localhost:5001/api/history', {
  method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log(data.message));
```

#### Response

**Success:**
```json
{
  "message": "All history cleared",
  "status": "success"
}
```

---

### 6. Model Info 🤖

**Purpose:** Get technical details about the loaded AI model

**When to use:** For debugging or displaying model information

**URL:** `/api/model-info`  
**Method:** `GET`  
**Needs authentication?** No

#### How to Call It

**Using curl:**
```bash
curl http://localhost:5001/api/model-info
```

#### Response Example

```json
{
  "model_type": "DeepfakeDetector",
  "architecture": "4-Branch Hybrid (EfficientNetV2 + SwinV2)",
  "input_size": "256x256",
  "parameters": "~24M",
  "device": "cuda",
  "loaded": true
}
```

---

## 🔧 Using the API in Your Own App

### Example: Python Script

```python
import requests
import sys

def check_image(image_path):
    """Check if an image is a deepfake"""
    
    # 1. Make sure server is running
    health = requests.get('http://localhost:5001/api/health').json()
    if not health.get('model_loaded'):
        print("❌ Model not loaded!")
        return
    
    # 2. Send image for analysis
    with open(image_path, 'rb') as img:
        files = {'file': img}
        response = requests.post(
            'http://localhost:5001/api/predict',
            files=files
        )
    
    # 3. Display results
    result = response.json()
    print(f"🔍 Analyzing: {image_path}")
    print(f"📊 Prediction: {result['prediction']}")
    print(f"💯 Confidence: {result['confidence']}%")
    
    if result['prediction'] == 'FAKE':
        print("⚠️  This image appears to be AI-generated!")
    else:
        print("✅ This image appears to be real")

# Usage
check_image('my_image.jpg')
```

### Example: JavaScript Web App

```javascript
class DeepfakeDetector {
  constructor(baseURL = 'http://localhost:5001') {
    this.baseURL = baseURL;
  }
  
  async checkHealth() {
    const response = await fetch(`${this.baseURL}/api/health`);
    return await response.json();
  }
  
  async analyzeImage(imageFile) {
    const formData = new FormData();
    formData.append('file', imageFile);
    
    const response = await fetch(`${this.baseURL}/api/predict`, {
      method: 'POST',
      body: formData
    });
    
    return await response.json();
  }
  
  async getHistory() {
    const response = await fetch(`${this.baseURL}/api/history`);
    return await response.json();
  }
}

// Usage
const detector = new DeepfakeDetector();

// Check an image
const result = await detector.analyzeImage(myImageFile);
console.log(result);
```

---

## ⚠️ Error Handling

**Common errors you might encounter:**

### "No file uploaded"
**Cause:** Forgot to include a file in the request  
**Fix:** Make sure you're sending a file in the `file` form field

### "Invalid file type"
**Cause:** Tried to upload a non-image file  
**Fix:** Only send JPG, PNG, or WebP files

### "Model not loaded"
**Cause:** The AI model failed to load  
**Fix:** Check server logs, make sure `best_model.safetensors` exists

### "Connection refused"
**Cause:** Backend server isn't running  
**Fix:** Start the server with `python app.py`

### "CORS error" (in browser)
**Cause:** Cross-Origin Request blocked  
**Fix:** Make sure CORS is enabled in `app.py` (it should be by default)

---

## 🔒 Security Considerations

### Running Locally
- ✅ No external access - only accessible from your computer
- ✅ No authentication needed for local development

### Deploying Online
- ⚠️ Consider adding authentication (API keys, OAuth, etc.)
- ⚠️ Add rate limiting to prevent abuse
- ⚠️ Use HTTPS to encrypt data in transit
- ⚠️ Implement file size limits
- ⚠️ Validate and sanitize all inputs

---

## 📚 Next Steps

**Want to learn more?**
- **See the backend code:** Check `backend/app.py`
- **Understand the system:** Read [Architecture](ARCHITECTURE.md)
- **Deploy it online:** See [Deployment Guide](DEPLOYMENT.md)
- **Customize it:** See [Advanced Usage](ADVANCED_USAGE.md)

**Want to use the web interface instead?**
- Just open `http://localhost:5001` in your browser!
- See [Frontend Guide](FRONTEND.md) for interface details

---

**Bottom Line:** The API gives you programmatic access to DeepGuard's deepfake detection. Use it to build your own apps, automate analysis, or integrate with other systems!
