import React, { useRef, useEffect, useState } from "react";

function FaceDetection() {
  const canvasRef = useRef(null);
  const [faces, setFaces] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // MJPEG desde Flask
    const img = new Image();
    img.src = "http://localhost:5000/video_feed";
    img.crossOrigin = "anonymous";

    // Obtener coordenadas de rostros cada 100ms
    const interval = setInterval(async () => {
      try {
        const res = await fetch("http://localhost:5000/faces");
        const data = await res.json();
        setFaces(data);
      } catch (err) {
        console.error(err);
      }
    }, 100);

    const draw = () => {
      if (!img.width) {
        requestAnimationFrame(draw);
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Dibujar rectángulos y emoji encima del rostro
      faces.forEach((face) => {
        ctx.strokeStyle = "lime";
        ctx.lineWidth = 3;
        ctx.strokeRect(face.x, face.y, face.w, face.h);

        // Emoji encima
        ctx.font = `${face.w / 2}px Arial`; // tamaño proporcional al rostro
        ctx.fillText("🦖", face.x + face.w / 4, face.y - face.h / 4);
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => clearInterval(interval);
  }, [faces]);

  return (
    <div style={{ textAlign: "center", backgroundColor: "#111", height: "100vh", paddingTop: "20px" }}>
      <h2 style={{ color: "#0f0" }}>Emoji sobre Rostros</h2>
      <canvas
        ref={canvasRef}
        style={{ border: "3px solid #0f0", borderRadius: "10px", maxWidth: "90%" }}
      />
    </div>
  );
}

export default FaceDetection;
