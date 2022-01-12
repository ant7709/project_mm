const images = ["01.jpg","02.jpeg","03.jpg","04.jpg","05.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bg_image");

document.body.appendChild(bgImage);