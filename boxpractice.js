//Snake Game

//Game Loop-Init,Draw,Update

function init(){
canvas=document.getElementById('mycanvas');
pen=canvas.getContext('2d');
W=canvas.width;
H=canvas.height;

box={
    x:10,
    y:20,
    w:20,
    h:20,
    speed:5,
}
}

function draw(){
    pen.clearRect(0,0,W,H)
    pen.fillStyle="Green";
    pen.fillRect(box.x,box.y,box.w,box.h);
}

function update(){
    box.x += box.speed;
    box.y +=3;
    
    if(box.x>=W){
        box.speed *= -1 ;
    }

}

function gameLoop(){
    //init();
    draw();
    update();
}

init();
setInterval(gameLoop,100);