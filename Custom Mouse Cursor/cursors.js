const cursorTag = document.querySelector(".cursors");
const balls = cursorTag.querySelectorAll("div");
const ballText = cursorTag.querySelector(".hover-text");
const images = document.querySelectorAll("img[data-hover");

let aimX = 0;
let aimY = 0;

balls.forEach((ball, index) => {
  // current positions and end positions
  let currentX = 0;
  let currentY = 0;
  // let aimX = 0;
  // let aimY = 0;

  // the different index values give the individual balls different speeds
  let speed = 0.3 - index * 0.015;
  //   console.log(speed);

  const animate = () => {
    // get the difference of end positions and current positions, add the difference to current position
    currentX += (aimX - currentX) * speed;
    currentY += (aimY - currentY) * speed;

    ball.style.left = `${currentX}px`;
    ball.style.top = `${currentY}px`;

    //   run every single frame
    requestAnimationFrame(animate);
  };
  animate();
});

// // current positions and end positions
// let currentX = 0;
// let currentY = 0;
// // let aimX = 0;
// // let aimY = 0;

// let speed = 0.3;

// const animate = () => {
//   // get the difference of end positions and current positions, add the difference to current position
//   currentX += (aimX - currentX) * speed;
//   currentY += (aimY - currentY) * speed;

//   ball.style.left = `${currentX}px`;
//   ball.style.top = `${currentY}px`;

//   //   run every single frame
//   requestAnimationFrame(animate);
// };
// animate();

document.addEventListener("mousemove", (e) => {
  //   ball.style.left = `${e.pageX}px`;
  //   ball.style.top = `${e.pageY}px`;
  aimX = e.pageX;
  aimY = e.pageY;
});

// fade in/out ball text
images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    ballText.classList.add("visible");
    ballText.innerHTML = image.getAttribute("data-hover");
  });
  image.addEventListener("mouseout", () => {
    // ballText.innerHTML = "";
    ballText.classList.remove("visible");
  });
});
