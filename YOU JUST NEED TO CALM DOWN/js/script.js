//Anthony Bourgeois
//CART 
//You Just Need to Calm Down is a breathing exercise with Object Oriented Programming that helps the user meditate. 
"use strict";

let ball = [];
let velocityBreath;
let noiseScale = 0.02;
let angle = 0;
let pointCount = 4;
let t;
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function setup() {
  createCanvas(600, 600);
  // colorMode(HSB);
  t = 0;
  for (let i = 0; i < 5; i++) {
    // ball[i] = new StressBall(random(100, 500), random(100, 500), random(-20, 20));
    ball[i] = new StressBall();
  }
}

function draw() {
  background(137, 207, 240);
  for (let i = 0; i < 5; i++) {
    ball[i].breathIn();
    t += 0.01
  }
  print(ball.velocity);
}

class StressBall {
  constructor(newX, newY, offset) {
    this.x = newX;
    this.y = newY;
    this.set = offset;
    this.breath = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 201, 201, 202, 203, 203, 204, 205, 206, 207, 208, 209, 210, 212, 213, 215, 216, 218, 219, 221, 223, 225, 226, 228, 230, 233, 235, 237, 239, 241, 244, 246, 249, 251, 254, 256, 259, 261, 264, 267, 270, 272, 275, 278, 281, 284, 287, 290, 293, 296, 299, 302, 305, 308, 311, 315, 318, 321, 324, 327, 330, 333, 336, 339, 343, 346, 349, 352, 355, 358, 361, 364, 367, 370, 373, 376, 379, 382, 384, 387, 390, 393, 395, 398, 400, 403, 405, 408, 410, 413, 415, 417, 419, 421, 424, 426, 428, 429, 431, 433, 435, 436, 438, 439, 441, 442, 444, 445, 446, 447, 448, 449, 450, 451, 451, 452, 453, 453, 454, 454, 454, 454, 454, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 455, 454, 454, 454, 454, 454, 453, 453, 452, 451, 451, 450, 449, 448, 447, 446, 445, 444, 442, 441, 439, 438, 436, 435, 433, 431, 429, 428, 426, 424, 421, 419, 417, 415, 413, 410, 408, 405, 403, 400, 398, 395, 393, 390, 387, 384, 382, 379, 376, 373, 370, 367, 364, 361, 358, 355, 352, 349, 346, 343, 339, 336, 333, 330, 327, 324, 321, 318, 315, 311, 308, 305, 302, 299, 296, 293, 290, 287, 284, 281, 278, 275, 272, 270, 267, 264, 261, 259, 256, 254, 251, 249, 246, 244, 241, 239, 237, 235, 233, 230, 228, 226, 225, 223, 221, 219, 218, 216, 215, 213, 212, 210, 209, 208, 207, 206, 206, 205, 205, 205, 205, 204, 204, 204, 203, 203, 203, 203, 203, 202, 202, 202, 201, 201, 201, 200, 200, 200, 200, 200];
    this.velocityBreath;
    this.circleAdjust = 150;
    this.color = [];
  }

  
  display(velocity) {
    this.velocity = velocity;
    for(let i = angle; i < TWO_PI + angle; i += TWO_PI / pointCount){ //Taken from https://www.alpharithms.com/evenly-spacing-objects-around-a-circle-in-p5js-processing-180222/
      this.x = velocity / 5 * Math.cos(i) + width / 2;
      this.y = velocity / 5 * Math.sin(i) + height / 2;
      for (let i = 0; i < colors.length; i++) {
        let h = map(noise(t + i * 10), 0, 1, 0, 255);
        noStroke();
        fill(h, 100, 100,10);
        circle(this.x, this.y, this.velocity - this.circleAdjust);
      }
  }
    // circle(this.x, this.y, this.velocity - this.circleAdjust);
    pointCount++
    TWO_PI++
    // this.DrawLine();
  }

  // DrawLine(){
  //   line(this.x,this.y,this.x+ this.velocity/2, this.velocity/2 + this.y);
  // }

  breathIn() {
    for (let i = 0; i <= this.breath.length; i++) {
      if (frameCount / 2 % this.breath.length === i) {
        this.velocityBreath = this.breath[i];

      }
    }
    this.display(this.velocityBreath);
  }

}