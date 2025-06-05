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
  let x = document.getElementsByClassName("drop_content");
  if (x.display = "block") {
    x.display = "none";
  } else {
    x.display = "block";
  } 
}

let menu_btn = document.getElementById("menu-btn");

menu_btn.addEventListener('click', () => {
  let x = document.getElementsByClassName("drop_content");
  if (x.display = "block") {
    x.display = "none";
  } else {
    x.display = "block";
  } 
})

let meeting_Social = document.getElementById('weeklyMeetingAndMonthlySocialButton');

metting_social.addEventListener('click', () => {
  let x = document.getElementById('Meeting&SocialText');
  if (x.display = )
})