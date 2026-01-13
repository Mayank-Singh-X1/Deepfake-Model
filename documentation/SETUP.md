# Installation & Setup Guide

> 💡 **New to this?** If you're a complete beginner, check out the [Quick Start Guide](QUICK_START.md) for a simplified walkthrough!

This guide walks you through setting up DeepGuard on your computer. We'll install everything you need and get the system running.

## ⚡ What You're About to Do

By the end of this guide, you'll have:
- ✅ Python and all required tools installed
- ✅ The DeepGuard backend server running
- ✅ A web interface where you can test images
- ✅ Everything working on your local computer

**Time needed:** About 15-30 minutes (depending on your internet speed)

---

## Prerequisites

**"Prerequisites" just means "things you need before you start."**

Since DeepGuard uses Python (a programming language) and Deep Learning libraries (AI tools), you'll need:

- **Python 3.8 or newer** (Recommended: 3.10 or 3.11)
  - *What is this?* A programming language that DeepGuard is written in
  - *How to get it?* Download from [python.org](https://www.python.org/downloads/)
  
- **pip** (Python Package Manager)
  - *What is this?* A tool that installs other Python tools automatically
  - *How to get it?* It comes with Python - you probably already have it!
  
- **Git** (Version Control System)
  - *What is this?* A tool for downloading code from the internet
  - *How to get it?* Download from [git-scm.com](https://git-scm.com/downloads/)

---

## 1. Clone the Repository

**"Clone" = download a copy of the code to your computer**

```bash
git clone <your-repo-url>
cd morden-detections-system
```

**Don't have Git?** You can also download the code as a ZIP file and extract it.

---

## 2. Backend Setup

**"Backend" = the brain of DeepGuard that does all the AI analysis**

The backend requires specific ML (Machine Learning) libraries to work. We recommend using a **Virtual Environment** - think of it as a separate workspace that keeps DeepGuard's tools organized and doesn't interfere with other programs on your computer.

### Navigate to the Backend Folder

```bash
cd backend
```

### Create a Virtual Environment

**What this does:** Creates an isolated space for DeepGuard's dependencies

**On Mac/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

**On Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**How to know it worked:** You should see `(venv)` appear at the start of your command line!

### Install Dependencies

**What this does:** Downloads and installs all the tools DeepGuard needs

```bash
pip install -r requirements_web.txt
```

This might take several minutes. You'll see lots of text scrolling by - that's normal! ☕ Grab a coffee while you wait.

> **Note**: If `requirements_web.txt` doesn't include PyTorch (the main AI library), you may need to install it manually:
> ```bash
> pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
> ```
> 
> **Adjust for your system:**
> - **NVIDIA GPU (CUDA):** Use the command above
> - **Mac with M1/M2/M3/M4:** PyTorch will automatically detect and use MPS
> - **CPU only:** Use `pip install torch torchvision torchaudio`

---

## 3. Model Setup

**"Model" = the trained AI brain that knows how to spot deepfakes**

The backend needs a special file that contains all the "knowledge" the AI learned during training. This file is called a checkpoint.

**What to do:**
1. Look for a file in this location: `model/results/checkpoints/`
2. The file should be named `best_model.safetensors` (or something similar)
3. If you trained the model yourself, this file should already exist
4. If you don't have it, you may need to obtain it from the project source or train your own

**File size:** This file is usually quite large (100MB - 500MB+) because it contains all the AI's learned patterns!

---

## 4. Running the Application

**This is the exciting part - let's start DeepGuard!**

### Start the Server

Make sure you're in the `backend` directory with your virtual environment activated (you should see `(venv)` in your terminal), then run:

```bash
python app.py
```

### What You Should See

If everything worked, you'll see something like this:

```
Using device: cuda (or mps/cpu)
✅ Model loaded successfully!
🌐 Starting server on http://localhost:5001
```

**What this means:**
- **"Using device: cuda/mps/cpu"** - Tells you whether it's using your graphics card (faster) or just your regular processor
- **"Model loaded successfully"** - The AI brain is ready!
- **"Starting server on http://localhost:5001"** - The web interface is now available

**Don't close this terminal window!** The server needs to keep running for DeepGuard to work.

---

## 5. Using the App

### Open in Your Browser

1. Open your favorite web browser (Chrome, Firefox, Safari, Edge, etc.)
2. Type this in the address bar: `http://localhost:5001`
3. Press Enter
4. You should see the DeepGuard interface! 🎉

### Test It Out

1. Find any image on your computer (JPG or PNG)
2. Drag and drop it onto the upload area
3. Wait a few seconds while DeepGuard analyzes it
4. See the results - REAL or FAKE, plus a confidence score and heatmap!

**Pro tip:** Try testing with both real photos and AI-generated images to see how accurate it is!

---

## ❓ Troubleshooting

**Something went wrong? Don't panic! Here are solutions to common problems:**

### Common Issues

#### 1. "Model file not found"

**Full Error Message:**
```
❌ CRITICAL ERROR: Model file not found at: .../best_model.safetensors
```

**What this means:** The AI brain file is missing.

**How to fix:**
- Make sure you have downloaded or trained a model
- Check that the file exists in `model/results/checkpoints/`
- If the file has a different name, either:
  - Rename it to `best_model.safetensors`, OR
  - Update the filename in `backend/app.py` (look for the `load_model()` function)

---

#### 2. "Safetensors not installed"

**Full Error Message:**
```
Warning: safetensors not installed.
```

**What this means:** A required tool for loading the AI model is missing.

**How to fix:**
```bash
pip install safetensors
```

---

#### 3. CUDA Out of Memory

**Full Error Message:**
```
RuntimeError: CUDA out of memory
```

**What this means:** Your graphics card doesn't have enough memory to run the AI model.

**How to fix:**
- **Option 1:** Close other programs that might be using your GPU (like games, video editors, etc.)
- **Option 2:** Force DeepGuard to use CPU instead
  - Open `model/src/config.py`
  - Find the device setting and change it to `"cpu"`
- **Option 3:** Lower the batch size (how many images it processes at once)
  - Open `model/src/config.py`
  - Find `BATCH_SIZE` and change it from 32 to 16 or 8

---

#### 4. Import Errors (e.g., `Module not found: albumentations`)

**Full Error Message:**
```
ModuleNotFoundError: No module named 'albumentations'
```

**What this means:** A required Python package isn't installed.

**How to fix:**
1. Make sure your virtual environment is activated (you should see `(venv)` in your terminal)
2. If it's not activated, run:
   - **Mac/Linux:** `source venv/bin/activate`
   - **Windows:** `venv\Scripts\activate`
3. Run the install command again: `pip install -r requirements_web.txt`

---

#### 5. "Python not found" or "Command not found"

**What this means:** Your system can't find Python.

**How to fix:**
- Make sure Python is installed (download from python.org)
- Try using `python` instead of `python3` (or vice versa)
- On Windows, make sure you checked "Add Python to PATH" during installation

---

#### 6. Port 5001 is already in use

**Full Error Message:**
```
OSError: [Errno 48] Address already in use
```

**What this means:** Something else is already using port 5001.

**How to fix:**
- **Option 1:** Find and close the other program using port 5001
- **Option 2:** Change DeepGuard to use a different port
  - Open `backend/app.py`
  - Look for the line with `app.run(..., port=5001)`
  - Change 5001 to something else like 5002 or 8080
  - Access it at `http://localhost:5002` (or whatever port you chose)

---

## 🎉 Success!

If you made it through all the steps without errors, congratulations! You now have DeepGuard running on your computer.

### Next Steps

- **Learn how it works:** Read [How It Works (Simple)](HOW_IT_WORKS_SIMPLE.md)
- **Explore the interface:** Check out the [Frontend Guide](FRONTEND.md)
- **Use the API:** Read the [Backend API Documentation](BACKEND_API.md)
- **Customize it:** See the [Advanced Usage Guide](ADVANCED_USAGE.md)

---

## 🆘 Still Need Help?

- Check the [FAQ](FAQ.md) for more common questions
- Review the [Glossary](GLOSSARY.md) if you don't understand a term
- Read the error messages carefully - they often tell you exactly what's wrong!

**Remember:** Everyone runs into problems when setting up new software. Don't get discouraged - you've got this! 💪
