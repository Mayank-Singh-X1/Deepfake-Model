# Glossary of Terms

> 💡 **Why this exists:** When learning about AI and deepfake detection, you'll come across lots of technical terms. This glossary explains them in simple, everyday language!

**Don't feel like you need to memorize these!** Just come back here when you see a word you don't understand.

---

## 📚 Basic Concepts

### AI (Artificial Intelligence)
**Simple Definition:** Computer programs that can learn and make decisions, kind of like how humans think.

**Example:** When your phone recognizes your face to unlock, that's AI!

---

### Machine Learning (ML)
**Simple Definition:** A type of AI where computers learn from examples instead of being programmed with specific rules.

**Analogy:** It's like teaching a child to recognize dogs - you show them lots of pictures of dogs, and eventually they learn what makes a dog a dog. Machine learning works the same way!

---

### Deep Learning
**Simple Definition:** A powerful type of machine learning that uses layered "neural networks" (inspired by human brains) to learn complex patterns.

**Why "deep"?** Because it has many layers, like a deep stack of pancakes 🥞

**DeepGuard uses this!**

---

### Model
**Simple Definition:** The "brain" of an AI system - it's the result of training. Think of it as a recipe that the computer learned after seeing lots of examples.

**In DeepGuard:** The model is saved in a file called `best_model.safetensors`. It contains all the patterns DeepGuard learned about real vs fake images.

---

### Training
**Simple Definition:** The process of teaching an AI by showing it lots of examples.

**Analogy:** Like studying for a test - you practice with lots of example problems until you get good at it.

**For DeepGuard:** We showed it 420,508 images (both real and fake) and taught it to spot the differences.

---

### Inference
**Simple Definition:** Using a trained model to make predictions on new, never-before-seen data.

**In other words:** After the AI studied (training), now it's taking the test (inference).

**In DeepGuard:** When you upload an image, the model does "inference" to decide if it's real or fake.

---

## 🧠 Deep Learning Terms

### CNN (Convolutional Neural Network)
**Pronunciation:** "See-N-N"

**Simple Definition:** A type of AI that's really good at understanding images. It works by scanning over an image to find patterns - kind of like reading a book with your eyes moving across the page.

**What it's good at:**
- Recognizing objects in photos
- Detecting edges and textures
- Finding visual patterns

**In DeepGuard:** Used in the RGB Branch, Frequency Branch, and Patch Branch.

**Fun fact:** CNNs are what power face filters on social media!

---

### ViT (Vision Transformer)
**Pronunciation:** "Vit" (rhymes with "bit")

**Simple Definition:** A newer type of AI for images that looks at the whole picture at once instead of scanning bit by bit. It's especially good at understanding how different parts of an image relate to each other.

**Analogy:** CNNs are like reading a book word by word. ViTs are like glancing at a whole page and understanding the story.

**In DeepGuard:** Used in the ViT Branch to understand the "big picture" and semantic logic.

---

### Neural Network
**Simple Definition:** Layers of mathematical operations inspired by how human brain cells (neurons) work together.

**Why "network"?** Because there are many connected "neurons" (tiny calculators) working together, like a network of people sharing information.

---

### Tensor
**Simple Definition:** fancy word for a multi-dimensional array of numbers. Images are stored as tensors.

**Example:** An image that's 256x256 pixels with 3 colors (RGB) would be a tensor with dimensions 256 × 256 × 3.

**Don't worry about the math** - just know it's how computers represent data!

---

## 🎨 Image & Deepfake Terms

### Deepfake
**Simple Definition:** A fake image, video, or audio created using AI that looks/sounds incredibly realistic.

**Origin of term:** "Deep" (from deep learning) + "Fake" = Deepfake

**Examples:**
- Fake celebrity photos
- Videos of people saying things they never said
- AI-generated faces of people who don't exist

---

### GAN (Generative Adversarial Network)
**Pronunciation:** "Gan" (like the word "can" with a G)

**Simple Definition:** A type of AI with two parts that compete against each other - one creates fakes, the other tries to spot them. Through this competition, they both get better, and eventually the creator makes very realistic fakes.

**Analogy:** Like a counterfeiter and a detective competing - as the detective gets better at spotting fakes, the counterfeiter learns to make better fakes!

**Examples:** StyleGAN, ProGAN - used to create realistic fake faces.

---

### Diffusion Model
**Simple Definition:** A newer type of AI that creates images by gradually turning random noise into a clear picture, like a Polaroid photo slowly developing.

**Examples:** Stable Diffusion, Midjourney, DALL-E 2, DALL-E 3

**These are getting really good** - which is why tools like DeepGuard are so important!

---

### FFT (Fast Fourier Transform)
**Pronunciation:** "F-F-T" or "Fast Fourier Transform"

**Simple Definition:** A mathematical trick that reveals hidden patterns in data. For images, it can show patterns that are invisible to the human eye but visible to computers.

**Analogy:** Like putting on special glasses that reveal invisible ink.

**In DeepGuard:** Used by the Frequency Branch to spot hidden AI fingerprints.

---

