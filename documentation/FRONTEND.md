# Frontend Documentation

> 💡 **Quick Intro:** The "frontend" is the website part of DeepGuard - what you see in your browser! This guide explains how it works and how to customize it.

---

## 🎨 What is the Frontend?

**Simple answer:** It's the visual interface where you:
- Drag and drop images to test
- See the results (REAL or FAKE)
- View the heatmap showing suspicious areas
- Check your scan history

**Design Style:** DeepGuard uses a **Cyberpunk / Brutalist** aesthetic - think dark themes, neon accents, and high-tech vibes to match the cutting-edge AI technology!

**Technology:** Built with standard web technologies that work in any browser - no special frameworks needed!
- **HTML5** - Structure of the pages
- **CSS3** - Visual styling  
- **JavaScript** - Interactive functionality

---

## 📁 File Structure

Here's what each file does:

### Main Pages

#### `index.html` - The Homepage
**What it contains:**
- The main landing page
- Drag & Drop upload zone
- "How It Works" explanation section
- Footer with project info

**This is the first thing users see!**

---

#### `analysis.html` - The Results Page
**What it contains:**
- The prediction result (REAL or FAKE)
- Confidence score (how sure the AI is)
- The heatmap overlay (colorful suspicious area map)
- Option to analyze another image

**This is where the magic happens!** Users see whether their image is real or fake.

---

#### `history.html` - The Dashboard
**What it contains:**
- List of all past scans
- Previous results and timestamps
- Ability to clear history
- Quick stats (if implemented)

**For power users** who want to track their analysis over time.

---

### Styling & Scripts

#### `style.css` - The Master Stylesheet
**What it handles:**
- Dark cyberpunk theme (blacks, dark grays)
- Neon accent colors (bright greens, blues, purples)
- Responsive layout (works on mobile and desktop)
- All button, text, and component styles
- Animations and transitions

**Pro tip:** Want to change colors? This is the file to edit!

---

#### `script.js` - The Main Logic Controller
**What it does:**
- Handles file uploads when you drag/drop
- Communicates with the backend API
- Receives and displays results
- Updates the page dynamically (without reloading)
- Manages history storage

**This is the "brain" of the frontend!**

---

####`loader.js` - Loading Screen Manager
**What it does:**
- Shows the cool loading animation while analyzing
- Displays progress indicators
- Handles transitions between states

**Makes waiting actually enjoyable!** 

---

#### `three_bg.js` - 3D Background Effects (Optional)
**What it does:**
- Creates animated 3D background using Three.js
- Adds depth and visual interest
- Purely decorative - can be disabled for performance

**Eye candy for powerful computers!**

---

## ✨ Key UX Features

### 1. Magnetic & Fluid Effects

**What they are:** Buttons and interactive elements have a "magnetic pull" effect when you hover over them - they subtly move toward your cursor.

**Technology:** Custom CSS animations and JavaScript

**Why it's cool:** Makes the interface feel alive and responsive - very satisfying to interact with!

**Implementation:**
- Cursor position tracking in JavaScript
- CSS transforms to move elements
- Smooth transitions for fluid motion

---

### 2. The Result "Reveal" Animation

**What it is:** When analysis completes, the results don't just pop up - they animate in with a cool particle/reveal effect.

**Flow:**
1. Upload image → Scanning animation
2. Analysis complete → Particle burst effect
3. Fade in results → Display prediction
4. Show heatmap → Color overlay appears

**Technology:** CSS animations + JavaScript timing + possibly `motion.js` for advanced effects

**Purpose:** Builds anticipation and makes results feel more impactful!

---

### 3. Heatmap Overlay System

**How it works:**

#### On the Backend:
1. The AI analyzes the image
2. Grad-CAM generates a heatmap
3. Heatmap is encoded as Base64 (text representation of image)
4. Sent back in the API response

#### On the Frontend:
1. Receive Base64 string from backend
2. Create an `<img>` tag with the Base64 as the source
3. Overlay it on top of the original image
4. Use CSS to make it semi-transparent
5. Apply `mix-blend-mode` for better visual effect

