let index = 0;

const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".dot");

function showSlide(i){

  if(i > 2){
    index = 0;
  }
  else if(i < 0){
    index = 2;
  }
  else{
    index = i;
  }

  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function nextSlide(){
  showSlide(index + 1);
}

function prevSlide(){
  showSlide(index - 1);
}

function currentSlide(i){
  showSlide(i);
}

/* auto slide */
setInterval(() => {
  nextSlide();
}, 4000);



$(document).ready(function(){
  $('.your-class').slick({
    setting-name: setting-value
  });
});