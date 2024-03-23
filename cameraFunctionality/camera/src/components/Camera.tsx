import { useRef } from "react";
import { cameraFunc } from "../utils/camera";

export const Camera = () => {
  const videoRef = useRef<React.RefObject<HTMLDivElement | null>>(null);
  const canvasRef = useRef(null);

  return (
    <>
      <div className="card">
        <button onClick={() => cameraFunc(videoRef)}>enable Webcam</button>
        {/* <button onClick={}>capture</button> */}
      </div>
      <video
        // id="webcam"
        ref={videoRef}
        width="640"
        height="480"
        autoPlay
      ></video>
    </>
  );
};
