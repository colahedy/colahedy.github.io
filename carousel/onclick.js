var front = document.getElementById("front");
var later = document.getElementById("later");

var slider = document.getElementsByClassName("slider");
var imgs = slider[0].getElementsByTagName("img");

var i = 0;

later.onclick = function () {
	i++;
	if (i > imgs.length-1) {
		i = 0;
	}
	console.log(i);
	for (var j = 0; j < imgs.length; j++) {
		imgs[j].style.opacity = "0";
	}
	
	imgs[i].style.opacity = "1";
}

front.onclick = function () {
	i--;
	if (i < 0 ) {
		i = imgs.length-1;
	}
	
	for (var j = 0; j < imgs.length; j++) {
		imgs[j].style.opacity = "0";
	}
	
	imgs[i].style.opacity = "1";
}
