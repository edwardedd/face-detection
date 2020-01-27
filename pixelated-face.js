const faceDetector = new window.FaceDetector();
const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = canvas.getContext('2d');


async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {width: 1280, height: 720},
  });
  video.srcObject = stream;
  await video.play();
  canvas.height = video.videoHeight;
  canvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
  faceCanvas.height = video.videoWidth;
};


async function detect(){
  const faces = await faceDetector.detect(video);
  // console.log(faces.length);
  requestAnimationFrame(detect)
  

};

populateVideo().then(detect)
