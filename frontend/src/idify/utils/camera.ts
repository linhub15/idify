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

    // const imageURL = canvas.toDataURL("image/png");
    // const blob = await canvas.toBlob((blob: Blob) => {
    //   return blob;
    // });
    // const blob = await new Promise((resolve) => canvas.toBlob(resolve));

    // return blob;
    return;
  }
};

export const submitImage = (canvas) => {
  canvas = canvas.current;

  canvas.toBlob((blob: Blob) => {
    console.log(blob);
    const form = new FormData();
    form.append("file", blob);
    try {
      fetch("https://idify-63022b8d6788.herokuapp.com/upload-image/", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: form,
      });
    } catch (error) {
      console.log(error);
    }
  });
};
