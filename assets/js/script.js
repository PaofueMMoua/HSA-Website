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
  if (x.style.display = 'flex') {
    x.display = "none";
  } else {
    x.display = "flex";
  } 
}

let dropContent = document.getElementById('dropContent')
function show() {
  dropContent.classList.toggle("show")
}

// let famline = document.getElementById
function famDrop() {
  let famline = document.getElementById('familything')
  let temp = famline.classList
  temp.toggle('show')
}


// let meeting_Social = document.getElementById('weeklyMeetingAndMonthlySocialButton');

// metting_social.addEventListener('click', () => {
//   let x = document.getElementById('Meeting&SocialText');
//   if (x.display = )
// })