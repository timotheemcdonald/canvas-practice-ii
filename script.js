const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

const mouse = {
    x: null,
    y: null,
}

canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    ctx.fillStyle = 'red';
})

function drawCircle(){
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.stroke();
}

function drawBlueCircle(){
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.stroke();
}

canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle()
    requestAnimationFrame(animate);
}
animate();