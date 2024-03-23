import { useState } from "react";
import { cameraFunc } from "./utils/camera";
import "./App.css";

function App() {
  const webcam = document.getElementById("webcam");

  const takePhoto = (webcam) => {
    webcam && webcam.snap();
  };
  return (
    <>
      <h1>Camera Test</h1>
      <img></img>
      <div className="card">
        <button onClick={cameraFunc}>enable Webcam</button>
        <button onClick={() => takePhoto(webcam)}>capture</button>
      </div>
      <video id="webcam" width="640" height="480" autoPlay></video>
    </>
  );
}

export default App;
