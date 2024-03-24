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

export const takePhoto = async (video, canvas) => {
  video = video.current;
  canvas = canvas.current;
  if (video && canvas) {
    const context = canvas.getContext("2d");
    canvas.style.display = "block";
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    return;
  }
};

export const getBlob = async (canvas) => {
  if (!canvas) return;
  canvas = canvas.current;
  const blob = await new Promise((resolve) =>
    canvas.toBlob(resolve, "image/jpeg")
  );
  return blob;
};
