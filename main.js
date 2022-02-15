canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverheight=100;
roverwidth=90;
backgroundimage="mars.jpg";
roverimage="rover.png";
roverx=50;
rovery=50;
function add()
{
background_imgTag = new Image();//defining a variable with a new image
background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
background_imgTag.src = backgroundimage; // load image

rover_imgTag = new Image();//defining a variable with a new image
rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
rover_imgTag.src = roverimage; // load image
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadrover()
    {
        ctx.drawImage(rover_imgTag, roverx, rovery, roverwidth, roverheight);
    }
    window.addEventListener("keydown", my_keydown);
 function my_keydown(e)
{ keyPressed = e.keyCode; console.log(keyPressed);
if(keyPressed == '38') { up(); console.log("up");
     } if(keyPressed == '40') { down(); console.log("down");
     } if(keyPressed == '37') { left(); console.log("left");
     } if(keyPressed == '39') { right(); console.log("right"); } }