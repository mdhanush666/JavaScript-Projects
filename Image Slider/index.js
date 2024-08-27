
const slides = document.querySelectorAll(".slider img");

let slideIndex = 0;
let intervalId = null;

function initializeSlide(){
  slides[slideIndex].classList.add("displayImg");
}

function preClick(){
  if(slideIndex > 0){

    slides[slideIndex].classList.remove("displayImg");
    slideIndex--;
    slides[slideIndex].classList.add("displayImg");
    initializeSlide();

  }
  else{
    slides[slideIndex].classList.remove("displayImg");
    slideIndex = slides.length-1;
    slides[slideIndex].classList.add("displayImg");
    initializeSlide();
  }
}

function nextClick(){
  if(slideIndex < slides.length-1){

    slides[slideIndex].classList.remove("displayImg");
    slideIndex++;
    slides[slideIndex].classList.add("displayImg");
    initializeSlide();

  }
  else{
    slides[slideIndex].classList.remove("displayImg");
    slideIndex = 0;
    slides[slideIndex].classList.add("displayImg");
    initializeSlide();
  }
}

initializeSlide();
setInterval(nextClick,5000);