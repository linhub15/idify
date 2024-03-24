import { useRef, useState } from "react";
import { enableCamera, takePhoto } from "../utils/camera";

export const Idify = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isScreenshot, setIsScreenshot] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const getImageBlob = async () => {
    return await takePhoto(videoRef, canvasRef);
  };

  return (
    <div>
      <dialog
        className={dialogOpen ? "flex flex-col" : "hidden"}
        open={dialogOpen}
      >
        {isScreenshot === false && (
          <video
            // id="webcam"
            ref={videoRef}
            width="640"
            height="480"
            autoPlay
          ></video>
        )}
        <canvas
          className={isScreenshot ? "w-[640px] h-[480px]" : "hidden"}
          ref={canvasRef}
          // width="640"
          // height="480"
        ></canvas>
        {isCameraOn ? (
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-4"
            onClick={() => {
              setIsScreenshot(true);
              // const imageBlob = getImageBlob();
              const imageBlob = takePhoto(videoRef, canvasRef);

              console.log("imageblob?", imageBlob);
            }}
          >
            capture
          </button>
        ) : null}
      </dialog>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={(e) => {
          e.preventDefault();
          enableCamera(videoRef);
          setIsCameraOn(true);
          setDialogOpen(true);
        }}
      >
        IDify
      </button>
    </div>
  );
};
