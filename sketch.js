
let gamblerSym, scholarSym, heroSym;

var canvas;

let state = 'title';

let luck, intelligence, courage;

function preload() {

  gamblerSym = loadImage('media/choose-stats-icons/gambler-symbol-1.png');
  scholarSym = loadImage('media/choose-stats-icons/scholar-symbol.png');
  heroSym = loadImage('media/choose-stats-icons/hero-symbol.png');

}

function setup() {

  canvas = createCanvas(windowHeight * 0.8, windowHeight * 0.8);
  canvas.parent('sketch-holder');

}

function draw() {

  background(0);

  switch (state) {

    //beginning of game
    case 'title':
      title();
      canvas.mouseClicked(titleMouseClicked);
      break;
    case 'intro':
      intro();
      canvas.mouseClicked(introMouseClicked);
      break;
    case 'choose-stats':
      stats();
      break;

    //beginning of the story
    case 'opening':
      opening();
      statsFooter();
      break;

    //current endings and deaths
    case 'dehydration-death':
      dehydrationDeath();
      restartFooter();
      canvas.mouseClicked(restart);
      break;
    case 'merchant-gun-death':
      merchantGunDeath();
      restartFooter();
      canvas.mouseClicked(restart);
      break;
    case 'unfinished':
      unfinished();
      restartFooter();
      canvas.mouseClicked(restart);
      break;
    case 'to-be-cont':
      tbc();
      restartFooter();
      break;

    case 'oaly':
      oaly();
      statsFooter();
      break;

    case 'oalybcy':
      oalybcy();
      nContinueFooter();
      break;
    case 'oalybcn':
      oalybcn();
      statsFooter();
      break;

    //death by crying
    case 'oalybcnaCRY':
      oalybcnaCRY();
      nContinueFooter();
      break;
    case 'oalybcnaCRYCRY':
      oalybcnaCRYCRY();
      nContinueFooter();
      break;
    case 'oalybcnaCRYCRYCRY':
      oalybcnaCRYCRYCRY();
      nContinueFooter();
      break;
    //end of death by crying sequence

    case 'oaln':
      oaln();
      statsFooter();
      break;

    case 'oalna':
      oalna();
      statsFooter();
      break;
    case 'oalnb':
      oalnb();
      statsFooter();
      break;

    //merchant
    case 'm':
      m();
      statsFooter();
      break;

    case 'ma':
      ma();
      statsFooter();
      break;
    case 'mab':
      mab();
      statsFooter();
      break;
    case 'maba':
      maba();
      statsFooter();
      break;

    case 'mabaa':
      mabaa();
      nContinueFooter();
      break;
    case 'mabab':
      mabab();
      nContinueFooter();
      break;
  }
}

//intro
function title() {

  background(0);

  textAlign(CENTER);
  textFont("monospace", width * 0.05);
  fill(255);
  text('Game Start!', width * 0.5, height * 0.5);

}

function titleMouseClicked() {
  if (state === 'title') {
    state = 'intro';
  }
}

function intro() {

  background(0);

  textAlign(LEFT);
  textStyle(BOLD);
  fill(255);
  textFont("monospace", width * 0.05);
  text('Introduction:', width * 0.1, height * 0.1);

  stroke(255);
  line(width * 0.1, height * 0.15, width * 0.9, height * 0.15);

  textStyle(NORMAL);
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

  /*
  textAlign(RIGHT);
  textStyle(BOLD);
  textFont("monospace", width * 0.015);
  fill(0);
  text(playerName, width * 0.9, height * 0.825);

  textStyle(ITALIC);
  text('[' + playerLuck + '] Luck', width * 0.9, height * 0.85);
  text('[' + playerInt + '] Intelligence', width * 0.9, height * 0.875);
  text('[' + playerCour + '] Courage', width * 0.9, height * 0.9);
  */

  textAlign(LEFT);
  textStyle(BOLDITALIC);
  textFont("monospace", width * 0.015);
  fill(0);
  text(playerName + ': ' + 'Luck = ' + '[' + playerLuck + '] | ' + 'Intelligence = ' + '[' + playerInt + '] | ' + 'Courage = ' + '[' + playerCour + ']', width * 0.1, height * 0.95);
  
}

//death/over screens
function dehydrationDeath() {

  background(0);

  textAlign(CENTER);
  textFont("monospace", width * 0.05);
  fill(255);
  text('You die from dehydration.', width * 0.5, height * 0.5);

}

function merchantGunDeath() {

  background(0);

  textAlign(CENTER);
  textFont("monospace", width * 0.05);
  fill(255);
  text('You die from bleeding out.', width * 0.5, height * 0.5);

}

function unfinished() {

  background(0);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('You realize that the story', width * 0.5, height * 0.45);
  text('has barely been written and', width * 0.5, height * 0.5);
  text('decide to restart.', width * 0.5, height * 0.55);

}

