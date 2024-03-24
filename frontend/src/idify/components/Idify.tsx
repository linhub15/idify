import { useRef, useState } from "react";
import { enableCamera, takePhoto, getBlob } from "../utils/camera";

export const Idify = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [isScreenshot, setIsScreenshot] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <dialog
        className={
          dialogOpen
            ? "flex flex-col justify-center items-center absolute mx-auto"
            : "hidden"
        }
        open={dialogOpen}
      >
        {/* screenshot not yet taken show capture button */}

        {isScreenshot === false && dialogOpen && (
          <video
            className="w-[640px] h-[480px]"
            ref={videoRef}
            autoPlay
          ></video>
        )}
        {isSubmitting ? (
          <div className=" flex w-[640px] h-[480px] items-center justify-center">
            <p>Submission Loading - add Spinner</p>
          </div>
        ) : (
          <canvas
            className={isScreenshot ? "w-[640px] h-[480px]" : "hidden"}
            ref={canvasRef}
          ></canvas>
        )}

        <div className="flex flex-row space-between">
          {!isScreenshot && (
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-4"
              onClick={(e) => {
                e.preventDefault();
                setIsScreenshot(true);
                takePhoto(videoRef, canvasRef);
              }}
            >
              capture
            </button>
          )}
          {/* screenshot true enable submit button */}
          {isScreenshot && (
            <button
              className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-4"
              onClick={(e) => {
                e.preventDefault();
                setIsSubmitting(true);
                getBlob(canvasRef).then((blob) => {
                  // console.log(blob);
                  const form = new FormData();
                  form.append("file", blob);

                  fetch(
                    "https://idify-63022b8d6788.herokuapp.com/upload-image/",
                    {
                      method: "POST",
                      // headers: {
                      //   accept: "application/json",
                      //   // "Content-Type": "multipart/form-data",
                      //   // "Access-Control-Allow-Headers": "Content-Type",
                      //   // "Access-Control-Allow-Origin": "*",
                      //   // "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                      // },
                      body: form,
                    }
                  )
                    .then((response) => response.json)
                    .then((data) => console.log("data", data))
                    .catch((err) => {
                      setIsSubmitting(false);
                      setError(true);
                      setIsScreenshot(false);
                      setDialogOpen(false);
                    });
                });
                // imageToServer();
              }}
            >
              submit
            </button>
          )}
        </div>
      </dialog>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        onClick={(e) => {
          e.preventDefault();
          enableCamera(videoRef);
          // setIsCameraOn(true);

          setDialogOpen(true);
        }}
      >
        IDify
      </button>
      {error && (
        <p className="text-red-500">There was an error uploading your image</p>
      )}
    </div>
  );
};
