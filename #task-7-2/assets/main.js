//First Task

let change_color = document.getElementsByClassName("change_color");
let image = document.getElementById("image");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
let image5 = document.getElementById("image5");

image1.onmouseover = function () {
  image.src = "./assets/images/anthony-choren-XkEvCISUHPM-unsplash.jpg";
};
image2.onmouseover = function () {
  image.src = "./assets/images/thai-nguyen-RAPkk0dGVDM-unsplash.jpg";
};
image3.onmouseover = function () {
  image.src = "./assets/images/٢٠٢٤٠٥١٣_١٧٢٥٢٥.jpg";
};
image4.onmouseover = function () {
  image.src = "./assets/images/٢٠٢٤٠٥١٣_١٧٣٠١٣.jpg";
};
image5.onmouseover = function () {
  image.src = "./assets/images/amjith-s-vRRYyCd2TDE-unsplash.jpg";
};

image1.onclick = function () {
  change_color[0].style.backgroundColor = "#acb8b8";
  change_color[1].style.backgroundColor = "#acb8b8";
};
image2.onclick = function () {
  change_color[0].style.backgroundColor = "#39678b";
  change_color[1].style.backgroundColor = "#39678b";
};
image3.onclick = function () {
  change_color[0].style.backgroundColor = "#adaded";
  change_color[1].style.backgroundColor = "#adaded";
};
image4.onclick = function () {
  change_color[0].style.backgroundColor = "#9d2e1b";
  change_color[1].style.backgroundColor = "#9d2e1b";
};
image5.onclick = function () {
  change_color[0].style.backgroundColor = "#59655b";
  change_color[1].style.backgroundColor = "#59655b";
};

// Second Task

let dark = document.getElementById("dark");
let light = document.getElementById("light");
let body = document.getElementById("body");

dark.onclick = function () {
  dark.classList.add("none");
  light.classList.remove("none");
  body.classList.add("dark");
};
light.onclick = function () {
  dark.classList.remove("none");
  light.classList.add("none");
  body.classList.remove("dark");
};

// Third Task

let chevron_down1 = document.getElementById("chevron_down1");
let chevron_down2 = document.getElementById("chevron_down2");
let chevron_down3 = document.getElementById("chevron_down3");
let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");

chevron_down1.onclick = function () {
  content1.classList.toggle("none");
};
chevron_down2.onclick = function () {
  content2.classList.toggle("none");
};
chevron_down3.onclick = function () {
  content3.classList.toggle("none");
};

// Fourth Task

let star1 = document.getElementById("star1");
let star2 = document.getElementById("star2");
let star3 = document.getElementById("star3");
let star4 = document.getElementById("star4");
let star5 = document.getElementById("star5");

star1.onclick = function () {
  star1.style.color = "yellow";
  star2.style.color = "white";
  star3.style.color = "white";
  star4.style.color = "white";
  star5.style.color = "white";
  rating_content.innerText = "Bad";
};
star2.onclick = function () {
  star1.style.color = "yellow";
  star2.style.color = "yellow";
  star3.style.color = "white";
  star4.style.color = "white";
  star5.style.color = "white";
  rating_content.innerText = "Not Bad";
};
star3.onclick = function () {
  star1.style.color = "yellow";
  star2.style.color = "yellow";
  star3.style.color = "yellow";
  star4.style.color = "white";
  star5.style.color = "white";
  rating_content.innerText = "Good";
};
star4.onclick = function () {
  star1.style.color = "yellow";
  star2.style.color = "yellow";
  star3.style.color = "yellow";
  star4.style.color = "yellow";
  star5.style.color = "white";
  rating_content.innerText = "Very Good";
};
star5.onclick = function () {
  star1.style.color = "yellow";
  star2.style.color = "yellow";
  star3.style.color = "yellow";
  star4.style.color = "yellow";
  star5.style.color = "yellow";
  rating_content.innerText = "Excellent";
};
