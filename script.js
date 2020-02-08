var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("#randomBtn");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

// color inputs match the initial background colors
setGradient();

// set gradient when changing input
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// random color generator
function randomColor(){
	var color = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	return color;
}

function getRandomColors(){
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

// set random color background when loaded
getRandomColors();

// text output of the css gradient parameter
css.textContent = body.style.background + ";";

// Setting functionality to the random button 
btn.addEventListener("click", getRandomColors);

