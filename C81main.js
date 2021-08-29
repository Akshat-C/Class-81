var canvas = document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");
var color = "blue";
var width = 5;

ctx.beginPath();
ctx.lineWidth=width;
ctx.strokeStyle=color;
ctx.arc(100, 200, 50, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouseX = e.clientX-canvas.offsetLeft;
    mouseY = e.clientY-canvas.offsetTop;
    circle(mouseX,mouseY);
}
function circle(mouseX,mouseY)
{
    ctx.beginPath();
    ctx.lineWidth=width;
    ctx.strokeStyle=color;
    ctx.arc(mouseX, mouseY, 50, 0, 2*Math.PI);
    ctx.stroke();
}