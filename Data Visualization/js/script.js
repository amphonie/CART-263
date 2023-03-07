//Stable Diffusion Prompt Generator, working with data visualization
//By Anthony Bourgeois
//Lee Wilkins
//CART 263

let myData;
let myWords = [];
let fontTitle;
let holdPrompt = false; 

function preload() {
  myData = new Data('1k.csv', 'prompt');
  fontTitle = loadFont('fonts/RubikIso-Regular.ttf'); //Font by Google Fonts. (https://fonts.google.com/specimen/Rubik+Iso)
}

function setup() {
  createCanvas(800, 600);
  background(223,218,238);
  // Load the CSV file
  myData.loadCSV(function() {
    //Calling for strings
    myData.selectRandomPrompt();

    // Select a random amount of words from the selected prompt
    myWords = myData.selectRandomWords(random(5,9));
    textFont(fontTitle);
    textSize(50);
    textAlign(CENTER);
    text('Prompt Generator', width/2, 100);

  });
}

function draw() {
  mousePressed();
}

function mousePressed(){
    myData.generateGradiant();
    myData.generateGradiant();
    myData.generateGradiant();
    myData.generateNewPrompt();
    textFont(fontTitle);
    textSize(50);
    textAlign(CENTER);
    fill(0,0,0);
    text('Prompt Generator', width/2, 100);
}


class Data {
  constructor(filepath, promptColumnName) {
    //Prompt generating
    this.filepath = filepath;
    this.promptColumnName = promptColumnName;
    this.table;
    this.selectedPrompt;
    
    //Text and fonts
    this.x = 400; // X coordinate of the text
    this.y = 175; // Y coordinate of the text
    this.fontSize = 35; // Font size of the text
    this.lineHeight = 45; // Height of each line
    this.maxWidth = 700; // Maximum width of the text
    this.fontPrompt = loadFont('fonts/Cousine-BoldItalic.ttf'); //Prompt text. Font by Google Fonts (https://fonts.google.com/specimen/Cousine)
    
    //Gradient 
    this.topColor = color(255, 0, 0);
    this.bottomColor = color(0, 0, 255);
  }

  loadCSV(callback) { //Calls back the CSV file for the object.
    this.table = loadTable(this.filepath, 'csv', 'header', callback);
  }

  selectRandomPrompt() { //Returns a random string between 0 and the end of the table.
    let randomRowIndex = int(random(0, this.table.getRowCount())); 
    this.selectedPrompt = this.table.getString(randomRowIndex, this.promptColumnName); 
  }

  selectRandomWords(numWords) { //This method takes a random part of the sting, then is split by the "," character in the CSV file in the strings.  
    let wordArray = split(this.selectedPrompt, ',');
    let randomWords = []; //An array to store previously used words. 
    
    for (let i = 0; i < numWords; i++) { 
      if (wordArray.length > 0) {
        let randomIndex = int(random(0, wordArray.length));
        let selectedWord = wordArray[randomIndex].trim(); //Trims the string's whitespace
        randomWords.push(selectedWord); 
        wordArray.splice(randomIndex, 1); // remove the selected word from the array
      } else {
        break; // no more words to select
      }
    }
    return randomWords;
  }
  


  generateNewPrompt() { 
    this.selectRandomPrompt();
    console.log("New prompt generated:", this.selectedPrompt); 
    fill(0,0,0);
    noStroke();
    textFont(this.fontPrompt);
    textSize(this.fontSize);
    textAlign(CENTER);

    //Lets the text fit within the canvas 
    let promptLines = []; 
    let words = split(this.selectedPrompt, ' '); 
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
      let word = words[i];
      let lineLength = textWidth(currentLine + ' ' + word);
      if (lineLength > this.maxWidth) {
        promptLines.push(currentLine);
        currentLine = word;
      } else {
        currentLine += ' ' + word;
      }
    }
    promptLines.push(currentLine);
    for (let i = 0; i < promptLines.length; i++) {
      let line = promptLines[i];
      text(line, this.x, this.y + i * this.lineHeight);
    }
  }
  
   generateGradiant(){ //Taken from Vertical Gradient - https://happycoding.io/tutorials/p5js/for-loops/vertical-gradient
    const m = 100;

    const topR = 255 * noise(0);
    const topG = 255 * noise(1000);
    const topB = 255 * noise(2000);
    const bottomR = 255 * noise(3000);
    const bottomG = 255 * noise(4000);
    const bottomB = 255 * noise(5000);

    this.topColor = color(topR, topG, topB);
    this.bottomColor = color(bottomR, bottomG, bottomB);

    for(let y = 0; y < height; y++) {
      const lineColor = lerpColor(this.topColor, this.bottomColor, y / height);

      stroke(lineColor);
      line(0, y, width, y);
    }
  }
}