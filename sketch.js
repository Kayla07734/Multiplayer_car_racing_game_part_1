var canvas;
var backgroundImage;
var bgImg;
var database;

// mine >:)
var myForm,Mygame,myPlayer

function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //database = firebase.database();
  Mygame = new Game()
  Mygame.start()
}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
