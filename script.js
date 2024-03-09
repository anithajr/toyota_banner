// JavaScript Document
var starttime = 0;

function addEventListeners() {
	document.getElementById("bgExit").addEventListener("click", clickthrough);
}

function clickthrough() {
/*Background ClickTag*/
  window.open(clickTag); 
}

function startAd (){
	car_bg = document.getElementById("car_bg");
	copy1 = document.getElementById("copy1");
	copy2 = document.getElementById("copy2");
	copy3 = document.getElementById("copy3");
	car = document.getElementById("car");
	cta = document.getElementById("cta");
	dark = document.getElementById("dark");
	hy_logo = document.getElementById("hy_logo");
	addEventListeners()
	
	
	
	starttime += 500;
	setTimeout(function(){hy_logo.className = "transition-2 fade-in";}, starttime);
	
	starttime += 2000;
	setTimeout(function(){hy_logo.className = "transition-2 fade-out";dark.className = "transition-2 fade-out";}, starttime);
	
	starttime += 1000;
	setTimeout(function(){car.className = "transition-2 fade-in";}, starttime);

	starttime += 1000;
	setTimeout(function(){copy1.className = "transition-2 left";}, starttime);
	
	starttime += 2000;
	setTimeout(function(){copy1.className = "transition-2 left fade-out";}, starttime);

	starttime += 1000;
	setTimeout(function(){copy2.className = "transition-2 left";}, starttime);
	
	starttime += 1000;
	setTimeout(function(){copy3.className = "transition-2 left";}, starttime);
	
	starttime += 1500;
	setTimeout(function(){cta.className = "transition-2 fade-in";}, starttime);
	
}
window.onload = function(){
	startAd();
};