import { createWorker } from 'tesseract.js';

(async () => {
  const worker = await createWorker('eng');
  const rectangle = [{
    top: 44,
    left: 180,
    width: 150,
    height: 100,
  },
  {
    top: 185,
    left: 176,
    width: 175,
    height: 75,
  },{
    top: 222,
    left: 176,
    width: 42,
    height: 14,
  }
];
  worker.setParameters({
    tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 -',
  });
  for(let i = 0; i < rectangle.length; i++) {
    const ret = await worker.recognize('img/high_contrast.jpeg', {
      rectangle: rectangle[i]
    }); 
    console.log(ret.data.text);
  }
//   console.log(ret.data.text);
  await worker.terminate();
})();