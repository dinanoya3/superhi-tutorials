$(document).on("scroll", function () {
  // how far from top
  let pixels = $(document).scrollTop();
  //   console.log(pixels);
  $("div.box-1").css("top", pixels * -0.5);
  $("div.box-2").css("top", pixels * -0.3);
  $("div.box-4").css("top", pixels * 0.3);
  $("div.box-5").css("top", pixels * 0.5);
});
// document.querySelector(".body").addEventListener("scroll", function () {
//   // how far from top
//   let pixels = document.querySelector(".body").scrollTop;
//   console.log(pixels);

//   let box1 = document.querySelector(".box");

//   box1.style.height = 200;
//   console.log(top);
//   //   document.querySelector(".box-1").style.top = pixels;
// });

// document.querySelector(''("scroll", function () {
//   let pixels = document.scrollTop();

//   $("div.box-1").css("top", pixels * -0.5);
//   $("div.box-2").css("top", pixels * -0.3);
//   $("div.box-4").css("top", pixels * 0.3);
//   $("div.box-5").css("top", pixels * 0.5);
// });
