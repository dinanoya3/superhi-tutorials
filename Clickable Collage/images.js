const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

let i = 0;

const placeImage = (x, y) => {
  const nextImage = images[i];

  const img = document.createElement("img");

  img.setAttribute("src", nextImage);
  img.style.left = x + "px";
  img.style.top = `${y}px`;
  img.style.transform = `translate(-50%, -50%) scale(0.5) rotate(${
    Math.random() * 20 - 10
  }deg)`;

  document.body.appendChild(img);

  i += 1;

  if (i >= images.length) {
    i = 0;
  }
};

document.addEventListener("click", (e) => {
  e.preventDefault();

  //   placeImage(500, 400);
  placeImage(e.pageX, e.pageY);
});

// let mouse = 0;
// document.addEventListener("mousemove", (e) => {
//   e.preventDefault();
//   mouse += 1;
//   if (mouse % 20 == 0) {
//     placeImage(e.pageX, e.pageY);
//   }
//   //   if (Math.random() > 0.8) {
//   //     placeImage(e.pageX, e.pageY);
//   //   }

//   //   placeImage(500, 400);
//   //   placeImage(e.pageX, e.pageY);
// });

document.addEventListener("touchend", (e) => {
  e.preventDefault();

  placeImage(e.pageX, e.pageY);
});
