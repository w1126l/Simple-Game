
let state = 'title';

let butterflies = [];
let buttX, buttY, buttSpeedX, buttSpeedY;
let buttSize = 80;

let titleInt = 200;
let titleTime = 0;

let butterflyBlue, gamblerSym, gamblerSymBack, scholarSym, heroSym;

let oScene, oalyScene, oalybcnScene, oalybbinScene, oalnScene, oalnbbiyMINUSScene, signScene, merchantScene, maScene, mabScene, mabaScene;

var canvas;

let song;

function preload() {

  song = createAudio('media/song.mp3');

  butterflyBlue = loadImage('media/first-page/butt-blue.png');

  gamblerSym = loadImage('media/choose-stats-icons/gambler-symbol.png');
  gamblerSymBack = loadImage('media/choose-stats-icons/gambler-symbol-1.png')
  scholarSym = loadImage('media/choose-stats-icons/scholar-symbol.png');
  heroSym = loadImage('media/choose-stats-icons/hero-symbol.png');

  oScene = loadImage('media/story-scene/o.png');
  oalyScene = loadImage('media/story-scene/oaly.png');

  oalybcnScene = loadImage('media/story-scene/oalybcn.png');
  //ALSO OALNA

  oalnbScene = loadImage('media/story-scene/oalnb.png');
  //ALSO OALNB

  oalnScene = loadImage('media/story-scene/oaln.png');

  oalnbbiyMINUSScene = loadImage('media/story-scene/oalnbbiyMINUS.png');

  signScene = loadImage('media/story-scene/sign.png');

  merchantScene = loadImage('media/story-scene/merchant.png');

  maScene = loadImage('media/story-scene/ma.png');

  mabScene = loadImage('media/story-scene/mab.png');

  mabaScene = loadImage('media/story-scene/maba.png');

}

function setup() {

  smooth();
  loop();

  frameRate(60);
  noCursor();
  angleMode(DEGREES);
  imageMode(CENTER);

  buttX = width/2;
  buttY = height/2;
  buttSpeedX = int(random(-5, 5));
  buttSpeedY = int(random(-5, 5));

  butterflies.push(new Butterfly(buttX, buttY, buttSpeedX, buttSpeedY, buttSize));

  canvas = createCanvas(windowHeight * 0.8, windowHeight * 0.8);
  canvas.parent('sketch-holder');

}

