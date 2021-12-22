
var x = 455;
var y = 65;
var a = 455;
var b = 85
var midX;
var midY;
var midA;
var midB;
var rotZ = 90;
var rotC = 90;
var acc = 0;
var revacc = 0;
var acc2 = 0;
var revacc2 = 0;
var backgroundimg;
var car1;
var car2;
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
var time;
var fastesttime;
var fastesttime1;
var fastesttime2;
var fastesttime3;
var restarttime;
var temptime;
var restarttime = 0;
var tempquestion0 = true;
var tempquestion1 = true;
var tempquestion2 = true;
var tempquestion3 = true;
var tempquestion4 = true;
var tempquestion5 = true;
var tempquestion6 = true;
var startquestion1 = true;
var startquestion2 = true;
var toofast = false;
var resettime = 0;
var backgroundsong;
var twop = false;





function preload(){
  backgroundimg = loadImage("pictures/Racetrack1.png");
  car1 = loadImage("pictures/Car1.png");
  car2 = loadImage("pictures/Car2.png")
  count1 = loadImage("pictures/Numb1.png");
  count2 = loadImage("pictures/Numb2.png");
  startimg = loadImage("pictures/RacetrackStart.png")
  roundnumb0 = loadImage("pictures/Roundnumb0.png");
  roundnumb1 = loadImage("pictures/Roundnumb1.png");
  roundnumb2 = loadImage("pictures/Roundnumb2.png");
  roundnumb3 = loadImage("pictures/Roundnumb3.png");
  fonttime = loadFont("pictures/Minecraft.ttf");
  endimg = loadImage("pictures/RacetrackEnd.png");
  gameover = loadImage("pictures/RacetrackGameOver.png");
}

function setup() { 
  
  createCanvas(1265, 555);
  angleMode(DEGREES);
  countDownFertig = false;
  countDown = 3;
  stopcountDown = 0;
  image(backgroundimg,0,0);
} 

function draw() { 
  if(raceround < 4 && toofast === false){
    if(startquestion2 === true){
      image(startimg,0,0);
    }
    startquestion2 = false;
    if(key === ' ' || startquestion1 === false){ 
      image(backgroundimg,0,0);
      startquestion1 = false
      if (countDown >= 0){ 
        startGame();
        finishLine();
      } else  {
        destroyed();
        finishLine();
        functionfastesttime();
        functiontime();
        showtime();
        verlangsameAutoAusserhalb();
        wandKollision();
        outOfBounce();
        steuereAuto2();
        steuereAuto();
        
        oil();
        speed();
      }
      if(twop = true){
        
      }
    }
  } else if (raceround > 3 && toofast === false){
    image(endimg,0,0);
    functionfastesttime();
    text(fastesttime, 460,470);
    fill(255,255,255);
    textFont(fonttime);
    textSize(20)
  } else if(toofast === true){
    image(gameover,0,0);
  }
  
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
  image(car1,0,0);
 
}

function steuereAuto2() {
  
  if (keyIsDown(87)) {
    if (keyIsDown(65)) {
      rotC = rotC - 3;
      } else if (keyIsDown(68)) {
      rotC = rotC + 3;
    }
    if (millis() % 2== 0 && acc2 < 6){
        acc2 += 0.5;
    }
    b += cos(rotC)*acc2;
    a -= sin(rotC)*acc2;
  } else if (keyIsDown(83)) {
    
    if (keyIsDown(68)) {
    rotC = rotC + 3;
  } else if (keyIsDown(65)) {
    rotC = rotC - 3;
  }
  if (millis() % 2== 0 && revacc2 < 1){
    revacc2 += 0.5;
  }
    b -= cos(rotC)*revacc2;
    a += sin(rotC)*revacc2;
  } else {
     while(acc2 != 0){
      if (millis() % 2== 0){
        tempacc2 = acc2;
        tempacc2 -= 0.5;
        acc2 = tempacc2;
      }
     }
    }
  translate(a,b);
  rotate(rotC);
  image(car2,0,0);
 
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

  if(midXtemp > 400 && midXtemp < 450 && midYtemp > 10 && midYtemp < 180){
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
  }
  if (raceround == 0){
    image(roundnumb0,0,0);
  }else if (raceround == 1){
    image(roundnumb1,0,0);
  }else if (raceround == 2){
    image(roundnumb2,0,0);
  }else if (raceround == 3){
    image(roundnumb3,0,0);
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
  raceround = 0;
  finish = false;
  checkpoint = false;
  fastesttime = "";
  startquestion1 = true;
  startquestion2 = true;
  toofast = false;
}

function functiontime(){
  time = millis();
  time = time / 1000;
  if(tempquestion0 === true){
    time = time - 3;
  }
  if(raceround === 1){
    if(tempquestion1 === true){
    temptime = time;
    }
    tempquestion1 = false;
    time = time - temptime
  }
  if(raceround === 2){
    if(tempquestion2 === true){
      temptime = time;
      }
      tempquestion2 = false;
    time = time - temptime
  }
  if(raceround === 3){
    if(tempquestion3 === true){
      temptime = time;
      }
      tempquestion3 = false;
    time = time - temptime
  }
} 

function functionfastesttime(){
  if(raceround === 1){
    if(tempquestion4 === true){
    fastesttime1 = time;
    }
    tempquestion4 = false;
    fastesttime = fastesttime1;
  }
  if(raceround === 2){
    if(tempquestion5 === true){
    fastesttime2 = time;
    }
    tempquestion5 = false;
    if(fastesttime2 < fastesttime){
      fastesttime = fastesttime2;
    }
  }
  if(raceround === 3){
    if(tempquestion6 === true){
    fastesttime3 = time;
    }
    tempquestion6 = false;
    if(fastesttime3 < fastesttime){
      fastesttime = fastesttime3;
    }
  }
  
}

function showtime(){
  text(time, 1035,345);
  text(fastesttime, 1035,475);
  fill(255,255,255);
  textFont(fonttime);
  textSize(20)
}

function oil(){
  midX = x + 13;
  midY = y - 22.5;
  midXtemp = midX;
  midYtemp = midY;

  if(midXtemp > 725 && midXtemp < 765 && midYtemp > 10 && midYtemp < 60){
    acc = 1;
  } else if(midXtemp > 90 && midXtemp < 145 && midYtemp > 305 && midYtemp < 350){
    acc = 1;
  } else if(midXtemp > 470 && midXtemp < 550 && midYtemp > 100 && midYtemp < 250){
    acc = 1;
  }
}

function speed(){
  midX = x + 13;
  midY = y - 22.5;
  midXtemp = midX;
  midYtemp = midY;

  if(midXtemp > 140 && midXtemp < 250 && midYtemp > 155 && midYtemp < 225){
    acc = 7;
  } else if(midXtemp > 740 && midXtemp < 850 && midYtemp > 280 && midYtemp < 350){
    acc = 7;
  }
}

function destroyed(){
  midX = x + 13;
  midY = y - 22.5;
  midXtemp = midX;
  midYtemp = midY;
 
  if(midXtemp > 185 && midXtemp < 800 && midYtemp > 100 && midYtemp < 200 && acc >= 5 && acc >= 6){
    toofast = true;
  } 
  if(midXtemp > 180 && midXtemp < 285 && midYtemp > 100 && midYtemp < 420  && acc >= 5 && acc >= 6){
    toofast = true;
  }
  if(midXtemp > 650 && midXtemp < 805 && midYtemp > 200 && midYtemp < 420  && acc >= 5 && acc >= 6){
    toofast = true;
  }
}





