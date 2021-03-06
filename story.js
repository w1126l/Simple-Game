
//intro
function title() {

  background(20);

  textFont("monospace", width * 0.2);

  let txt = "RESTART";
  let txtH = 50;
  let txtW = textWidth(txt);
  let spacing = txtW / txt.length;

  for(let i = 0; i < txt.length; i++){
    let c = txt.charAt(i);

    let offsetX = random(-spacing / 20, spacing / 20);
    let offsetY = random(-spacing / 20, spacing / 20);

    let startX = (width - txtW) / 2 + spacing / 2;
    let y = height * 0.25; //  + textHeight / 2;
    text(c, startX + i * spacing + offsetX, y + offsetY);
  }

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.03);
  text('By: Winnie Liang', width * 0.5, height * 0.4);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.015);
  text("Press 'C' for Credits", width * 0.5, height * 0.45);
  text("WARNING: SOUND (There is music in the background)", width * 0.5, height * 0.5);

  fill(200);
  textStyle(BOLD);
  textFont("monospace", width * 0.025);
  text('CONTROLS', width * 0.5, height * 0.575);

  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  text("This game utilizes your keyboard a lot.", width * 0.5, height * 0.65);
  text("For option A, press the key 'A'. For option B, press the key 'B'.", width * 0.5, height * 0.7);
  text("For option C, press the key 'C'. For option D, press the key 'D'.", width * 0.5, height * 0.725);
  text("The text on the bottom of the screen will give you further instructions.", width * 0.5, height * 0.775);
  text("To continue some scenes, you must press the key 'N'.", width * 0.5, height * 0.825);
  text("To continue in other scenes, you must press the screen.", width * 0.5, height * 0.85);

  noFill();
  stroke(230);
  rect(width * 0.05, height * 0.6, width * 0.9, width * 0.3);

  noStroke();
  fill(255);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  text('Press anywhere to begin.', width * 0.5, height * 0.95);

}

function titleButterfly() {

  imageMode(CENTER);

  if (frameCount > titleTime) {
    butterflies.push(new Butterfly(buttX, buttY, buttSpeedX, buttSpeedY, buttSize));
    titleTime = frameCount + titleInt;
  }

  if(butterflies.length > 30) {
    butterflies.splice(1);
    butterflies[0].reset();
  }

  for (let i = 0; i < butterflies.length; i++) {
    butterflies[i].draw();
    butterflies[i].move();
    }
}

function titleMouseClicked() {
  if (state === 'title') {
    state = 'intro';
  }
  song.volume(0.1);
  song.play();
}

function intro() {

  background(20);

  textAlign(LEFT);
  textStyle(BOLD);
  fill(255);
  textFont("monospace", width * 0.05);
  text('Introduction:', width * 0.1, height * 0.1);

  stroke(255);
  line(width * 0.1, height * 0.15, width * 0.9, height * 0.15);

  textStyle(NORMAL);
  stroke(0);
  textFont("monospace", width * 0.03);
  text('You have just died.', width * 0.1, height * 0.25);

  text('When you go to the afterlife, you meet a', width * 0.1, height * 0.35);
  text('God who gives you two options. You can be', width * 0.1, height * 0.4);
  text('reincarnated in a different world or go to the', width * 0.1, height * 0.45);
  text('graveyard of souls. Perhaps due to your', width * 0.1, height * 0.5);
  text('unsatisfying past life, you decide to be', width * 0.1, height * 0.55);
  text('reincarnated. You have the choice of three', width * 0.1, height * 0.6);
  text('different paths with different stats and', width * 0.1, height * 0.65);
  text('characteristics. However, your story is still', width * 0.1, height * 0.7);
  text('your responisibility. There is no set path;', width * 0.1, height * 0.75);
  text('you decide your own destiny.', width * 0.1, height * 0.8);
  text('Press anywhere to begin.', width * 0.1, height * 0.9);

  //line(width * 0.1, height * 0.9, width * 0.9, height * 0.9);

}

function introMouseClicked() {
  if (state === 'intro') {
    state = 'choose-stats';
  }
}

//changes state back to title
function restart() {
  state = 'title';
}

