# Frequently Asked Questions (FAQ)

## 🌟 General Questions

### What is DeepGuard?
DeepGuard is a free tool that can tell if an image is real or created by artificial intelligence. It's like a lie detector for photos!

### What's a deepfake?
A "deepfake" is a fake image, video, or audio created using AI technology. These can look incredibly realistic but show things that never actually happened. DeepGuard specializes in detecting fake images.

### Is DeepGuard free?
Yes! DeepGuard is completely free and open source. You can use it, modify it, and even include it in your own projects.

### Do I need to know programming to use it?
To run DeepGuard on your own computer, you'll need basic computer skills (like running commands in Terminal). But you don't need to be a programmer! Just follow the [Quick Start Guide](QUICK_START.md).

### Can I use this in my browser without installing anything?
Not yet! Currently, you need to run DeepGuard on your own computer. However, you could deploy it to a website - check the [Deployment Guide](DEPLOYMENT.md) to learn how.

### Is my data private?
Yes! When you run DeepGuard on your computer, all images are processed locally. Nothing is sent to external servers unless you choose to deploy it online.

## 🎯 Performance Questions

### How accurate is DeepGuard?
DeepGuard achieves **99.15% accuracy** on its validation dataset. That means it correctly identifies real vs. fake images 99 times out of 100!

However, keep in mind:
- New AI image generators keep getting better
- No detector is 100% perfect
- Always use multiple sources to verify important information

### How long does it take to analyze an image?
On a modern computer:
- **With GPU:** Usually 1-3 seconds
- **Without GPU (CPU only):** 5-15 seconds

The first analysis might take a bit longer while the system loads.

### What types of fake images can it detect?
DeepGuard is trained to detect images created by:
- GANs (Generative Adversarial Networks) - like StyleGAN, ProGAN
- Diffusion Models - like Stable Diffusion, Midjourney, DALL-E
- Other AI image generation techniques

### Can it detect edited/Photoshopped images?
DeepGuard is specifically designed to detect **AI-generated** images, not traditional photo editing. It might not reliably detect:
- Photos edited in Photoshop
- Images with filters applied
- Traditionally manipulated photos

However, it may sometimes flag heavily edited images as "fake."

### Can it detect deepfake videos?
The current version focuses on **still images only**. Video detection is planned for future updates!

### Does it work on all image formats?
DeepGuard works with common image formats:
- ✅ JPG/JPEG
- ✅ PNG
- ✅ WebP
- ❌ GIFs (would only analyze the first frame)

## 💻 Technical Questions

### What programming language is it written in?
DeepGuard is written in **Python**, one of the most popular programming languages for AI applications.

### What AI technology does it use?
DeepGuard uses a combination of:
- **Convolutional Neural Networks (CNNs)** - Great at understanding visual patterns
- **Vision Transformers (ViTs)** - Excellent at understanding image context
- A unique **4-branch architecture** that looks at images in 4 different ways simultaneously

Don't worry if those terms sound complicated! Check out [How It Works (Simple)](HOW_IT_WORKS_SIMPLE.md) for an easier explanation.

### Do I need a powerful computer?
**Minimum requirements:**
- Python 3.8 or newer
- 4GB RAM (8GB recommended)
- 2GB free disk space

**GPU (Graphics Card):**
- Not required, but makes things faster!
- Works with NVIDIA GPUs (CUDA), Apple Silicon (M1/M2/M3/M4), or CPU

### Can I train my own model?
Yes! If you have your own dataset of real and fake images, you can train a custom model. Check the [Advanced Usage Guide](ADVANCED_USAGE.md) for details.

This requires:
- A large dataset (thousands of images)
- A powerful computer or cloud GPU
- More technical knowledge

## 🚀 Usage Questions

### Where do I start?
Follow the [Quick Start Guide](QUICK_START.md)! It will walk you through everything step by step.

### Can I use this for my business/project?
Yes! DeepGuard is open source. However:
- Check what license it's released under
- Consider deploying it on your own servers for commercial use
- Remember that no AI detector is 100% perfect - use it as one tool among many

### Can I integrate this into my own app?
Absolutely! DeepGuard provides an API that you can call from your own applications. See the [Backend API Documentation](BACKEND_API.md) for details.

### How do I interpret the results?
DeepGuard gives you two main pieces of information:

1. **Prediction:** Either "REAL" or "FAKE"
2. **Confidence Score:** A percentage (0-100%) showing how certain it is

For example:
- "FAKE - 98.5% confidence" = Very likely AI-generated
- "REAL - 65% confidence" = Probably real, but not certain
- "FAKE - 52% confidence" = Not confident at all, treat with skepticism

### What's the heatmap showing me?
The heatmap highlights which parts of the image made DeepGuard think it was fake. Brighter/warmer colors (red, yellow) show suspicious areas, while darker/cooler colors show normal areas.

Think of it as the AI "showing its work" - pointing to the evidence it used to make its decision.

## 🛠️ Troubleshooting

### "Python not found" error
Make sure Python is installed and added to your PATH. Download from [python.org](https://www.python.org/downloads/).

Try using `python` instead of `python3` or vice versa.

### "Model file not found" error
You need the trained model file (`best_model.safetensors`). This file should be in `model/results/checkpoints/`. 

If you don't have it:
- You may need to train the model yourself
- Or obtain it from elsewhere (check your project source)

### "CUDA out of memory" error
Your GPU doesn't have enough memory. Try:
1. Closing other programs
2. Using CPU instead (edit `config.py` to force CPU mode)
3. Reducing batch size in the config file

### The interface won't load in my browser
Make sure:
1. The backend is running (you should see "Starting server on http://localhost:5001")
2. You're visiting the correct address: `http://localhost:5001`
3. Port 5001 isn't blocked by your firewall
4. No other program is using port 5001

### It says every image is fake (or real)!
This might mean:
- The model file is corrupted
- The model wasn't loaded correctly
- You need to check the console for error messages

Try redownloading/retraining the model.

### More problems?
Check the detailed [Setup Guide](SETUP.md) troubleshooting section, or review the error messages carefully - they often tell you exactly what's wrong!

## 🎓 Learning More

### I want to understand how it works
Start with [How It Works (Simple)](HOW_IT_WORKS_SIMPLE.md) for a beginner-friendly explanation, then move to [System Architecture](ARCHITECTURE.md) for technical details.

### I want to improve it or contribute
Check out the [Advanced Usage Guide](ADVANCED_USAGE.md) to learn about fine-tuning and customization.

### Where can I learn more about AI and deepfakes?
Great resources:
- Search for "deepfake detection" on YouTube for video explanations
- MIT OpenCourseWare has free AI courses
- Papers with Code has research papers on deepfake detection
- Your local library may have books on AI and machine learning

## ❓ Still Have Questions?

If your question isn't answered here:
1. Check the other documentation files - they have lots of detail!
2. Look at the error messages carefully - they often explain the problem
3. Search online for your specific error message
4. Check if others have had similar issues in the project repository

---

**Remember:** Learning new technology takes time. Don't get discouraged if things don't work perfectly the first time. You've got this! 💪
