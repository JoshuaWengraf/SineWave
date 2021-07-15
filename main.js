const blue = "#0000ff"
let drawCircle = function (x, y, radius) {
	context.beginPath();
	context.fillStyle = blue;
	context.arc(x, y, radius, 0, Math.PI * 2, false);
	context.closePath();
	context.fill();
}

let drawAxis = function (){
    context.beginPath();
    context.lineWidth = 10;
	context.moveTo(0,0)
    for (let x = 0; x < canvas.width; x++){
        context.lineTo(x, canvas.height)
    }
    context.stroke()
} 


let drawSineWave = function (offset, amplitude, frequency){
    context.beginPath()
    context.moveTo(0, canvas.height / 2)

    for (let x = 0; x < canvas.width; x++){
        let y = canvas.height/2 + 100 * Math.sin(x * 0.01) 
        context.lineTo(x, y);
    }

    context.stroke()
} 

let drawWindow = function() {
	context.clearRect(0,0,canvas.width,canvas.height);
}

let canvas = document.getElementById("canvas");
context = canvas.getContext('2d');

let x = 0;
let ballRadius = 20
let offset = canvas.height/2
let amplitude = 100
let frequency = 0.01

function draw(){

    document.getElementById("myRange").value = x
    xMouse = document.getElementById("myRange").value;

	drawWindow();
    drawSineWave(offset, amplitude, frequency);
    drawAxis()

    

    y = offset + amplitude*Math.sin(x * frequency) 

    drawCircle(xMouse,y, ballRadius);

    x = x + 1

    if (x > canvas.width){
        x = 0
    }  

   
};


setInterval(draw,10); 




