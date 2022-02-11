const slideshow = document.querySelector(".slideshow");

// returns an array of images
const images = document.querySelectorAll("img");

slideshow.addEventListener("mousemove", function (e) {
  //   console.log(e);
  //   console.log(this);

  const x = e.offsetX;
  const width = this.offsetWidth;

  //   percentage across the element
  const percentage = x / width;
  //   console.log(percentage);

  //   % * 6 (# of images); 0-1 * 6
  const imageNumber = Math.floor(percentage * images.length);

  images.forEach((image) => {
    image.style.zIndex = 0;
  });
  images[imageNumber].style.zIndex = 1;
});
