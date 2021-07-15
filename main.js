const blue = "#0000ff"

const gui = new dat.GUI()

let canvas = document.getElementById("canvas");
context = canvas.getContext('2d');

const Wave = {
    y: canvas.height / 2,
    amplitude: 10,
    frequency: 0.01,

    draw() {
        context.clearRect(0,0,canvas.width, canvas.height)
        context.beginPath()
        context.moveTo(0, canvas.height / 2)

        for (let x = 0; x < canvas.width; x++){
            let y = Wave.y + Wave.amplitude * Math.sin(x * Wave.frequency) 
            context.lineTo(x, y );
        }
        context.stroke()
    }
}


const Ball = {
    x: 0,
    y:  Wave.y + Wave.amplitude * Math.sin(this.x * Wave.frequency),
    radius: 10,

    draw(x,y, radius){
        context.beginPath();
        context.fillStyle = blue;
        context.arc(x, y, radius, 0, Math.PI * 2, false);
        context.closePath();
        context.fill();
    }
}


gui.add(Wave, 'y', 0, canvas.height)
gui.add(Wave, 'amplitude', -300, 300)
gui.add(Wave, 'frequency', 0,1)

gui.add(Ball, 'x', 0, canvas.width)


function animate() {
    requestAnimationFrame(animate)
    
    Wave.draw()
   
    let y = Wave.y + Wave.amplitude * Math.sin(Ball.x * Wave.frequency) 
    Ball.draw(Ball.x, y, Ball.radius)
}

animate()