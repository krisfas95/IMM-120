// Variables
// Variables
var count = 0;
var currentSecond;
var mouseIsClicked;
var mouseIsReleased;
var ballx;
var bally;
var mousePressed;
var speed = 1;
var directionx = 1;
var directiony = -1;
var ballMove;
var recty;
var rectx;
var directionrect = 1;
var speedr = 5;
var SOUND;

// Load images and sounds
function preload() {
  SOUND = loadSound('./swoosh.ogg');
}

// Run once at the start
function setup() {
  var canvas = createCanvas(800, 500);
  canvas.parent('sketch');
  ballx = 100;
  bally = 400;
  rectx = 750;
  recty = 250;
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
      if (ballx <= 200) {
      ballx = ballx + 10;
      }
  }
  if (keyCode === LEFT_ARROW) {
      if (ballx >= 40) {
      ballx = ballx - 10;
      }
  }
  if (keyCode === UP_ARROW) {
      count++;
  }
}
function mousePressed() {
  ballMove = true;
  
}
// Run forever after setup
function draw() {
background(100, 30, 50);
  currentSecond=second();
  // Forever loop
  fill(150,34,89);
  rect(15,420,200,25);

  fill(255);
  textSize(28);
  text("Click to Start and Press Up Arrow Key to increase speed", 10, 25);
  text("Left and Right Arrow Keys are to move the ball on platform!", 10, 75);
  text("To win, get the ball completely through the moving block!", 10, 120);
  

  fill(255,47,0);
  ellipse(ballx,bally, 50,50);
  
  fill (150);
  rect(rectx, recty, 20, 50);

  recty = recty + 2 * directionrect;

  if (recty > 400) {
    directionrect = directionrect * -1;
  }
   if (recty < 25) {
    directionrect = directionrect * -1;
  }

    if (ballMove === true) {
        ballx = ballx + count;
        bally = bally + (count * directiony);

        if (bally < 25) {
          directiony = 1;
        }
    }

 
  

 
  if(isInsideRect(ballx, bally, rectx, recty, 20, 50)) {
  SOUND.play();
  fill(255);
  textSize(40);
  text("Win", 200, 200);
  print(speed);
}

 }
  

  function isInsideRect(x, y, rectx, recty, rectw, recth) {

  return x > rectx && x < rectx+rectw && y >recty && y <recty+recth;    

  }