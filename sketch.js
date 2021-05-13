var bgd,bgd2,form,system,code,security;
var score=0;

function preload() {
 
  
  bgd= loadImage("aladdin_cave.jpg")
  bgd2 = loadImage("treasure.jpg")
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  }

function draw() {
  background(bgd);
  clues();
  security.display();
  textSize(30);
  fill("black");
  text("Score: " + score, 840, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bgd2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}