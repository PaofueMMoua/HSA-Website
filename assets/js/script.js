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

function openOfficer(name, role, img, bio){

    const modal = document.getElementById("officerModal")

    document.getElementById("modalName").textContent = name
    document.getElementById("modalRole").textContent = role
    document.getElementById("modalImg").src = img
    document.getElementById("modalBio").textContent = bio

    modal.classList.add("active")
}

function closeOfficer(){
    document.getElementById("officerModal").classList.remove("active")
}

function toggleMenu(){
const menu = document.getElementById("navMenu")
menu.classList.toggle("active")
}
