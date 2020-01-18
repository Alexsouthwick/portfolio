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

});