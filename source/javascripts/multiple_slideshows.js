// Multiple Slideshows

/* Class the members of each slideshow group with different CSS classes */
var slideIndex = [1,1];
var slideId = ["Slides", "slide-s-screen"]
// var indicators = ["dot", "bullet"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {
    slideIndex[no] = 1
    }
  if (n < 1) {
    slideIndex[no] = x.length
    }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
  x[slideIndex[no]-1].style.display = "flex";
  dots[slideIndex[no]-1].className += " active";
}

setInterval(function(){
    plusSlides(1, 0);
}, 4000);

setInterval(function(){
    plusSlides(1, 1);
}, 4000);