function tbc() {

  background(0);

  textAlign(CENTER);
  textFont("monospace", width * 0.05);
  fill(255);
  text('To Be Continued', width * 0.5, height * 0.5);

}

function restart() {

  state = 'title';

}

//footer as instructions
function restartFooter() {

  textAlign(CENTER);
  textFont("monospace", width * 0.02);
  fill(255);
  text('(Press anywhere to restart)', width * 0.5, height * 0.9);

}

function continueFooter() {

  textAlign(CENTER);
  textFont("monospace", width * 0.02);
  fill(255);
  text('(Press anywhere to continue)', width * 0.5, height * 0.9);

}

function nContinueFooter() {

  textAlign(CENTER);
  textFont("monospace", width * 0.02);
  fill(255);
  text('(Press N to continue)', width * 0.5, height * 0.9);

}

//story functs
function opening() {

  background(255);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You are falling out of the sky.', width * 0.5, height * 0.15);

  rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);

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

  background(255);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You fall into a bush in a forest.', width * 0.5, height * 0.15);

  rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);

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

  background(0);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('You get yourself together', width * 0.5, height * 0.45);
  text('and start walking', width * 0.5, height * 0.5);
  text('towards the sounds of water.', width * 0.5, height * 0.55);

}

function oalybcn() {

  background(255);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You cry some more.', width * 0.5, height * 0.15);

  rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);

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

  background(0);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('You cry more and more.', width * 0.5, height * 0.5);

}

function oalybcnaCRYCRY() {

  background(0);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('And more and more.', width * 0.5, height * 0.5);

}

function oalybcnaCRYCRYCRY() {

  background(0);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('And more and more and more.', width * 0.5, height * 0.5);

}

function oaln() {

  background(255);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You fall into a wooden outhouse on a swamp.', width * 0.5, height * 0.15);

  rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);

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

  background(255);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You feel disgusted with yourself.', width * 0.5, height * 0.15);

  rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textStyle(NORMAL);
  textFont("monospace", width * 0.022);
  text("You start crying.", width * 0.5, height * 0.725);
  text("You see smoke in the air. It might be a campfire.", width * 0.5, height * 0.775);

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

  background(255);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('A young girl in a raincoat comes', width * 0.5, height * 0.125);
  text('out of the forest and starts laughing at you.', width * 0.5, height * 0.175);

  rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text('A: You start yelling at her to go away.', width * 0.1, height * 0.825);
  text('-- She runs away and you continue on your journey.', width * 0.1, height * 0.85);
  text("B: You're happy to see another person.", width * 0.1, height * 0.875);
  text('-', width * 0.1, height * 0.9);

}

function m() {

  background(255);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You come across a merchant selling baked potatoes.', width * 0.5, height * 0.15);

  rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textStyle(NORMAL);
  textFont("monospace", width * 0.022);
  text("He hands you one. After you take your first bite, he asks for money.", width * 0.5, height * 0.75);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text('A: You give him your clothes, other than your underwear,', width * 0.1, height * 0.825);
  text('-- and continue eating the potato. You were too hungry', width * 0.1, height * 0.85);
  text('-- to worry about the weather.', width * 0.1, height * 0.875);
  text("B: You throw the potato at the merchant's face.", width * 0.1, height * 0.9);

}

function ma() {

  background(255);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('You find a path near the merchant and start walking.', width * 0.5, height * 0.15);

  rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textStyle(NORMAL);
  textFont("monospace", width * 0.022);
  text("As you're walking, you feel a bit thirsty.", width * 0.5, height * 0.725);
  text("A turtle runs up next to you and taps you on the shoulder.", width * 0.5, height * 0.775);

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

  background(255);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('The turtle gives you a map.', width * 0.5, height * 0.15);

  rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textStyle(NORMAL);
  textFont("monospace", width * 0.022);
  text("He seems to signal with his flippers to get on his back.", width * 0.5, height * 0.725);
  text("After your encounter with the merchant, you don't know if you should trust this turtle.", width * 0.5, height * 0.775);

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

  background(255);

  textAlign(CENTER);
  textStyle(BOLD);
  textFont("monospace", width * 0.04);
  fill(0);
  text('The map looks very simple.', width * 0.5, height * 0.15);

  rect(width * 0.1, width * 0.2, width * 0.8, height * 0.5);

  textStyle(NORMAL);
  textFont("monospace", width * 0.022);
  text('There are two circles with the titles "The Poppy Hill of Sunshine"', width * 0.5, height * 0.725);
  text('and "The Land of the Lost".', width * 0.5, height * 0.775);

  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("monospace", width * 0.02);
  fill(0);
  text('A: You tell the turtle you want to go to "The Poppy Hills of Sunshine".', width * 0.1, height * 0.825);
  text('B: You tell the turtle you want to go to "The Land of the Lost".', width * 0.1, height * 0.85);
  text('-', width * 0.1, height * 0.875);
  text("-", width * 0.1, height * 0.9);

}

