# Backend API Documentation

The DeepGuard backend is built with **Flask** and exposes a RESTful API for image analysis and history management.

## Base URL
`http://localhost:5001`

## Endpoints

### 1. Health Check
Check if the server is running and the model is loaded.
- **URL**: `/api/health`
- **Method**: `GET`
- **Response**:
  ```json
  {
      "status": "healthy",
      "model_loaded": true,
      "device": "cuda"
  }
  ```

### 2. Predict Image
Upload an image for deepfake detection.
- **URL**: `/api/predict`
- **Method**: `POST`
- **Body**: `multipart/form-data`
    - `file`: The image file (png, jpg, jpeg, webp)
- **Response**:
  ```json
  {
      "prediction": "FAKE",
      "confidence": 0.985,
      "fake_probability": 0.985,
      "real_probability": 0.015,
      "heatmap": "base64_encoded_string..."
  }
  ```

### 3. Get History
Retrieve a list of past scans.
- **URL**: `/api/history`
- **Method**: `GET`
- **Response**:
  ```json
  [
      {
          "id": 1,
          "filename": "test.jpg",
          "prediction": "FAKE",
          "confidence": 0.99,
          "timestamp": "2023-10-27 10:00:00"
      }
  ]
  ```

### 4. Delete Scan
Delete a specific entry from history.
- **URL**: `/api/history/<scan_id>`
- **Method**: `DELETE`

### 5. Clear History
Delete all history entries.
- **URL**: `/api/history`
- **Method**: `DELETE`

### 6. Model Info
Get technical details about the loaded model.
- **URL**: `/api/model-info`
- **Method**: `GET`
