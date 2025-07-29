let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slide");

  if ( n > slides.length) {
    slideIndex = 1
}
  if ( n < 1) {
    slideIndex = slides.length
}
  for ( i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function menu() {
  let x = document.getElementById("dropContent");
  x.classList.toggle("showFlex")
}

function show() {
  let dropContent = document.getElementById('dropContent')
  dropContent.classList.toggle("show")
}

function famDrop() {
  let famline = document.getElementById('familything')
  let temp = famline.classList
  temp.toggle('show')
}