//stats/player
function stats() {
  background(200);

  fill(0);

  noStroke();

  textAlign(LEFT);
  textStyle(BOLD);
  textFont("monospace", width * 0.05);
  text('Choose your player:', width * 0.1, height * 0.1);

  stroke(2);
  line(width * 0.1, height * 0.15, width * 0.9, height * 0.15);
  noStroke();

  textStyle(BOLD);
  textFont("monospace", width * 0.03);
  text('Gambler', width * 0.1, height * 0.25);
  textStyle(NORMAL);
  textSize(width * 0.02);
  text('Luck: 8', width * 0.1, height * 0.3);
  text('Intelligence: 2', width * 0.1, height * 0.33);
  text('Courage: 5', width * 0.1, height * 0.36);

  image(gamblerSym, width * 0.42, height * 0.28, width * 0.08, height * 0.08);
  image(gamblerSym, width * 0.52, height * 0.28, width * 0.08, height * 0.08);
  image(gamblerSym, width * 0.62, height * 0.28, width * 0.08, height * 0.08);
  image(gamblerSym, width * 0.72, height * 0.28, width * 0.08, height * 0.08);
  image(gamblerSym, width * 0.82, height * 0.28, width * 0.08, height * 0.08);

  textStyle(BOLD);
  textFont("monospace", width * 0.03);
  text('Scholar', width * 0.1, height * 0.475);
  textStyle(NORMAL);
  textSize(width * 0.02);
  text('Luck: 2', width * 0.1, height * 0.525);
  text('Intelligence: 10', width * 0.1, height * 0.555);
  text('Courage: 3', width * 0.1, height * 0.585);

  image(scholarSym, width * 0.42, height * 0.505, width * 0.08, height * 0.08);
  image(scholarSym, width * 0.52, height * 0.505, width * 0.08, height * 0.08);
  image(scholarSym, width * 0.62, height * 0.505, width * 0.08, height * 0.08);
  image(scholarSym, width * 0.72, height * 0.505, width * 0.08, height * 0.08);
  image(scholarSym, width * 0.82, height * 0.505, width * 0.08, height * 0.08);

  textStyle(BOLD);
  textFont("monospace", width * 0.03);
  text('Hero', width * 0.1, height * 0.7);
  textStyle(NORMAL);
  textSize(width * 0.02);
  text('Luck: 4', width * 0.1, height * 0.75);
  text('Intelligence: 2', width * 0.1, height * 0.78);
  text('Courage: 9', width * 0.1, height * 0.81);

  image(heroSym, width * 0.42, height * 0.73, width * 0.08, height * 0.08);
  image(heroSym, width * 0.52, height * 0.73, width * 0.08, height * 0.08);
  image(heroSym, width * 0.62, height * 0.73, width * 0.08, height * 0.08);
  image(heroSym, width * 0.72, height * 0.73, width * 0.08, height * 0.08);
  image(heroSym, width * 0.82, height * 0.73, width * 0.08, height * 0.08);

  textAlign(RIGHT);
  textStyle(ITALIC);
  textFont("monospace", width * 0.025);
  text('[Press "1" to continue as a Gambler]', width * 0.9, height * 0.25);
  text('[Press "2" to continue as a Scholar]', width * 0.9, height * 0.475);
  text('[Press "3" to continue as a Hero]', width * 0.9, height * 0.7);

  stroke(2);
  line(width * 0.1, height * 0.9, width * 0.9, height * 0.9);
  noStroke();
}

function statsFooter() {
  let playerName = player1.name;

  let playerLuck = player1.luck;
  let playerInt = player1.int;
  let playerCour = player1.cour;

  textAlign(LEFT);
  textStyle(BOLDITALIC);
  textFont("monospace", width * 0.015);
  fill(0);
  text(playerName + ': ' + 'Luck = ' + '[' + playerLuck + '] | ' + 'Intelligence = ' + '[' + playerInt + '] | ' + 'Courage = ' + '[' + playerCour + ']', width * 0.1, height * 0.95);
}

//death/over screens
function dehydrationDeath() {
  background(20);

  textAlign(CENTER);
  textFont("monospace", width * 0.05);
  fill(255, 0, 0);
  text('You die from dehydration.', width * 0.5, height * 0.5);
}

