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
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
ctx.stroke();
})

// ctx.fillStyle = 'red';
// ctx.strokeStyle = 'red';
// ctx.beginPath();
// ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
// ctx.stroke();
