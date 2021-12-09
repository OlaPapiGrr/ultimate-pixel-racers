var x = 50;
var y = 50;
var rotZ = 0;
var acc = 0;


function setup() { 
    alert("setup");
  createCanvas(400, 400);
  angleMode(DEGREES)
  rectMode(CENTER);
   
} 

function draw() { 
  background(220);
  fill(0);

  console.log(millis());
  
  steuereAuto();
  
  rect(0,0,30,50);
 
}

function steuereAuto() {
  
  if (keyIsDown(UP_ARROW)) {
    if (keyIsDown(LEFT_ARROW)) {
    rotZ = rotZ - 4;
    } else if (keyIsDown(RIGHT_ARROW)) {
    rotZ = rotZ + 4;
  }
    if (millis() % 2== 0 && acc < 7){
        acc += 0.5;
    }
    y += cos(rotZ)*acc;
    x -= sin(rotZ)*acc;
  } else if (keyIsDown(DOWN_ARROW)) {
    
    if (keyIsDown(RIGHT_ARROW)) {
    rotZ = rotZ + 2;
  } else if (keyIsDown(LEFT_ARROW)) {
    rotZ = rotZ - 2;
  }
    y -= cos(rotZ)*1;
    x += sin(rotZ)*1;
  } else {
     acc = 0;
    }
  
  
  
  
  translate(x,y);
  rotate(rotZ);
}


