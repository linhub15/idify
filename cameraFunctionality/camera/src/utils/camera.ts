export const cameraFunc = () => {
  const webcam = document.getElementById("webcam");

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (!webcam) return;
        webcam && webcam.srcObject = stream
           })
      .catch((err) => {
        console.log(err);
      });
  }
};
