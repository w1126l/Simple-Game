
var canvas;

let state = 'title';

let luck, intelligence, courage;

function setup() {

  canvas = createCanvas(1000, 1000);
  canvas.parent('sketch-holder');

}


function draw() {

  background(220);

  if (state === 'title') {
    title();
    canvas.mouseClicked(titleMouseClicked);
  } else if (state === 'choose-stats') {
    stats();
    statsClicked();
  }

}

function title() {

  background(190, 215, 255);

  textAlign(CENTER);
  textFont("monospace", 50);
  text('Game Start!', 500, 500);

}

function titleMouseClicked() {

  state = 'choose-stats';

}

function stats() {

  background(220, 115, 200);

  textAlign(LEFT);
  textStyle(BOLD);
  textFont("monospace", 50);
  text('Choose your player:', 100, 100);

  text('-----------------------------', 100, 150);

  textStyle(BOLD);
  textFont("monospace", 30);
  text('Gambler', 100, 250);
  textStyle(NORMAL);
  textSize(20);
  text('Luck: 8', 100, 300);
  text('Intelligence: 2', 100, 330);
  text('Courage: 5', 100, 360);

  textStyle(BOLD);
  textFont("monospace", 30);
  text('Scholar', 100, 475);
  textStyle(NORMAL);
  textSize(20);
  text('Luck: 2', 100, 525);
  text('Intelligence: 10', 100, 555);
  text('Courage: 3', 100, 585);

  textStyle(BOLD);
  textFont("monospace", 30);
  text('Hero', 100, 700);
  textStyle(NORMAL);
  textSize(20);
  text('Luck: 4', 100, 750);
  text('Intelligence: 2', 100, 780);
  text('Courage: 9', 100, 810);

  textStyle(BOLD);
  textFont("monospace", 50);
  text('-----------------------------', 100, 910);

}

function statsClicked() {

  noStroke();

  rectMode(CORNER);
  fill('black');
  rect(350, 240, 120, 120);
  rect(350, 465, 120, 120);
  rect(350, 690, 120, 120);



}
