var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("#randomBtn");


function changeInputColor(newColor1, newColor2){
	color1.value = newColor1;
	color2.value = newColor2;
}

function setGradientBtn() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function setGradient(newColor1,newColor2) {
	body.style.background = 
	"linear-gradient(to right, " 
	+ newColor1
	+ ", " 
	+ newColor2
	+ ")";

	css.textContent = body.style.background + ";";

	changeInputColor(newColor1, newColor2);
}

color1.addEventListener("input", setGradientBtn);
color2.addEventListener("input", setGradientBtn);

// color inputs match the initial background colors
function randomColor(){
	var color = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	return color;
}
var randomColor1 = randomColor();
var randomColor2 = randomColor();

body.style.background = 
	"linear-gradient(to right, " + randomColor1 + ", "
	 + randomColor2 + ")";

changeInputColor(randomColor1, randomColor2);

css.textContent = body.style.background + ";";

// Setting functionality to the random button 
btn.addEventListener("click", function(){	
	setGradient(randomColor(),randomColor());
})

