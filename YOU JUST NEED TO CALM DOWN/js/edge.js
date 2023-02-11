function draw() {
    background(255);
    
    // generate a random noise value
    let noiseValue = noise(frameCount * 0.01);
    
    // map the noise value to a color range
    let c = map(noiseValue, 0, 1, 0, 255);
    
    // set the fill color with the mapped color
    fill(c, 0, 255-c);
    
    // draw an object (e.g. a rectangle)
    rect(50, 50, 100, 100);
  }