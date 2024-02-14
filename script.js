"use strict"

var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}

var modal1 = document.getElementById('mother1');
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
  }
var modal2 = document.getElementById('mother2');
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
  }
var modal3 = document.getElementById('mother3');
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
  }

var modal4 = document.getElementById('gallary4');
  window.onclick = function(event) {
      if (event.target == modal4) {
          modal4.style.display = "none";
      }
    }

var modal5 = document.getElementById('gallary5');
    window.onclick = function(event) {
        if (event.target == modal5) {
            modal5.style.display = "none";
        }
      }

var modal6 = document.getElementById('gallary6');
  window.onclick = function(event) {
      if (event.target == modal7) {
          modal7.style.display = "none";
      }
    }
var modal7 = document.getElementById('gallary7');
  window.onclick = function(event) {
      if (event.target == modal7) {
          modal7.style.display = "none";
      }
    }
    
var modal8 = document.getElementById('gallary8');
    window.onclick = function(event) {
        if (event.target == modal8) {
            modal8.style.display = "none";
        }
      }
  
var modal9 = document.getElementById('gallary9');
      window.onclick = function(event) {
          if (event.target == modal9) {
              modal9.style.display = "none";
          }
        }
  
var modal10 = document.getElementById('gallary10');
    window.onclick = function(event) {
        if (event.target == modal10) {
            modal10.style.display = "none";
        }
      }
var modal11 = document.getElementById('gallary11');
    window.onclick = function(event) {
        if (event.target == modal11) {
            modal11.style.display = "none";
        }
      }
      