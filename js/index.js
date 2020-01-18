function hover(){
	var gwc = document.getElementsByClassName("gwc");
	gwc[0].className = "hover";
	}

function normal(){
	var hover = document.getElementsByClassName("hover");
	hover[0].className = "gwc";
}


$(document).ready(function() {

var navBar = document.getElementById("nav");
var tabs = navBar.getElementsByClassName("tab");

for(var i=0; i<tabs.length; i++){
	tabs[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

});