### Grad-CAM (Gradient-weighted Class Activation Mapping)
**Pronunciation:** "Grad-Cam"

**Simple Definition:** A technique that creates a "heatmap" showing which parts of an image the AI looked at when making its decision.

**In DeepGuard:** This creates the colorful overlay that shows you which parts of the image look suspicious.

**Why it's useful:** It's like the AI "showing its work" on a math test - you can see why it made its decision!

---

## 🖥️ System & Technical Terms

### Backend
**Simple Definition:** The "behind-the-scenes" part of a website or app that does all the heavy lifting and processing.

**In DeepGuard:** The Python server that loads the AI model and analyzes images.

**Analogy:** Like the kitchen in a restaurant - customers don't see it, but that's where the food is prepared!

---

### Frontend  
**Simple Definition:** The part of a website or app that users see and interact with.

**In DeepGuard:** The web page where you drag and drop images.

**Analogy:** Like the dining room in a restaurant - what the customer sees and experiences.

---

### API (Application Programming Interface)
**Pronunciation:** "A-P-I"

**Simple Definition:** A way for different computer programs to talk to each other and share information.

**In DeepGuard:** The API lets other programs send images to DeepGuard and get results back.

**Analogy:** Like a waiter who takes your order to the kitchen and brings back your food - they're the interface between you and the kitchen.

---

### Checkpoint
**Simple Definition:** A saved version of a model at a specific point in time.

**Analogy:** Like saving your progress in a video game - if something goes wrong, you can load from the checkpoint.

**In DeepGuard:** The `best_model.safetensors` file is a checkpoint - it's the saved version of the best-performing model.

---

### Epoch
**Pronunciation:** "Ee-pock"

**Simple Definition:** One complete pass through the entire training dataset during the learning process.

**Example:** If you have 10,000 images and the AI looks at all 10,000 once, that's 1 epoch. Training often involves many epochs.

**In DeepGuard:** The model was trained for multiple epochs until it achieved 99.15% accuracy.

---

### Logits
**Pronunciation:** "Low-jits"

**Simple Definition:** The raw, unnormalized scores that come out of a neural network before being converted into probabilities.

**Don't worry about this** unless you're diving deep into the code - just know they're an intermediate step in the prediction process!

---

### Heatmap
**Simple Definition:** A visual representation where colors represent intensity or importance.

**In DeepGuard:** Warm colors (red, orange) show suspicious areas, cool colors (blue, green) show normal areas.

**Analogy:** Like a weather map showing hot and cold areas!

---

### GPU (Graphics Processing Unit)
**Simple Definition:** A special computer chip originally designed for graphics/games, but it turns out it's also amazing at AI calculations.

**Why use it?** GPUs can do many calculations at once, making AI much faster than using a regular processor (CPU).

**In DeepGuard:** If you have a compatible GPU, DeepGuard will use it automatically to speed up analysis.

---

### CUDA
**Pronunciation:** "Coo-da"

**Simple Definition:** NVIDIA's technology that lets AI programs use NVIDIA graphics cards for faster processing.

**Only for:** NVIDIA GPUs (won't work with AMD or Intel graphics)

---

### MPS (Metal Performance Shaders)
**Simple Definition:** Apple's technology that lets AI programs use Apple Silicon chips (M1/M2/M3/M4) for faster processing.

**Only for:** Mac computers with Apple Silicon

---

### CPU (Central Processing Unit)
**Simple Definition:** The main processor in your computer - the "general purpose" chip that does most computing tasks.

**For DeepGuard:** It can run on CPU, but it'll be slower than using a GPU.

---

## 🗂️ File & Code Terms

### Python
**Simple Definition:** A popular programming language that's especially good for AI and data science.

**Why Python?** It's relatively easy to read and has lots of great libraries for AI.

---

### PyTorch
**Pronunciation:** "Pie-Torch"

**Simple Definition:** A popular Python library (toolkit) for building and running AI models.

**Alternatives:** TensorFlow, JAX (DeepGuard uses PyTorch)

---

### Virtual Environment
**Simple Definition:** An isolated workspace for a Python project that keeps its tools and libraries separate from other projects.

**Why use it?** So different projects don't interfere with each other.

**Analogy:** Like having separate toolboxes for different hobbies - your woodworking tools don't mix with your painting supplies.

---

### Repository (Repo)
**Pronunciation:** "Re-poz-i-tor-ee" or just "Repo"

**Simple Definition:** A folder containing all the code and files for a project, usually stored on a platform like GitHub.

---

### Batch Size
**Simple Definition:** How many images the AI processes at the same time.

**Bigger batch = faster but uses more memory**  
**Smaller batch = slower but uses less memory**

**Default in DeepGuard:** 32 images at a time

---

## 🎓 Still Confused?

If you see a term not listed here or need more explanation:
1. Check the [FAQ](FAQ.md) - your question might be answered there
2. Search online - sites like Wikipedia often have great simple explanations
3. Don't be afraid to ask! Everyone was a beginner once

---

**Remember:** You don't need to understand every technical term to use DeepGuard. These are here to help when you're curious or see something confusing!
