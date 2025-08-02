const images = ['3a.jpg', '3b.jpg'];
let currentIndex = 0;
const sliderImg = document.getElementById('slider-img');

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  sliderImg.src = images[currentIndex];
}, 3000);
