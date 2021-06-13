 canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");
 rover_width = 100;
 rover_height = 90;
 rover_y = 10;
 rover_x = 10;

 Background_image = "mars.jpg";
 rover_image = "rover.png";

function add(){
    Background_ImgTag= new Image();
    Background_ImgTag.onload= uploadBackground;
    Background_ImgTag.src= Background_image;
    rover_ImgTag= new Image();
    rover_ImgTag.onload= uploadRover;
    rover_ImgTag.src= rover_image;
}
function uploadBackground(){
    ctx.drawImage(Background_ImgTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_ImgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown" , my_keydown);
    function my_keydown(e){
        keypressed=e.keyCode;
        console.log(keypressed);
        if(keypressed == '38'){
            up();
            console.log("up");
        }

        if(keypressed == '39'){
            right();
            console.log("right");
        }

        if(keypressed == '40'){
            down();
            console.log("down");
        }

        if(keypressed == '37'){
            left();
            console.log("left");
        }
    }
