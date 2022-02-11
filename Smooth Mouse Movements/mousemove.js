const ball = document.querySelector(".ball");
let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.09;

// update ball's position
const animate = () => {
  //   ball.style.left = mouseX + "px";
  //   ball.style.top = `${mouseY}px`;
  let distanceX = mouseX - ballX;
  let distanceY = mouseY - ballY;

  //   console.log(distanceX);

  //   ballX = mouseX;
  //   ballY = mouseY;

  // update ball's position where it currently is and add the distance (between ball and mouse)
  ballX += distanceX * speed;
  ballY += distanceY * speed;

  ball.style.left = ballX + "px";
  ball.style.top = `${ballY}px`;

  //   run function in every single frame
  requestAnimationFrame(animate);
};

animate();

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});
