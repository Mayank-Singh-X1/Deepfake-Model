# DeepGuard: AI-Powered Deepfake Detection System 🕵️‍♂️

<p align="center">
  <strong>Detect AI-generated images with 99.15% accuracy</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Accuracy-99.15%25-brightgreen" alt="Accuracy"/>
  <img src="https://img.shields.io/badge/Python-3.8%2B-blue" alt="Python"/>
  <img src="https://img.shields.io/badge/PyTorch-2.0%2B-orange" alt="PyTorch"/>
  <img src="https://img.shields.io/badge/License-Open%20Source-yellow" alt="License"/>
</p>

---

## 🤔 What is DeepGuard?

DeepGuard is a **free, open-source tool** that can tell if an image is real or created by artificial intelligence. In a world where AI can generate incredibly realistic fake images, DeepGuard helps you spot the fakes!

**Think of it as:** A lie detector for photos - it looks at images in multiple ways to determine if they're authentic or AI-generated.

**Perfect for:**
- 📰 **Journalists** verifying image authenticity
- 🔍 **Fact-checkers** fighting misinformation  
- 👥 **Social media users** questioning viral images
- 🎓 **Researchers** studying deepfake detection
- 💻 **Developers** building verification systems

---

## ✨ Why DeepGuard is Special

### 🎯 **Incredibly Accurate**
- **99.15% accuracy** on test data
- Trained on 420,508 images from multiple datasets
- Detects both GAN and Diffusion model fakes

### 🔬 **Explainable AI**
- Shows you **WHY** it thinks an image is fake
- Colorful heatmaps highlight suspicious areas
- No "black box" - see the AI's reasoning!

### ⚡ **Fast & Easy**
- Analyzes images in seconds
- **Simple drag-and-drop interface** - no coding required
- Works on your computer (your data stays private!)

### 🧠 **Smart Technology**
- **4-branch AI architecture** examining images from different angles
- Combines CNNs and Vision Transformers
- Finds patterns invisible to human eyes

---

## 🚀 Quick Start

Want to try it out? It takes about 5 minutes!

### Prerequisites
- Python 3.8+ installed on your computer
- A few gigabytes of free space
- The trained model file (`best_model.safetensors`)

### Installation

```bash
# 1. Download the code
git clone <your-repo-url>
cd morden-detections-system/backend

# 2. Create a virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements_web.txt

# 4. Start the server
python app.py
```

### Use It!

1. Open your browser to `http://localhost:5001`
2. Drag and drop an image
3. Get instant results - REAL or FAKE!

**Need more help?** Check the [Quick Start Guide](documentation/QUICK_START.md) for detailed instructions!

---

## 📸 How It Works

DeepGuard uses a unique **4-Detective System**:

1. **🎨 Visual Inspector** - Looks at colors, shapes, and visual artifacts
2. **📡 Frequency Analyst** - Finds hidden patterns using mathematical transforms
3. **🔍 Detail Expert** - Examines small patches for inconsistencies
4. **🧠 Big Picture Thinker** - Checks if the overall scene makes logical sense

All four work together to make a final decision!

**Want the simple explanation?** Read [How It Works (Simple)](documentation/HOW_IT_WORKS_SIMPLE.md)  
**Want technical details?** See [System Architecture](documentation/ARCHITECTURE.md)

---

## 🎯 Features

### For Everyone
- ✅ **Drag-and-drop interface** - No technical skills needed
- ✅ **Instant results** - Know if an image is fake in seconds
- ✅ **Visual explanations** - Heatmaps show suspicious areas
- ✅ **History tracking** - Review your past scans
- ✅ **Free to use** - Open source and no hidden costs

### For Developers
- ✅ **REST API** - Integrate into your own apps
- ✅ **Python & JavaScript** - Easy to customize
- ✅ **Batch processing** - Analyze multiple images
- ✅ **Fine-tuning scripts** - Train on your own data
- ✅ **Docker support** - Easy deployment

### For Researchers
- ✅ **Multi-modal architecture** - Novel 4-branch design
- ✅ **Explainable predictions** - Grad-CAM visualization
- ✅ **Detailed metrics** - Accuracy, precision, recall, F1
- ✅ **Model checkpoints** - SafeTensors format
- ✅ **Training scripts** - Reproduce or improve results

---

## 📊 Performance

### Accuracy Metrics
- **Validation Accuracy:** 99.15%
- **Training Accuracy:** 97.26%
- **Dataset:** 420,508 images (Real + Fake)

### Speed
- **With GPU:** 1-3 seconds per image
- **With Apple Silicon (M1/M2/M3/M4):** 2-5 seconds
- **CPU only:** 5-15 seconds

