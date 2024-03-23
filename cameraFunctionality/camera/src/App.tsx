import { useState } from "react";
import { cameraFunc } from "./utils/camera";
// import { camera } from "./utils/altCam";
import { Camera } from "./components/Camera.tsx";
import "./App.css";

function App() {
  const webcam = document.getElementById("webcam");
  return (
    <>
      <h1>Camera Test</h1>
      <Camera />
    </>
  );
}

export default App;
