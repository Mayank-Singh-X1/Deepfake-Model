# Quick Start Guide - Get DeepGuard Running in 5 Minutes!

This guide will help you get DeepGuard up and running quickly, even if you've never done this before.

## ⏱️ What You'll Need

- **10-15 minutes** of your time
- **A computer** (Mac, Windows, or Linux)
- **An internet connection** to download some files

Don't worry if you're not technical - we'll explain everything step by step!

## 📋 Before We Start

### Do You Have Python?

Python is a programming language that DeepGuard is written in. Let's check if you have it:

**On Mac or Linux:**
1. Open Terminal (search for "Terminal" on your computer)
2. Type: `python3 --version` and press Enter
3. If you see something like "Python 3.10.0", you're good! ✅
4. If you see an error, you need to install Python ❌

**On Windows:**
1. Open Command Prompt (search for "cmd" on your computer)
2. Type: `python --version` and press Enter
3. If you see something like "Python 3.10.0", you're good! ✅
4. If you see an error, you need to install Python ❌

### Don't Have Python?

No problem! Download it here:
- **Visit:** [python.org/downloads](https://www.python.org/downloads/)
- **Click** the big yellow "Download Python" button
- **Install** it like any other program
- **Make sure** to check the box that says "Add Python to PATH" during installation!

## 🚀 Step 1: Download DeepGuard

You need to get the DeepGuard code on your computer. If you know how to use Git, clone the repository. If not, follow these steps:

1. **Download the code** as a ZIP file from your repository
2. **Unzip it** to a folder you can remember (like your Desktop or Documents)
3. **Remember where you saved it!**

## 📦 Step 2: Install the Required Tools

DeepGuard needs some extra tools to work. Let's install them!

### Open Your Terminal/Command Prompt

- **Mac/Linux:** Open Terminal
- **Windows:** Open Command Prompt

### Navigate to the DeepGuard Folder

Type this command (replace `/path/to/` with where you actually saved DeepGuard):

```bash
cd /path/to/morden-detections-system
```

**Example on Mac:**
```bash
cd ~/Desktop/morden-detections-system
```

**Example on Windows:**
```bash
cd C:\Users\YourName\Desktop\morden-detections-system
```

> 💡 **Tip:** You can usually drag the folder into Terminal/Command Prompt to auto-fill the path!

### Go to the Backend Folder

```bash
cd backend
```

### Install Everything DeepGuard Needs

**Copy and paste this entire command:**

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements_web.txt
```

**On Windows, use these commands instead:**

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements_web.txt
```

This might take a few minutes. You'll see lots of text scrolling by - that's normal! ☕

## 🎯 Step 3: Make Sure You Have the AI Model

DeepGuard needs a special file called a "model" that contains all the intelligence to detect deepfakes. 

**Check if you have it:**
1. Look in the `model/results/checkpoints/` folder
2. Look for a file called `best_model.safetensors`

**If you don't see it:**
- You'll need to download it or train your own model
- For now, this Quick Start assumes you have the model file
- Check the main [Setup Guide](SETUP.md) for more details on getting the model

## ▶️ Step 4: Start DeepGuard!

Still in the `backend` folder with your virtual environment activated, run:

```bash
python app.py
```

You should see something like this:

```
Using device: cpu
✅ Model loaded successfully!
🌐 Starting server on http://localhost:5001
```

🎉 **Success!** DeepGuard is now running!

## 🌐 Step 5: Open It in Your Browser

1. Open your web browser (Chrome, Firefox, Safari, etc.)
2. Type this in the address bar: `http://localhost:5001`
3. Press Enter

You should see the DeepGuard interface! 🎊

## 🖼️ Step 6: Test It Out!

1. **Find an image** on your computer (any JPG or PNG will work)
2. **Drag and drop** it into the upload area on the website
3. **Wait a few seconds** while DeepGuard analyzes it
4. **See the results!** It will tell you if it thinks the image is REAL or FAKE

## 🛑 How to Stop DeepGuard

When you're done:
1. Go back to your Terminal/Command Prompt
2. Press `Ctrl + C` (works on both Mac and Windows)
3. Type `deactivate` to exit the virtual environment

## ❓ Something Not Working?

### "Python not found" error
- Make sure you installed Python from python.org
- Try using `python` instead of `python3` in the commands (or vice versa)

### "Model file not found" error
- You need to get the `best_model.safetensors` file
- Check the full [Setup Guide](SETUP.md) for instructions

### "Port already in use" error
- Something else is using port 5001
- Try closing other programs, or edit `app.py` to use a different port

### "Module not found" errors
- Make sure you activated the virtual environment
- Try running the install command again

### Still stuck?
Check the [FAQ](FAQ.md) or the detailed [Setup Guide](SETUP.md) for more help!

## 🎓 What's Next?

Now that you have DeepGuard running:

- 📖 Learn **[How It Works (Simple)](HOW_IT_WORKS_SIMPLE.md)** to understand the magic
- 🔧 Check the full **[Setup Guide](SETUP.md)** for advanced options
- 🎨 Explore the **[Frontend Guide](FRONTEND.md)** to customize the interface

---

**Congratulations!** You just set up an AI-powered deepfake detector! 🎉