### Detects Images From
- ✅ StyleGAN, ProGAN (GANs)
- ✅ Stable Diffusion, Midjourney, DALL-E (Diffusion  Models)
- ✅ Other AI generation methods

---

## 📚 Documentation

### Getting Started (Beginners)
1. **[Quick Start Guide](documentation/QUICK_START.md)** - 5-minute setup
2. **[How It Works (Simple)](documentation/HOW_IT_WORKS_SIMPLE.md)** - Understand without jargon
3. **[FAQ](documentation/FAQ.md)** - Common questions answered
4. **[Glossary](documentation/GLOSSARY.md)** - Technical terms explained

### Technical Documentation (Developers)
1. **[Installation & Setup](documentation/SETUP.md)** - Detailed setup instructions
2. **[System Architecture](documentation/ARCHITECTURE.md)** - How everything fits together
3. **[Backend API](documentation/BACKEND_API.md)** - API reference
4. **[Frontend Guide](documentation/FRONTEND.md)** - Web interface details
5. **[Advanced Usage](documentation/ADVANCED_USAGE.md)** - Fine-tuning and customization

### Deployment & Sharing
1. **[Deployment Guide](documentation/DEPLOYMENT.md)** - Host it online
2. **[Hackathon Pitch](documentation/HACKATHON_PITCH.md)** - Present your project

**📖 Start here:** [Documentation Overview](documentation/README.md)

---

## 💻 Technology Stack

**Core AI:**
- PyTorch 2.0+
- EfficientNetV2-Small (RGB branch)
- SwinV2-Tiny (ViT branch)
- Custom FFT analysis (Frequency branch)

**Backend:**
- Python 3.8+
- Flask (Web server)
- OpenCV (Image processing)
- Albumentations (Data augmentation)
- SafeTensors (Model storage)

**Frontend:**
- HTML5, CSS3, JavaScript
- Drag-and-drop API
- Fetch API for backend communication

**Deployment:**
- Docker support
- Vercel (Frontend hosting)
- Hugging Face Spaces (Backend hosting)

---

## 🎪 Use Cases

### Media Verification
Journalists and fact-checkers can verify image authenticity before publishing news stories.

### Social Media Safety
Users can check if viral images are real before sharing them.

### Security & Forensics
Detect forged identity documents, manipulated evidence, or impersonation attempts.

### Research & Education
Study deepfake technology, train custom models, or teach about AI detection.

### Content Moderation
Automatically flag AI-generated content on platforms.

---

## 🛠️ For Developers

### API Example

```python
import requests

# Analyze an image
with open('photo.jpg', 'rb') as img:
    response = requests.post(
        'http://localhost:5001/api/predict',
        files={'file': img}
    )

result = response.json()
print(f"Prediction: {result['prediction']}")
print(f"Confidence: {result['confidence']}%")
```

### Integrate Into Your App

DeepGuard provides a simple REST API. Send images, get predictions - it's that easy!

**Learn more:** [Backend API Documentation](documentation/BACKEND_API.md)

---

## 🚀 Roadmap

**Coming soon:**
- 🎬 Video deepfake detection (frame-by-frame analysis)
- 🔌 Browser extension for real-time detection
- 📱 Mobile app (iOS & Android)
- 🌐 Public API for developers
- 🎯 Specialized models (faces, objects, scenes)

**Want to contribute?** We welcome pull requests and suggestions!

---

## ⚠️ Important Notes

### Limitations
- No AI detector is 100% perfect
- New AI generation methods may evade detection
- Heavily compressed images may reduce accuracy
- Should be one tool among many for verification

### Privacy
- When run locally, all data stays on your computer
- No external API calls or data collection
- You control everything

### Responsible Use
- Use as a detection aid, not absolute truth
- Always verify important information through multiple sources
- Don't use for harassment or malicious purposes

---

## 🤝 Contributing

We welcome contributions! Whether you:
- Found a bug
- Have a feature suggestion
- Want to improve documentation
- Built something cool with DeepGuard

**Let us know!**

---

## 📄 License

[More Information Needed - Add your license here]

---

## 🙏 Acknowledgments

**Built with:**
- EfficientNetV2 and Swin Transformer architectures
- Inspired by research in deepfake detection
- Trained on publicly available datasets

**Special thanks to:**
- The open-source AI community
- PyTorch team
- All contributors and users!

---

## 📞 Contact & Support

- **Documentation:** Check the `/documentation` folder
- **Issues:** [More Information Needed - Add your issue tracker]
- **Questions:** See the [FAQ](documentation/FAQ.md)

---

<p align="center">
  <strong>Fighting deepfakes, one image at a time.</strong><br/>
  Made with ❤️ by the DeepGuard Team
</p>

<p align="center">
  ⭐ If you find DeepGuard useful, consider giving it a star!
</p>
