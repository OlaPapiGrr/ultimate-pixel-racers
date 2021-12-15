var x = 455;
var y = 65;
var midX;
var midY;
var rotZ = 90;
var acc = 0;
var revacc = 0;
var background;
var car1;
var rect1;


function preload(){
  background = loadImage("pictures/Racetreck1.png");
  car1 = loadImage("pictures/Car1.png");
}

function setup() { 

  createCanvas(1265, 555);
  angleMode(DEGREES);
} 

function draw() { 
  
  image(background, 0, 0);
  
  verlangsameAutoAusserhalb();
  wandKollision();
  outOfBounce();
  steuereAuto();
  
  image(car1,0,0);
  
  
  console.log("Y ",mouseY);
  console.log("X ",mouseX);
  console.log("mY ",midY);
  console.log("mX ",midX);
}

function steuereAuto() {
  
  if (keyIsDown(UP_ARROW)) {
    if (keyIsDown(LEFT_ARROW)) {
      rotZ = rotZ - 3;
      } else if (keyIsDown(RIGHT_ARROW)) {
      rotZ = rotZ + 3;
    }
    if (millis() % 2== 0 && acc < 6){
        acc += 0.5;
    }
    y += cos(rotZ)*acc;
    x -= sin(rotZ)*acc;
  } else if (keyIsDown(DOWN_ARROW)) {
    
    if (keyIsDown(RIGHT_ARROW)) {
    rotZ = rotZ + 3;
  } else if (keyIsDown(LEFT_ARROW)) {
    rotZ = rotZ - 3;
  }
  if (millis() % 2== 0 && revacc < 1){
    revacc += 0.5;
  }
    y -= cos(rotZ)*revacc;
    x += sin(rotZ)*revacc;
  } else {
     while(acc != 0){
      if (millis() % 2== 0){
        tempacc = acc;
        tempacc -= 0.5;
        acc = tempacc;
      }
     }
    }
  translate(x,y);
  rotate(rotZ);

 
}


function verlangsameAutoAusserhalb(){
  midX = x + 13;
  midY = y - 22.5;
  midXtemp = midX;
  midYtemp = midY;
  
  if(midXtemp > 0 && midXtemp < 70 && midYtemp > 0 && midYtemp < 555){
    acc = 1;
  } else if(midXtemp > 0 && midXtemp < 1210 && midYtemp > 0 && midYtemp < 8){
    acc = 1;
  } else if(midXtemp > 930 && midXtemp < 1210 && midYtemp > 0 && midYtemp < 555){
    acc = 1;
  } else if(midXtemp > 0 && midXtemp < 1210 && midYtemp > 510 && midYtemp < 555){
    acc = 1;
  } else if(midXtemp > 400 && midXtemp < 550 && midYtemp > 330 && midYtemp < 555) {
    acc = 1;
  }
}



function wandKollision(){
  midX = x + 13;
  midY = y - 22.5;
  midXtemp = midX;
  midYtemp = midY;
 
  if(midXtemp > 185 && midXtemp < 800 && midYtemp > 100 && midYtemp < 200){
    acc = 0;
    y -= cos(rotZ)*1;
    x += sin(rotZ)*1;
  } 
  if(midXtemp > 180 && midXtemp < 285 && midYtemp > 100 && midYtemp < 420){
    acc = 0;
    y -= cos(rotZ)*1;
    x += sin(rotZ)*1;
  }
  if(midXtemp > 650 && midXtemp < 805 && midYtemp > 200 && midYtemp < 420){
    acc = 0;
    y -= cos(rotZ)*1;
    x += sin(rotZ)*1;
  }
}

function outOfBounce(){
  midX = x + 13;
  midY = y - 22.5;
  midXtemp = midX;
  midYtemp = midY;

  if(midXtemp > 0 && midXtemp < 1210 && midYtemp > 0 && midYtemp < 2){
    x = 370
    y = 65
    rotZ = 90
  } 
  if(midXtemp > 0 && midXtemp < 2 && midYtemp > 0 && midYtemp < 555){
    x = 370
    y = 65
    rotZ = 90
  } 
  if(midXtemp > 0 && midXtemp < 1210 && midYtemp > 554 && midYtemp < 555){
    x = 370
    y = 65
    rotZ = 90
  } 
  if(midXtemp > 1015 && midXtemp < 1210 && midYtemp > 0 && midYtemp < 555){
    x = 370
    y = 65
    rotZ = 90
  } 
}


