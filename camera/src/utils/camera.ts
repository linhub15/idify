export const enableCamera = (video) => {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (!video) return;
        video ? (video.current.srcObject = stream) : null;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const takePhoto = (video, canvas) => {
  video = video.current;
  canvas = canvas.current;
  if (video && canvas) {
    const context = canvas.getContext("2d");
    canvas.style.display = "block";
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageURL = canvas.toDataURL("image/png");
    const blob = canvas.toBlob((blob: Blob) => {
      console.log(blob);
    });
  }
};
