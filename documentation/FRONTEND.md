# Frontend Documentation

The DeepGuard interface is designed with a **Cyberpunk / Brutalist** aesthetic to match the high-tech nature of deepfake detection. It is built using standard web technologies without heavy frameworks to ensure maximum performance and customizability.

## File Structure

- **`index.html`**: The main entry point. Contains the layout for the Drag & Drop zone, "How it Works" section, and Footer.
- **`analysis.html`**: The results page. Displays the prediction (Real/Fake), confidence score, and the Heatmap.
- **`history.html`**: The dashboard for viewing past scans.
- **`style.css`**: The core stylesheet. Handles the dark theme, neon accents, and responsive layout.
- **`script.js`**: The main logic controller. Handles file uploads, API communication, and dynamic DOM updates.
- **`loader.js`**: manages the loading screen animations.
- **`three_bg.js`**: (Optional) 3D background effects using Three.js / specialized canvas drawing.

## Key UX Features

### 1. Magnetic & Fluid Effects
- **Library**: Custom CSS/JS.
- **Description**: Buttons and interacting elements have a "magnetic" pull effect when hovered, and the background features fluid-like glowing animations.

### 2. The Result "Reveal"
- When a prediction is received, the `analysis.html` page uses a particle effect (via `motion.js` if applicable) to transition from the scanning state to the final result.

### 3. Heatmap Overlay
- The backend returns a Base64-encoded heatmap.
- **Implementation**: The frontend receives this string and sets it as the `src` of an `<img>` tag, overlaid on the original image with CSS `opacity` and `mix-blend-mode`.
