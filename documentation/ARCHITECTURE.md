# DeepGuard System Architecture

## Overview
DeepGuard is a comprehensive Deepfake Detection System designed to identify AI-generated media with high precision. It employs a **Multi-Branch Deep Learning Model** to analyze images across various domains (Spatial, Frequency, Local, Global) and provides a user-friendly Web Interface for easy access.

## High-Level Diagram
```mermaid
graph TD
    User[User] -->|Upload Image| Frontend[Web Interface (HTML/JS)]
    Frontend -->|POST /api/predict| Backend[Flask API]
    Backend -->|Preprocess| Pre[Preprocessing (Albumentations)]
    Pre -->|Tensor| Model[DeepGuard Model (PyTorch)]
    
    subgraph "DeepGuard Model"
        RGB[RGB Branch (EfficientNetV2)]
        Freq[Frequency Branch (FFT + CNN)]
        Patch[Patch Branch (Local Inconsistencies)]
        ViT[ViT Branch (Swin Transformer)]
        
        RGB & Freq & Patch & ViT --> Fusion[Feature Fusion]
        Fusion --> Classifier[classifier Head]
    end
    
    Classifier -->|Logits| Sigmoid[Sigmoid Activation]
    Sigmoid -->|Probability| Result[Prediction Result]
    Result -->|JSON| Frontend
```

## Components

### 1. Frontend (User Interface)
- **Tech Stack**: HTML5, CSS3, Vanilla JavaScript.
- **Key Features**:
    - **Drag & Drop Upload**: Intuitive zone for image submission.
    - **Real-Time Analysis**: Visual feedback during processing.
    - **Heatmap Visualization**: Displays the Grad-CAM heatmap overlaid on the image to show suspicious regions.
    - **History**: Stores and lists past scans.

### 2. Backend (API Layer)
- **Tech Stack**: Python, Flask, SQLite (for history).
- **Responsibilities**:
    - **API Endpoints**: Handles image uploads, serves history, and manages model inference.
    - **Preprocessing**: Resizes and normalizes images using `albumentations` to match model requirements.
    - **Inference**: Loads the PyTorch model and executes the forward pass.
    - **Explanation**: Generates Grad-CAM heatmaps to explain model decisions.

### 3. Deep Learning Core
- **Tech Stack**: PyTorch, Torchvision, Safetensors.
- **Architecture**: A hybrid 4-branch network:
    - **Spatial (RGB)**: EfficientNetV2-S for standard visual artifact detection.
    - **Frequency**: FFT-based analysis to detect GAN grid artifacts.
    - **Patch**: Local patch analysis for inconsistencies.
    - **Global (ViT)**: Swin Transformer for semantic logic validation.

## Data Flow
1.  **Input**: User selects an image file.
2.  **Transmission**: Image is sent via HTTP POST to `/api/predict`.
3.  **Processing**: Backend validates the file, preprocesses it (resize 256x256), and converts it to a tensor.
4.  **Analysis**: The model runs inference and generates a "Fake Probability" score (0.0 to 1.0).
5.  **Visualization**: The backend works backwards through the RGB branch to generate a Grad-CAM heatmap.
6.  **Response**: The API returns the Label (REAL/FAKE), Confidence Score, and Heatmap (Base64).
7.  **Display**: Frontend renders the result and creates a particle effect based on the outcome.