function merchantGunDeath() {
  background(20);

  textAlign(CENTER);
  textFont("monospace", width * 0.05);
  fill(255, 0, 0);
  text('You die from bleeding out.', width * 0.5, height * 0.5);
}

function unfinished() {
  background(20);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('You realize that the story has', width * 0.5, height * 0.4);
  text('barely been written and', width * 0.5, height * 0.5);
  text('decide to restart.', width * 0.5, height * 0.6);
}

function tbc() {
  background(20);

  textAlign(CENTER);
  textFont("monospace", width * 0.05);
  fill(255);
  text('To Be Continued', width * 0.5, height * 0.5);
}

function oalnbbinTRYAGAIN() {
  background(20);

  textAlign(CENTER);
  textFont("monospace", width * 0.05);
  fill(255);
  text('The girl sends you back', width * 0.5, height * 0.475);
  text('to the past.', width * 0.5, height * 0.575);
}

function restart() {
  state = 'title';
}

//footer as instructions
function restartFooter() {
  textAlign(CENTER);
  textFont("monospace", width * 0.02);
  fill(255);
  text('(Press anywhere to restart)', width * 0.5, height * 0.95);
} //footer

function continueFooter() {
  textAlign(CENTER);
  textFont("monospace", width * 0.02);
  fill(255);
  text('(Press anywhere to continue)', width * 0.5, height * 0.9);
} //footer

function nContinueFooter() {
  textAlign(CENTER);
  textFont("monospace", width * 0.02);
  fill(255);
  text('(Press N to continue)', width * 0.5, height * 0.95);
} //footer

