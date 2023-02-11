//Anthony Bourgeois
//CART 
//You Just Need to Calm Down is a breathing exercise with Object Oriented Programming that helps the user meditate. 
"use strict";

let ball = [];
let velocityBreath;
let angle = 0;
let pointCount;
let r;
let g;
let b;
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function setup() {
  createCanvas(600, 600);

  // how many circle is in the stressball.
  pointCount = random(8,15);
  
  //Create stressball.
  for (let i = 0; i < 5; i++) {
    ball[i] = new StressBall();
  }
}

function draw() {
   // generate a random noise value
  this.noiseValue = noise(frameCount * 0.005);
  
  // map the noise value to a color range.
  this.r1 = map(noiseValue, 0, 1, 0, 255);
  this.g1 = map(noiseValue, 0, 1, 0, 255);
  this.b1 = map(noiseValue, 0, 1, 0, 255);
  // set the background color with the mapped color.
  background(r1-100, g1 - 44, b1-4);
  // display the breathing pattern of the movement of the ball + the display of the ball.
  for (let i = 0; i < 5; i++) {
    ball[i].breathIn();
  }
}

class StressBall {
  constructor(newX, newY, pointCount) {
    this.x = newX;
    this.y = newY;
    //Array that makes the movement organic.
    this.breath = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 201, 201, 202, 203, 203, 204, 205, 206, 207, 208, 209, 210, 212, 213, 215, 216, 218, 219, 221, 223, 225, 226, 228, 230, 233, 235, 237, 239, 241, 244, 246, 249, 251, 254, 256, 259, 261, 264, 267, 270, 272, 275, 278, 281, 284, 287, 290, 293, 296, 299, 302, 305, 308, 311, 315, 318, 321, 324, 327, 330, 333, 336, 339, 343, 346, 349, 352, 355, 358, 361, 364, 367, 370, 373, 376, 379, 382, 384, 387, 390, 393, 395, 398, 400, 403, 405, 408, 410, 413, 415, 417, 419, 421, 424, 426, 428, 429, 431, 433, 435, 436, 438, 439, 441, 442, 444, 445, 446, 447, 448, 449, 450, 451, 451, 452, 453, 453, 454, 454, 454, 454, 454, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 454, 454, 454, 454, 454, 453, 453, 452, 451, 451, 450, 449, 448, 447, 446, 445, 444, 442, 441, 439, 438, 436, 435, 433, 431, 429, 428, 426, 424, 421, 419, 417, 415, 413, 410, 408, 405, 403, 400, 398, 395, 393, 390, 387, 384, 382, 379, 376, 373, 370, 367, 364, 361, 358, 355, 352, 349, 346, 343, 339, 336, 333, 330, 327, 324, 321, 318, 315, 311, 308, 305, 302, 299, 296, 293, 290, 287, 284, 281, 278, 275, 272, 270, 267, 264, 261, 259, 256, 254, 251, 249, 246, 244, 241, 239, 237, 235, 233, 230, 228, 226, 225, 223, 221, 219, 218, 216, 215, 213, 212, 210, 209, 208, 207, 206, 206, 205, 205, 205, 205, 204, 204, 204, 203, 203, 203, 203, 203, 202, 202, 202, 201, 201, 201, 200, 200, 200, 200, 200];
    //calls back the breath array
    this.velocityBreath;
    // to ajust the size of the size of the breathing.
    this.circleAdjust = 150;
    this.circleNum = pointCount;
    this.noiseValue;
    this.r1;
    this.g1,
    this.b1;
  }

  
  display(velocity) {
    this.velocity = velocity;
    //for loop that makes the circle as a pattern that turns around its own circle diameter.
    for(let j = angle; j < TWO_PI + angle; j += TWO_PI / pointCount){ //Taken from https://www.alpharithms.com/evenly-spacing-objects-around-a-circle-in-p5js-processing-180222/
      this.x = velocity / 5 * Math.cos(j) + width / 2;
      this.y = velocity / 5 * Math.sin(j) + height / 2;
      for (let j = 0; j < colors.length; j++) {
        //mapping the value of the noise
        let h = map(noiseValue, 0, 1, 0, 255);
        noStroke();
        //give the fill noise value
        fill(h*r1, h*g1, h*b1, 2);
        circle(this.x, this.y, this.velocity - this.circleAdjust);
        
      }
    }
  }


  breathIn() {
    //this forloop is for the breathing pattern and divided by the frame count by 2 so its slower.
    for (let i = 0; i <= this.breath.length; i++) {
      if (frameCount / 2 % this.breath.length === i) {
        this.velocityBreath = this.breath[i];

      }
    }
    //calls display within the breathIn method.
    this.display(this.velocityBreath);
  }

}
