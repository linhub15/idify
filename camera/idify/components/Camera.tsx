import { useRef, useState } from "react";
import { enableCamera, takePhoto } from "../utils/camera";

export const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isScreenshot, setIsScreenshot] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <dialog open={dialogOpen}>
        {isScreenshot === false && (
          <video
            // id="webcam"
            ref={videoRef}
            width="640"
            height="480"
            autoPlay
          ></video>
        )}
        <canvas ref={canvasRef} width="640" height="480"></canvas>

        {isCameraOn ? (
          <button
            onClick={() => {
              const blob = takePhoto(videoRef, canvasRef);
              setIsScreenshot(true);
              console.log(blob);
            }}
          >
            capture
          </button>
        ) : null}
      </dialog>

      <div className="card">
        <button
          onClick={() => {
            enableCamera(videoRef);
            setIsCameraOn(true);
            setDialogOpen(true);
          }}
        >
          IDify
        </button>

        {/* {isCameraOn ? (
          <button
            onClick={() => {
              takePhoto(videoRef, canvasRef);
              setIsScreenshot(true);
            }}
          >
            capture
          </button>
        ) : null} */}
      </div>
      {/* {isScreenshot === false && (
        <video
          // id="webcam"
          ref={videoRef}
          width="640"
          height="480"
          autoPlay
        >
          Loadimg Camera...
        </video>
      )} */}
      {/* <canvas ref={canvasRef} width="640" height="480"></canvas> */}
    </>
  );
};
