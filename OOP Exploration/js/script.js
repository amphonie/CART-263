//This is the first experimentation with Object Oriented Programming

let ball = [];

function setup() {
  createCanvas(700,400);
    for (let i = 0; i < 50; i++) {
      ball[i] = new Particle(i);
    }
  }

function draw() {
  background(200,50,100);
  for (let i = 0; i < ball.length; i++) {
  ball[i].display();
  ball[i].gatekeepBall();
  }
}

class Particle {
  constructor(pSize) {
    this.x = random(width);
    this.y = random(height);
    this.speed = 0.5;
    this.diameter = pSize;
  }
  display() {
    noStroke();
    fill(this.x,this.y,225);
    ellipse(this.x,this.y,10);
    this.x += random(-this.speed,this.speed);
    this.y += random(-this.speed,this.speed);
    this.speed = map(mouseX, 0, width, 0, 5);
  }
  gatekeepBall(){
    // if (this.x = 0 || this.x = width) {
      
    // }
  }
}