//story functions
function opening() {
  background(220);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You are falling out of the sky.', width * 0.5, height * 0.15);

  //rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);
  image(oScene, width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text('A: You close your eyes and hope for the best.', width * 0.1, height * 0.825);
  text('B: You look around.', width * 0.1, height * 0.85);
  text('-', width * 0.1, height * 0.875);
  text('-', width * 0.1, height * 0.9);
}

function oaly() {
  background(220);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You fall into a bush in a forest.', width * 0.5, height * 0.15);

  //rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);
  image(oalyScene, width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text('A: You start wondering around.', width * 0.1, height * 0.825);
  text('B: You decide to sit down and cry.', width * 0.1, height * 0.85);
  text('-', width * 0.1, height * 0.875);
  text('-', width * 0.1, height * 0.9);
}

function oalybcy() {
  background(20);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('You get yourself together', width * 0.5, height * 0.4);
  text('and start walking', width * 0.5, height * 0.5);
  text('towards the sounds of water.', width * 0.5, height * 0.6);
}

function oalybcn() {
  background(220);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You cry some more.', width * 0.5, height * 0.15);

  //rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);
  image(oalybcnScene, width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textStyle(NORMAL);
  textFont("monospace", width * 0.022);
  text('You see smoke in the air. It might be a campfire.', width * 0.5, height * 0.75);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text('A: You continue crying.', width * 0.1, height * 0.825);
  text('B: You walk towards the smoke.', width * 0.1, height * 0.85);
  text('-', width * 0.1, height * 0.875);
  text('-', width * 0.1, height * 0.9);
}

function oalybcnaCRY() {
  background(20);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('You cry more and more.', width * 0.5, height * 0.5);
}

function oalybcnaCRYCRY() {
  background(20);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('And more and more.', width * 0.5, height * 0.5);
}

function oalybcnaCRYCRYCRY() {
  background(20);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('And more and more and more.', width * 0.5, height * 0.5);
}

function oalnbbin() {
  background(220);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text("The girl says she doesn't want to help.", width * 0.5, height * 0.15);

  rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);
  oalnbbinTEXT();

  fill(0);
  textStyle(NORMAL);
  textFont("monospace", width * 0.018);
  text("However, she'll give you some money because she feels bad for you. You take out your", width * 0.5, height * 0.73);
  text('hands and say "Thank you." The girl giggles and says "You get the money if you', width * 0.5, height * 0.755);
  text('can answer my question." You accept. The little girl asks "What is your name?"', width * 0.5, height * 0.780);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text("A: I don't know.", width * 0.1, height * 0.825);
  text("B: I don't want to tell you.", width * 0.1, height * 0.85);
  text("C: I don't remember.", width * 0.1, height * 0.875);
  text('D: Alex ... ?', width * 0.1, height * 0.9);
}

function oalnbbinTEXT() {
  textFont("monospace", width * 0.07);

  fill(225);
  let txt = '"What is your name?"';
  let txtH = 10;
  let txtW = textWidth(txt);
  let spacing = txtW / txt.length;

  for(let i = 0; i < txt.length; i++){
    let c = txt.charAt(i);

    let offsetX = random(-spacing / 10, spacing / 10);
    let offsetY = random(-spacing / 10, spacing / 10);

    let startX = (width - txtW) / 2 + spacing / 2;
    let y = height * 0.45; //  + textHeight / 2;
    text(c, startX + i * spacing + offsetX, y + offsetY);
  }
}

function oalnbbinALEX() {
  background(20);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('The girl tells you to follow her.', width * 0.5, height * 0.35);
  text('You are a bit scared, but you ', width * 0.5, height * 0.45);
  text("decide it's better than being", width * 0.5, height * 0.55);
  text("covered in feces and dirt.", width * 0.5, height * 0.65);
}

function oaln() {
  background(220);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You fall into a swamp.', width * 0.5, height * 0.15);

  //rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);
  image(oalnScene, width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textStyle(NORMAL);
  textFont("monospace", width * 0.022);
  text("You're covered in filth.", width * 0.5, height * 0.75);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text('A: You start crying.', width * 0.1, height * 0.825);
  text('B: You run outside and rub yourself against a tree.', width * 0.1, height * 0.85);
  text('-', width * 0.1, height * 0.875);
  text('-', width * 0.1, height * 0.9);
}

function oalna() {
  background(220);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You feel disgusted with yourself.', width * 0.5, height * 0.15);

  //rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);
  image(oalybcnScene, width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textStyle(NORMAL);
  textFont("monospace", width * 0.022);
  text("You start crying.", width * 0.5, height * 0.735);
  text("You see smoke in the air. It might be a campfire.", width * 0.5, height * 0.77);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text('A: You continue crying.', width * 0.1, height * 0.825);
  text('B: You walk towards the smoke.', width * 0.1, height * 0.85);
  text('-', width * 0.1, height * 0.875);
  text('-', width * 0.1, height * 0.9);
}

function oalnb() {
  background(220);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  // text('A young girl in a raincoat comes', width * 0.5, height * 0.125);
  // text('out of the forest and starts laughing at you.', width * 0.5, height * 0.175);
  text('You see a young girl.', width * 0.5, height * 0.15);

  //rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);
  image(oalnbScene, width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textStyle(NORMAL);
  textFont("monospace", width * 0.022);
  text("She's wearing a raincoat and holding an umbrella. She comes out of", width * 0.5, height * 0.735);
  text("the forest and starts laughing at you.", width * 0.5, height * 0.77);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text('A: You start yelling at her to go away. She runs away and you continue on', width * 0.1, height * 0.825);
  text('-- your journey.', width * 0.1, height * 0.85);
  text("B: You're happy to see another person.", width * 0.1, height * 0.875);
  text('-', width * 0.1, height * 0.9);
}

function oalnbbiy() {
  // background(20);
  //
  // textAlign(CENTER);
  // textStyle(NORMAL);
  // textFont("monospace", width * 0.05);
  // fill(255);
  // text('The girl tells you to go with her.', width * 0.5, height * 0.5);

  background(20);

  textAlign(CENTER);
  textFont("monospace", width * 0.05);
  fill(255);
  text('The girl tells you to', width * 0.5, height * 0.475);
  text('go with her.', width * 0.5, height * 0.575);
}

function oalnbbiyMINUS() {
  background(220);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You are scared.', width * 0.5, height * 0.15);

  //rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);
  image(oalnbbiyMINUSScene, width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textStyle(NORMAL);
  textFont("monospace", width * 0.022);
  text('But, you continue to hold her hand as she takes you through the forest.', width * 0.5, height * 0.75);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text('A: You block off every negative thought and let her guide you.', width * 0.1, height * 0.825);
  text("B: You tell her you're scared and that you're not from this world.", width * 0.1, height * 0.85);
  text('-', width * 0.1, height * 0.875);
  text('-', width * 0.1, height * 0.9);
}

function oalnbbiyMINUSa() {
  background(20);

  fill(255);
  //rect(width * 0.1, width * 0.1, width * 0.8, height * 0.5);
  image(signScene, width * 0.1, width * 0.1, width * 0.8, height * 0.5);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.03);
  fill(255);
  text('You pass by a fork in the road with a sign that has', width * 0.5, height * 0.675);
  text('two locations called "The Land of the Lost"', width * 0.5, height * 0.725);
  text('and "The Poppy Hill of Sunshine." The girl leads you', width * 0.5, height * 0.775);
  text('towards the left, "The Land of the Lost."', width * 0.5, height * 0.825);
}

function oalnbbiyMINUSb() {
  background(20);

  fill(255);
  //rect(width * 0.1, width * 0.1, width * 0.8, height * 0.5);
  image(signScene, width * 0.1, width * 0.1, width * 0.8, height * 0.5);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.03);
  fill(255);
  text('You pass by a fork in the road with a sign that has', width * 0.5, height * 0.675);
  text('two locations called "The Land of the Lost"', width * 0.5, height * 0.725);
  text('and "The Poppy Hill of Sunshine." The girl leads you', width * 0.5, height * 0.775);
  text('towards the right, "The Poppy Hill of Sunshine."', width * 0.5, height * 0.825);
}

function merchant() {
  background(220);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You come across a merchant.', width * 0.5, height * 0.15);

  //rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);
  image(merchantScene, width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  // textStyle(NORMAL);
  // textFont("monospace", width * 0.022);
  // text("He is selling baked potatoes. He hands you one. After you take your first bite, he asks for money.", width * 0.5, height * 0.75);
  //
  // textAlign(LEFT);
  // textStyle(NORMAL);
  // textFont("monospace", width * 0.02);
  // fill(0);
  // text('A: You give him your clothes, other than your underwear,', width * 0.1, height * 0.825);
  // text('-- and continue eating the potato. You were too hungry', width * 0.1, height * 0.85);
  // text('-- to worry about the weather.', width * 0.1, height * 0.875);
  // text("B: You throw the potato at the merchant's face.", width * 0.1, height * 0.9);

  textStyle(NORMAL);
  textFont("monospace", width * 0.022);
  text("He is selling baked potatoes. He hands you one. After you take", width * 0.5, height * 0.735);
  text("your first bite, he asks for money.", width * 0.5, height * 0.77);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text('A: You give him your clothes, other than your underwear, and continue eating', width * 0.1, height * 0.825);
  text('-- the potato. You were too hungry to worry about the weather.', width * 0.1, height * 0.85);
  text("B: You throw the potato at the merchant's face.", width * 0.1, height * 0.875);
  text('-', width * 0.1, height * 0.9);
}

function ma() {
  background(220);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You find a path near the merchant.', width * 0.5, height * 0.15);

  //rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);
  image(maScene, width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textStyle(NORMAL);
  textFont("monospace", width * 0.022);
  text("As you're walking, you feel a bit thirsty.", width * 0.5, height * 0.735);
  text("A turtle runs up next to you and taps you on the shoulder.", width * 0.5, height * 0.77);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text('A: You ignore him.', width * 0.1, height * 0.825);
  text('B: You ask him what he wants.', width * 0.1, height * 0.85);
  text('-', width * 0.1, height * 0.875);
  text("-", width * 0.1, height * 0.9);
}

function mab() {
  background(220);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('The turtle gives you a map.', width * 0.5, height * 0.15);

  //rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);
  image(mabScene, width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textStyle(NORMAL);
  textFont("monospace", width * 0.022);
  text("He seems to signal with his flippers to get on his back. After your ", width * 0.5, height * 0.735);
  text("encounter with the merchant, you don't know if you should trust this turtle.", width * 0.5, height * 0.77);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text('A: You look at the map first.', width * 0.1, height * 0.825);
  text('B: You hop onto the back of the turtle and look at the map.', width * 0.1, height * 0.85);
  text('-', width * 0.1, height * 0.875);
  text("-", width * 0.1, height * 0.9);
}

function maba() {
  background(220);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('The map looks very simple.', width * 0.5, height * 0.15);

  //rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);
  image(mabaScene, width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textStyle(NORMAL);
  textFont("monospace", width * 0.022);
  text('There are two places with the titles "The Poppy Hill of Sunshine"', width * 0.5, height * 0.735);
  text('and "The Land of the Lost".', width * 0.5, height * 0.77);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text('A: You tell the turtle you want to go to "The Poppy Hills of Sunshine".', width * 0.1, height * 0.825);
  text('B: You tell the turtle you want to go to "The Land of the Lost".', width * 0.1, height * 0.85);
  text('-', width * 0.1, height * 0.875);
  text("-", width * 0.1, height * 0.9);
}

function mabb() {
  background(20);

  fill(255);
  //rect(width * 0.1, width * 0.1, width * 0.8, height * 0.5);
  image(signScene, width * 0.1, width * 0.1, width * 0.8, height * 0.5);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.03);
  fill(255);
  text('The turtle takes off before you tell it where', width * 0.5, height * 0.7);
  text('you want to go. You pass by a fork in the road', width * 0.5, height * 0.75);
  text('with a sign that has the two locations.', width * 0.5, height * 0.8);
}

function mabaa() {
  // background(20);
  //
  // textAlign(CENTER);
  // textStyle(NORMAL);
  // textFont("monospace", width * 0.05);
  // fill(255);
  // text('You get on the turtle.', width * 0.5, height * 0.425);
  // text('You pass by a fork in the road with', width * 0.5, height * 0.525);
  // text('a sign that has the two locations.', width * 0.5, height * 0.575);
  // text('You continue heading left.', width * 0.5, height * 0.625);

  background(20);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('You get on the turtle. You pass', width * 0.5, height * 0.35);
  text('by a fork in the road with a', width * 0.5, height * 0.45);
  text("sign that has the two locations.", width * 0.5, height * 0.55);
  text("You continue heading left.", width * 0.5, height * 0.65);
}

function mabab() {
  background(20);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('The turtle looks at you weirdly', width * 0.5, height * 0.25);
  text('and lets you ride him. You pass', width * 0.5, height * 0.35);
  text('by a fork in the road with a sign', width * 0.5, height * 0.45);
  text('that has the two locations. He', width * 0.5, height * 0.55);
  text('throws you off his back and runs', width * 0.5, height * 0.65);
  text('back to where he came from.', width * 0.5, height * 0.75);
}

function mbcy() {
  background(20);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('The merchant spits in your face.', width * 0.5, height * 0.45);
  text("You continue on your way.", width * 0.5, height * 0.55);
}

function mbcn() {
  background(20);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('The merchant shoots you', width * 0.5, height * 0.425);
  text("multiple times in the", width * 0.5, height * 0.525);
  text("head and body.", width * 0.5, height * 0.625);
}

function mSIGN() {
  background(220);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You travel until you hit a fork in the road.', width * 0.5, height * 0.15);

  //rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);
  image(signScene, width * 0.2, width * 0.1, width * 0.8, height * 0.5);

  textStyle(NORMAL);
  textFont("monospace", width * 0.022);
  text("There is a sign pointing in two directions.", width * 0.5, height * 0.735);
  text("You have two paths to choose from.", width * 0.5, height * 0.77);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text('A: "The Poppy Hill of Sunshine"', width * 0.1, height * 0.825);
  text('B: "The Land of the Lost"', width * 0.1, height * 0.85);
  text('-', width * 0.1, height * 0.875);
  text('-', width * 0.1, height * 0.9);
}

function credits() {
  background(20);

  textAlign(CENTER);
  textFont("monospace", width * 0.02);
  fill(255);

  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  text("Credits", width * 0.5, height * 0.15);
  textFont("monospace", width * 0.02);
  text("\"I Don't See the Branches, I See the Leaves\"", width * 0.5, height * 0.3);
  text("by Chris Zabriskie", width * 0.5, height * 0.35);

  textStyle(NORMAL);
  text("is licensed under a Creative Commons Attribution 4.0 license.", width * 0.5, height * 0.425);
  text("https://creativecommons.org/licenses/by/4.0/", width * 0.5, height * 0.475);
  text("Source: http://chriszabriskie.com/dtv/", width * 0.5, height * 0.525);
  text("Artist: http://chriszabriskie.com/", width * 0.5, height * 0.575);
}
