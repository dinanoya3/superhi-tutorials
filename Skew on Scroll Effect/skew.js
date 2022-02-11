const section = document.querySelector("section");

let currentPixel = window.scrollY;
// console.log(currentPixel);

const looper = () => {
  const newPixel = window.scrollY;
  const difference = newPixel - currentPixel;
  //   console.log(difference);

  const speed = difference * 0.5;

  section.style.transform = `skewY(${speed}deg)`;

  //   every time function loops, change current pixel
  currentPixel = newPixel;

  requestAnimationFrame(looper);
};
looper();
