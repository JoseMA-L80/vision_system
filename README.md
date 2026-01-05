# 👾 Sistema de Visión Artificial en Tiempo Real

Sistema de visión artificial desarrollado en **Python (Flask + OpenCV)** y **React**, capaz de detectar rostros en tiempo real usando la webcam y mostrar el resultado en una interfaz web.

---

## 🚀 Características

- 📸 Captura de video en tiempo real desde la webcam
- 🧠 Detección de rostros con OpenCV (Haar Cascade)
- 😀 Emoji dinámico sobre cada rostro detectado
- 🌐 Backend con Flask (streaming MJPEG)
- ⚛️ Frontend en React
- 🔗 Comunicación frontend-backend vía HTTP
- 🖥️ Visualización en tiempo real desde el navegador

---

## 🧰 Tecnologías utilizadas

### Backend
- Python 3
- Flask
- Flask-CORS
- OpenCV

### Frontend
- React
- JavaScript (ES6)
- HTML5 / CSS3

---

## 📁 Estructura del proyecto

```text
VISION_SYSTEM/
│
├── backend/
│   ├── face_detection_server.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   └── components/
│   │       └── FaceDetection.jsx
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md

```
---

## ⚙️ Instalación y ejecución

### 🔹 1. Backend (Flask)

Desde la carpeta raíz del proyecto:

```bash
En una terminal:
  cd backend
  python face_detection_server.py

El servidor se ejecutara en: 
  http://localhost:5000/video_feed

En otra terminal:
  cd frontend
  npm install
  npm start

La aplicación estará disponible en:
http://localhost:3000
```
## 🖼️ Funcionamiento

El backend captura el video de la webcam

OpenCV detecta los rostros en tiempo real

Se dibujan efectos (emoji) sobre cada rostro

El video procesado se envía al frontend

React muestra el stream en el navegador.


## 📌 Notas importantes

Asegúrate de que la webcam no esté siendo usada por otra aplicación.

Si no se detecta la cámara, prueba cambiar el índice:

cv2.VideoCapture(0)

## Ejemplo:
<img width="798" height="573" alt="exam1" src="https://github.com/user-attachments/assets/30676bcd-0da9-4b37-a714-d91c5d3608c9" />

