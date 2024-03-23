import { useRef } from "react";
import { cameraFunc, takePhoto } from "../utils/camera";

export const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  return (
    <>
      <div className="card">
        <button onClick={() => cameraFunc(videoRef)}>enable Webcam</button>
        <button onClick={() => takePhoto(videoRef, canvasRef)}>capture</button>
      </div>
      <video
        // id="webcam"
        ref={videoRef}
        width="640"
        height="480"
        autoPlay
      ></video>
      <canvas ref={canvasRef} width="640" height="480"></canvas>
    </>
  );
};
