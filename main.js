var mouseEvent = "";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "pink";
width_of_line= 7;

canvas.addEventListener("mousedown",  my_mousedown); 
function my_mousedown(e)
{
    mouseEvent ="mousedown";
}

canvas.addEventListener("mouseleave",  my_mouseleave); 
function my_mouseleave(e)
{
    mouseEvent ="mouseleave";}

    canvas.addEventListener("mouseup",  my_mouseup); 
function my_mouseup(e)
{
    mouseEvent ="mouseup";}


    canvas.addEventListener("mousemove",  my_mousemove); 
function my_mousemove(e)

{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent =="mousedown")
 {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =width_of_line;
ctx.moveTo(last_position_of_x, last_position_of_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();
 }
last_position_of_x= current_position_of_mouse_x;
last_position_of_y= current_position_of_mouse_y;
}

var width = screen.width;
new_width = screen.width -70;
new_height=sreen.height -300;
var last_position_of_touch_x, last_position_of_touch_y;
if (width  < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_heigth;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart (e)
{console.log("my_touchstart");
color=document.getElementById("color").value;
last_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{ 
    current_position_of_mouse_x = e.touches[0].clientX -canvas-offsetLetf;
    current_position_of_mouse_y = e.touches[0].clientY -canvas-offsetTop;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;

ctx.moveTo(last_position_of_x, last_position_of_y);

ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y)
ctx.stroke();

last_position_of_x=current_position_of_touch_x;
last_position_of_y=current_position_of_touch_y;
}