function draw() {

  imageMode(CORNER);

  background(0);

  console.log('State: ' + state);

  switch (state) {

    //beginning of game
    case 'title':
      title();
      titleButterfly();
      canvas.mouseClicked(titleMouseClicked);
      break;
    case 'credits':
      credits();
      restartFooter();
      canvas.mouseClicked(restart);
      break;
    case 'intro':
      intro();
      canvas.mouseClicked(introMouseClicked);
      break;
    case 'choose-stats':
      stats();
      break;

    //current endings and deaths
    case 'dehydration-death': //one line, restartFooter
      dehydrationDeath();
      restartFooter();
      canvas.mouseClicked(restart);
      break;
    case 'merchant-gun-death': //one line, restartFooter
      merchantGunDeath();
      restartFooter();
      canvas.mouseClicked(restart);
      break;
    case 'unfinished': //three lines, restartFooter
      unfinished();
      restartFooter();
      canvas.mouseClicked(restart);
      break;
    case 'to-be-cont': //one line, restartFooter
      tbc();
      restartFooter();
      canvas.mouseClicked(restart);
      break;
    case 'oalnbbinTRYAGAIN': //two line, restartFooter
      oalnbbinTRYAGAIN();
      restartFooter();
      canvas.mouseClicked(restart);
      break;

    //beginning of the story
    case 'opening': //title, box, 2 options
      opening(); //IMAGE DONE
      statsFooter();
      break;

    case 'oaly': //title, box, 2 options
      oaly(); //IMAGE DONE
      statsFooter();
      break;

    case 'oalybcy': //three lines, nContinueFooter
      oalybcy();
      nContinueFooter();
      break;
    case 'oalybcn': //title, box, one line description, 2 options
      oalybcn(); //IMAGE DONE
      statsFooter();
      break;

    //death by crying
    case 'oalybcnaCRY': //one line, nContinueFooter
      oalybcnaCRY();
      nContinueFooter();
      break;
    case 'oalybcnaCRYCRY': //one line, nContinueFooter
      oalybcnaCRYCRY();
      nContinueFooter();
      break;
    case 'oalybcnaCRYCRYCRY': //one line, nContinueFooter
      oalybcnaCRYCRYCRY();
      nContinueFooter();
      break;
    //end of death by crying sequence

    case 'oalnbbin': //title, box, three line description, 4 options
      oalnbbin(); //TEXT DOME
      statsFooter();
      break;
    case 'oalnbbinALEX': //four lines, nContinueFooter
      oalnbbinALEX();
      nContinueFooter();
      break;

    case 'oaln': //title, box, one line description, 2 options
      oaln(); //IMAGE DONE
      statsFooter();
      break;

    case 'oalna': //title, box, two line description, 2 options
      oalna(); //USING OALNBCN
      statsFooter();
      break;
    case 'oalnb': //title, box, two line description, 2 options
      oalnb(); //USING OALNBBIN
      statsFooter();
      break;

    case 'oalnbbiy': //two line, nContinueFooter
      oalnbbiy();
      nContinueFooter();
      break;
    case 'oalnbbiy-': //title, box, one line description, 2 options
      oalnbbiyMINUS(); //IMAGE DONE
      statsFooter();
      break;
    case 'oalnbbiy-a': //REVERSE, box, four line description, nContinueFooter
      oalnbbiyMINUSa(); //IMG SIGN
      nContinueFooter();
      break;
    case 'oalnbbiy-b': //REVERSE, box, four line description, nContinueFooter
      oalnbbiyMINUSb(); //IMG SIGN
      nContinueFooter();
      break;

    //merchant
    case 'merchant': //title, box, two line description, 2 options
      merchant(); //IMG DONE
      statsFooter();
      break;

    case 'ma': //title, box, two line description, 2 options
      ma(); //IMG DONE
      statsFooter();
      break;
    case 'mab': //title, box, two line description, 2 options
      mab(); //IMG DONE
      statsFooter();
      break;
    case 'maba': //title, box, two line description, 2 options
      maba(); //IMG DONE
      statsFooter();
      break;

    case 'mabb': //REVERSE, box, three line description, nContinueFooter
      mabb(); //IMG SIGN
      nContinueFooter();
      break;

    case 'mabaa': //four lines, nContinueFooter
      mabaa();
      nContinueFooter();
      break;
    case 'mabab': //six lines, nContinueFooter
      mabab();
      nContinueFooter();
      break;

    case 'mbcy': //two line, nContinueFooter
      mbcy();
      nContinueFooter();
      break;
    case 'mbcn': //three line, nContinueFooter
      mbcn();
      nContinueFooter();
      break;
    case 'mSIGN': //title, box, two line description, 2 options
      mSIGN(); //IMG SIGN
      break;
    default:
      state = 'title';
  }
}

function keyReleased() {

  //credits
  if (state === 'title') {
    if (key === 'c') {
      state = 'credits';
    }
  }

  //choosing stats of player
  else if (state === 'choose-stats') {
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
      if (player1.luck > 4) {
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
      state = 'merchant';
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
      state = 'merchant';
    }
  }

  else if (state === 'oalnb') {
    if (key === 'a') {
      state = 'merchant';
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

  // else if (state === 'merchant') {
  //   if (key === 'a') {
  //     state = 'ma';
  //   } else if (key === 'b') {
  //     if (player1.cour > 5) {
  //       state = 'mbcy';
  //     } else {
  //       state = 'mbcn';
  //     }
  //   }
  // }

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
  else if (state === 'mabb') {
    if (key === 'n') {
      state = 'to-be-cont';
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

  else if (state === 'mbcy') {
    if (key === 'n') {
      state = 'mSIGN';
    }
  }
  else if (state === 'mbcn') {
    if (key === 'n') {
      state = 'merchant-gun-death';
    }
  }

  else if (state === 'mSIGN') {
    if (key === 'a' || 'b') {
      state = 'to-be-cont';
    }
  }
}

function keyPressed() {
  if (state === 'merchant') {
    console.log('State: ' + state);
    if (key === 'a') {
      state = 'ma';
      console.log('a pressed');
    } else if (key === 'b' && player1.cour > 4) {
      state = 'mbcy';
      console.log('b pressed');
    } else if (key === 'b' && player1.cour <= 4) {
      state = 'mbcn';
      console.log('b pressed');
    }
  }
}
