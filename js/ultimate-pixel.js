
var x = 455;
var y = 65;
var midX;
var midY;
var rotZ = 90;
var acc = 0;
var revacc = 0;
var backgroundimg;
var car1;
var rect1;
var count1
var count2;
var countDownFertig;
var finish = false;
var checkpoint = false;
var raceround = 0;
var backgroundimg;
var countDown ;
var stopcountDown;


function preload(){
  backgroundimg = loadImage("pictures/Racetreck1.png");
  car1 = loadImage("pictures/Car1.png");
  count1 = loadImage("pictures/Numb1.png");
  count2 = loadImage("pictures/Numb2.png")
}

function setup() { 

  createCanvas(1265, 555);
  angleMode(DEGREES);
  countDownFertig = false;
  countDown = 3;
  stopcountDown = 0;
  image(backgroundimg,0,0);
  image(car1,0,0);
} 

function draw() { 
    image(backgroundimg,0,0);
    
    if (countDown >= 0){ 
      startGame();
    } else  {
      finishLine();
      verlangsameAutoAusserhalb();
      wandKollision();
      outOfBounce();
      steuereAuto();
    }

  image(car1,0,0);
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

function startGame() {
      
   
    image(car1,0,0);
    console.log(countDown)
    countDown--;

    if(countDown === 2){
      image(count2,0,0);
      
    } else if(countDown === 1){
      image(backgroundimg,0,0);
     
      image(count1,0,0);
    }
    wait(1,countDown);
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

  if(midXtemp > 0 && midXtemp < 1210 && midYtemp > -50 && midYtemp < -15){
    x = 370
    y = 65
    rotZ = 90
    finish = false;
    checkpoint = false;
  } 
  if(midXtemp > 0 && midXtemp < 2 && midYtemp > 0 && midYtemp < 555){
    x = 370
    y = 65
    rotZ = 90
    finish = false;
    checkpoint = false;
  } 
  if(midXtemp > 0 && midXtemp < 1210 && midYtemp > 554 && midYtemp < 555){
    x = 370
    y = 65
    rotZ = 90
    finish = false;
    checkpoint = false;
  } 
  if(midXtemp > 1015 && midXtemp < 1210 && midYtemp > 0 && midYtemp < 555){
    x = 370
    y = 65
    rotZ = 90
    finish = false;
    checkpoint = false;
  } 
}

function finishLine(){
  midX = x + 13;
  midY = y - 22.5;
  midXtemp = midX;
  midYtemp = midY;

  if(midXtemp > 400 && midXtemp < 450 && midYtemp > 10 && midYtemp < 200){
    if(checkpoint == true){
      finish = true
    }
  }
  if(midXtemp > 400 && midXtemp < 450 && midYtemp > 200 && midYtemp < 555){
    checkpoint = true;
  }
  if(finish == true && checkpoint == true){
    raceround = raceround + 1;
    finish = false;
    checkpoint = false;
    console.log(finish);
    console.log(checkpoint);
    console.log(raceround);
  }
}

function wait(secondsToWait) {

  let future = Date.now() + secondsToWait * 1000;

  while (future > Date.now()) {
    // do nothing 
  }
}

function keyPressed(){
  if(key === 'r'){
    restartGame();
  }
}

function restartGame() {
  countDown = 3;
  x = 455;
  y = 65;
  rotZ = 90;
}


