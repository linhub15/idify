export const cameraFunc = (webcam) => {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (!webcam) return;
        webcam ? (webcam.current.srcObject = stream) : null;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
