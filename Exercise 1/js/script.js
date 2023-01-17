/**
Pong (WIP)
Anthony Bourgeois

This is an attempt to make pong with as far as my current own knowledge of P5.JS can take me.
I haven't seen object oriented programing yet and prefer to explore it once saw in class! 
*/

"use strict";
var size = 20 // size of the paddle
var playerOnePosition = 220 // Initial left paddle position
var playerTwoPosition = 220 // Initial right paddle position
var playerSpeed = 5 // Paddle speed

var puckSize = 10 // size of the puck
var puckX = 350;
var puckY = 250;
var puckDirX;
var puckDirY;
var puckSpeed = 0.01;


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(700,500);
}


/**
Description of draw()
*/
function draw() {
background(0,0,0);

for (let i = 0; i < width/size; i++) { // Drawing the middle line 
  fill("#696969")
  rect(350,(i*size), 8,size);
  i++
}

 player1();
 player2();
 puck();
}

function player1(){ //Left player paddle
      if (keyIsDown(87)) { // if "W" Key is pressed down
        playerOnePosition -= playerSpeed;} // decrease speed to a negative value
          if (playerOnePosition < 0) { // if the position is lower than 0
            playerOnePosition = 0; // set the position to 0
          }
          if (playerOnePosition >= 440) { //if the paddle position is higher than 440 ( size of the canvas - the size of the paddle)
            playerOnePosition = 440; //set the position to 440
          }
     
      if (keyIsDown(83)) { //if the "s" key is held down 
        playerOnePosition += playerSpeed;} //increment speed to negative value 

      fill(255,255,255); //Color the paddle white
      rect(10,playerOnePosition,10,60); //paddle size
    }

function player2(){ //Right player paddle
    if (keyIsDown(UP_ARROW)) { // if the Up Arrow Key is pressed down
      playerTwoPosition -= playerSpeed; // decrease speed to a negative value
    }   if (playerTwoPosition < 0) { // if the position is lower than 0 
          playerTwoPosition = 0; // set the position to 0
    }
    if (playerTwoPosition >= 440) { //if the paddle position is higher than 440 ( size of the canvas - the size of the paddle)
      playerTwoPosition = 440; //set the position to 440
    } 
  
    if (keyIsDown(DOWN_ARROW)) { //if the Down Arrow Key is held down 
        playerTwoPosition += playerSpeed; //increment speed to negative value 
    }
  fill(255,255,255); //Make paddle white
  rect(680,playerTwoPosition,10,60); //Right Paddle Rect.
}

function puck(){ //Puck 
  noStroke();
  fill(255,0,0);
  square(puckX, puckY, puckSize); 
  
  // if (false) {
  //   puckX = puckX + puckSpeed;
  //   puckSpeed = puckSpeed + 0.2;
  // }

  // puckDirX = puckX * puckSpeed
  // puckDirY = puckY * puckSpeed

}