function mabaa() {

  background(0);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('You get on the turtle.', width * 0.5, height * 0.425);
  text('You pass by a fork in the road with', width * 0.5, height * 0.525);
  text('a sign that has the two locations.', width * 0.5, height * 0.575);
  text('You continue heading left.', width * 0.5, height * 0.625);

}

function mabab() {

  background(0);

  textAlign(CENTER);
  textStyle(NORMAL);
  textFont("monospace", width * 0.05);
  fill(255);
  text('The turtle looks at you weirdly', width * 0.5, height * 0.425);
  text('and lets you ride him. You pass', width * 0.5, height * 0.475);
  text('by a fork in the road with a sign', width * 0.5, height * 0.525);
  text('that has the two locations. He throws', width * 0.5, height * 0.575);
  text('you off his back and runs', width * 0.5, height * 0.625);
  text('back to where he came from.', width * 0.5, height * 0.675);

}

function keyReleased() {

  //choosing stats of player
  if (state === 'choose-stats') {
    if (key === '1') {
      player1 = new Player('GAMBLER', 08, 02, 05);
      state = 'opening';
    } else if (key === '2') {
      player1 = new Player('SCHOLAR', 02, 10, 03);
      state = 'opening';
    } else if (key === '3') {
      player1 = new Player('HERO', 04, 02, 09);
      state = 'opening';
    }
  }

  //first "page" of the story
  else if (state === 'opening') {
    if (key === 'a') {
      if (player1.luck > 3) {
        state = 'oaly';
      } else {
        state = 'oaln';
      }
    } else if (key === 'b') {
      state = 'unfinished';
    }
  }

  else if (state === 'oaly') {
    if (key === 'a') {
      state = 'unfinished';
    } else if (key === 'b') {
      if (player1.cour > 8) {
        state = 'oalybcy';
      } else {
        state = 'oalybcn';
      }
    }
  }

  else if (state === 'oalybcy') {
    if (key === 'n') {
      state = 'unfinished';
    }
  }

  else if (state === 'oalybcn') {
    if (key === 'a') {
      state = 'oalybcnaCRY';
    } else if (key === 'b') {
      state = 'm';
    }
  }

  //dehydration death
  else if (state === 'oalybcnaCRY') {
    if (key === 'n') {
      state = 'oalybcnaCRYCRY';
    }
  }
  else if (state === 'oalybcnaCRYCRY') {
    if (key === 'n') {
      state = 'oalybcnaCRYCRYCRY';
    }
  }
  else if (state === 'oalybcnaCRYCRYCRY') {
    if (key === 'n') {
      state = 'dehydration-death';
    }
  }
  //end of dehydration death

  else if (state === 'oaln') {
    if (key === 'a') {
      state = 'oalna';
    } else if (key === 'b') {
      state = 'oalnb';
    }
  }

  else if (state === 'oalna') {
    if (key === 'a') {
      state = 'oalybcnaCRY'
    } else if (key === 'b') {
      state = 'm';
    }
  }

  else if (state === 'oalnb') {
    if (key === 'a') {
      state = 'm';
    } else if (key === 'b') {
      if (player1.int > 4) {
        state = 'oalnbbiy';
      } else {
        state = 'oalnbbin';
      }
    }
  }
  
  else if (state === 'oalnbbiy') {
    if (key === 'n') {
      state = 'oalnbbiy-';
    }
  }
  else if (state === 'oalnbbin') {
    if (key === 'a' || 'b' || 'c') {
      state = 'oalnbbinTRYAGAIN';
    } else if (key === 'd') {
      state = 'oalnbbinALEX';
    }
  }
  else if (state === 'oalnbbinALEX') {
    if (key === 'n') {
      state = 'oalnbbiy-';
    }
  }
  
  else if (state === 'oalnbbiy-') {
    if (key === 'a') {
      state = 'oalnbbiy-a';
    } else if (key === 'b') {
      state = 'oalnbbiy-b';
    }
  }
  else if (state === 'oalnbbiy-a' || 'oalnbbiy-b') {
    if (key === 'n') {
      state = 'to-be-cont';
    }
  }

  else if (state === 'm') {
    if (key === 'a') {
      state = 'ma';
    } else if (key === 'b') {
      if (player1.cour > 4) {
        state = 'mbcy';
      } else {
        state = 'mbcn';
      }
    }
  }

  else if (state === 'ma') {
    if (key === 'a') {
      state = 'mSIGN';
    } else if (key === 'b') {
      state = 'mab';
    }
  }

  else if (state === 'mab') {
    if (key === 'a') {
      state = 'maba';
    } else if (key === 'b') {
      state = 'mabb';
    }
  }

  else if (state === 'maba') {
    if (key === 'a') {
      state = 'mabaa';
    } else if (key === 'b') {
      state = 'mabab';
    }
  }

  else if (state === 'mabaa') {
    if (key === 'n') {
      state = 'to-be-cont';
    }
  }
  else if (state === 'mabab') {
    if (key === 'n') {
      state = 'to-be-cont';
    }
  }
}
