var box = document.querySelector('.boxxx');
var boxxY = box.offsetTop;

var about = document.querySelector('.rong');
var rongY = about.offsetTop;

var R1 = document.querySelector('.r1');
var r1Y = R1.offsetTop;

var R2 = document.querySelector('.r2');
var r2Y = R2.offsetTop;

var icon = document.querySelector('.ico');
var icoY = icon.offsetTop;

var work = document.querySelector('.works');
var worksY = work.offsetTop;

var card = document.querySelector('.new');
var newY = card.offsetTop;

var ms1 = document.querySelector('.mess1');
var mess1Y = ms1.offsetTop;

var ms2 = document.querySelector('.mess2');
var mess2Y = ms2.offsetTop;

var ms3 = document.querySelector('.mess3');
var mess3Y = ms3.offsetTop;

var i = document.querySelector('.icon');
var iconY = i.offsetTop;

var l = document.querySelector('.last');
var lastY = l.offsetTop;

document.body.onscroll = function(){
	if(window.pageYOffset > boxxY - window.innerHeight + box.clientHeight){
		box.className = 'boxxx active';
	}
	if(window.pageYOffset > rongY - window.innerHeight + about.clientHeight){
		about.className = 'rong active';
	}
	if(window.pageYOffset > r1Y - window.innerHeight + R1.clientHeight){
		R1.className = 'r1 active';
	}
	if(window.pageYOffset > r2Y - window.innerHeight + R2.clientHeight){
		R2.className = 'r2 active';
	}
	if(window.pageYOffset > icoY - window.innerHeight + icon.clientHeight){
		icon.className = 'ico active';
	}
	if(window.pageYOffset > worksY - window.innerHeight + work.clientHeight){
		work.className = 'works active';
	}
	if(window.pageYOffset > newY - window.innerHeight + card.clientHeight){
		card.className = 'new active';
	}
	if(window.pageYOffset > mess1Y - window.innerHeight + ms1.clientHeight){
		ms1.className = 'mess1 active';
	}
	if(window.pageYOffset > mess2Y - window.innerHeight + ms2.clientHeight){
		ms2.className = 'mess2 active';
	}
	if(window.pageYOffset > mess3Y - window.innerHeight + ms3.clientHeight){
		ms3.className = 'mess3 active';
	}
	if(window.pageYOffset > iconY - window.innerHeight + i.clientHeight){
		i.className = 'icon active';
	}
	if(window.pageYOffset > lastY - window.innerHeight + l.clientHeight){
		l.className = 'last active';	
	}
}
