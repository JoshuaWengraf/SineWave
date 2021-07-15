const blue = "#0000ff"

const gui = new dat.GUI()

let canvas = document.getElementById("canvas");
context = canvas.getContext('2d');

const wave = {
    y: canvas.height / 2,
    amplitude: 10,
    frequency: 0.01,

    draw() {
        context.clearRect(0,0,canvas.width, canvas.height)
        context.beginPath()
        context.moveTo(0, canvas.height / 2)

        for (let x = 0; x < canvas.width; x++){
            let y = wave.y + wave.amplitude * Math.sin(x * wave.frequency) 
            context.lineTo(x, y );
        }
        context.stroke()
    }
}


const ball = {
    x: 0,
    y:  wave.y + wave.amplitude * Math.sin(this.x * wave.frequency),
    radius: 10,

    draw(x,y, radius){
        context.beginPath();
        context.fillStyle = blue;
        context.arc(x, y, radius, 0, Math.PI * 2, false);
        context.closePath();
        context.fill();
    }
}


gui.add(wave, 'y', 0, canvas.height)
gui.add(wave, 'amplitude', -300, 300)
gui.add(wave, 'frequency', 0,1)

gui.add(ball, 'x', 0, canvas.width)


function animate() {
    requestAnimationFrame(animate)
    
    wave.draw()
    ball.draw()

    let y = wave.y + wave.amplitude * Math.sin(ball.x * wave.frequency) 
    ball.draw(ball.x, y, ball.radius)
}
animate()