**CSS Properties Used:**
```css
.heatmap {
  opacity: 0.6;  /* Semi-transparent */
  mix-blend-mode: multiply;  /* Blends with original image */
  position: absolute;  /* Overlays on top */
}
```

**Result:** You see your original image with colored highlights showing suspicious areas!

---

## 🔌 Connecting to the Backend

The frontend talks to the backend using the **Fetch API** - a modern way to send and receive data.

### Example: Uploading an Image

```javascript
// When user drops an image
const formData = new FormData();
formData.append('file', imageFile);

// Send to backend
fetch('/api/predict', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => {
  // Display results
  showResult(data.prediction, data.confidence);
  showHeatmap(data.heatmap);
});
```

**In plain English:**
1. Package the image file
2. Send it to `/api/predict` endpoint
3. Wait for response
4. Display the results!

---

## 🎨 Customizing the Look

Want to change how DeepGuard looks? Here's what to edit:

### Changing Colors

**Edit:** `style.css`

**Find the color variables** (usually at the top):
```css
:root {
  --primary-color: #00ff88;  /* Neon green accent */
  --background: #0a0a0a;     /* Almost black */
  --text-color: #ffffff;      /* White text */
}
```

**Change these** to whatever colors you like!

---

### Changing Text

**Edit:** The HTML files (`index.html`, `analysis.html`, etc.)

**Find the text** you want to change and replace it. For example:
```html
<h1>DeepGuard Deepfake Detector</h1>
```
Could become:
```html
<h1>My Amazing Fake Detector</h1>
```

---

### Changing Animations

**Edit:** `loader.js` or the `<style>` sections in HTML files

**Look for CSS keyframes** and adjust timing/effects:
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## 📱 Responsive Design

DeepGuard works on different screen sizes!

**How it adapts:**
- **Desktop (big screens):** Full layout with sidebar
- **Tablet (medium screens):** Adjusted spacing
- **Mobile (small screens):** Stacked layout, larger touch targets

**Technology:** CSS Media Queries

**Example:**
```css
@media (max-width: 768px) {
  /* Mobile styles */
  .container {
    flex-direction: column;
  }
}
```

---

## 🛠️ Common Customizations

### Change the Upload Zone Text
**File:** `index.html`  
**Find:** "Drag & Drop Your Image"  
**Replace with:** Whatever you want!

### Modify the Results Display
**File:** `analysis.html`  
**Edit:** The result cards, add more info, change layout

### Add Your Logo
**File:** `index.html`  
**Add:** An `<img>` tag in the header  
**Example:** `<img src="logo.png" alt="My Logo">`

### Change the Background
**File:** `style.css`  
**Find:** `background-color` or `background-image`  
**Change:** To your preferred background

---

## 🚀 Advanced Features

### Want to Add More Features?

Some ideas:
- **Batch upload** - Analyze multiple images at once
- **Comparison mode** - Compare two images side-by-side
- **Export results** - Download result as PDF or image
- **User accounts** - Track history across devices
- **Share results** - Generate shareable links

**You'll need to:**
1. Modify the frontend HTML/CSS/JS
2. Add corresponding backend API endpoints
3. Update the database schema (if storing new data)

---

## 🧪 Testing Your Changes

After modifying the frontend:

1. **Save your files**
2. **Refresh your browser** (Ctrl/Cmd + R)
3. **Test all functionality:**
   - Can you upload images?
   - Do results display correctly?
   - Does the heatmap show?
   - Is history working?

**Pro tip:** Use your browser's Developer Tools (F12) to debug JavaScript errors!

---

## 📚 Learn More

**Web Development Resources:**
- [MDN Web Docs](https://developer.mozilla.org/) - Excellent HTML/CSS/JS reference
- [W3Schools](https://www.w3schools.com/) - Beginner-friendly tutorials
- [CSS-Tricks](https://css-tricks.com/) - Advanced CSS techniques

**DeepGuard Resources:**
- **Backend API:** See [Backend API Documentation](BACKEND_API.md)
- **System Overview:** See [Architecture](ARCHITECTURE.md)
- **Setup:** See [Setup Guide](SETUP.md)

---

**Bottom Line:** The frontend is user-friendly, customizable, and built with standard web technologies. Modify it to match your style and needs!
