
//Floating menu

$("#menu").stick_in_parent();

//Hamburger

var canvas = document.getElementById('hamburger');
var context = canvas.getContext('2d');
canvas.width=300;
canvas.height = 150;

function draw(color){
	context.clearRect(0,0,canvas.width,canvas.height);
	context.strokeStyle = color;
	context.lineWidth = 8;
	context.beginPath();
	
	context.moveTo(30,40);
	context.lineTo(270,40);

	context.moveTo(30,75);
	context.lineTo(270,75);

	context.moveTo(30,75+75-40);
	context.lineTo(270,75+75-40);
	context.stroke();

}
window.addEventListener("load",e=>{
	draw("black");
})	
canvas.addEventListener("mouseover", e=>{
	draw("blue");
})
canvas.addEventListener("mouseleave", e=>{
	draw("black");
})
