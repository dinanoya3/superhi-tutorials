document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  //   console.log(x);
  const y = e.pageY;

  const target = document.querySelector(".card");

  const targetCoords = target.getBoundingClientRect();
  console.log(targetCoords);
  //   console.log(target.offsetWidth);

  //   middle points
  const targetX = targetCoords.left + target.offsetWidth / 2;
  const targetY = targetCoords.top + target.offsetHeight / 2;
  //   console.log(targetX);
  //   console.log(targetY);

  //   PULL EFFECT
  //   const angleX = (targetX - x) / 40;
  //   //   console.log(angleX);
  //   const angleY = -(targetY - y) / 40;

  // PUSH EFFECT
  const angleX = (targetY - y) / 40;
  //   console.log(angleX);
  const angleY = -(targetX - x) / 40;

  //   apply to CSS
  target.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});
