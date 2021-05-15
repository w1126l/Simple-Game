
let state = 'title';

let butterflies = [];
let buttX, buttY, buttSpeedX, buttSpeedY;
let buttSize = 80;

let titleInt = 200;
let titleTime = 0;

let butterflyBlue, gamblerSym, gamblerSymBack, scholarSym, heroSym;

let oScene;

var canvas;

function preload() {

  butterflyBlue = loadImage('media/first-page/butt-blue.png');

  gamblerSym = loadImage('media/choose-stats-icons/gambler-symbol.png');
  gamblerSymBack = loadImage('media/choose-stats-icons/gambler-symbol-1.png')
  scholarSym = loadImage('media/choose-stats-icons/scholar-symbol.png');
  heroSym = loadImage('media/choose-stats-icons/hero-symbol.png');

  oScene = loadImage('media/story-scene/o.png');

}

function setup() {

  smooth();

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
      oaly();
      statsFooter();
      break;

    case 'oalybcy': //three lines, nContinueFooter
      oalybcy();
      nContinueFooter();
      break;
    case 'oalybcn': //title, box, one line description, 2 options
      oalybcn();
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
      oalnbbin();
      statsFooter();
      break;
    case 'oalnbbinALEX': //four lines, nContinueFooter
      oalnbbinALEX();
      nContinueFooter();
      break;

    case 'oaln': //title, box, one line description, 2 options
      oaln();
      statsFooter();
      break;

    case 'oalna': //title, box, two line description, 2 options
      oalna();
      statsFooter();
      break;
    case 'oalnb': //title, box, two line description, 2 options
      oalnb();
      statsFooter();
      break;

    case 'oalnbbiy': //two line, nContinueFooter
      oalnbbiy();
      nContinueFooter();
      break;
    case 'oalnbbiy-': //title, box, one line description, 2 options
      oalnbbiyMINUS();
      statsFooter();
      break;
    case 'oalnbbiy-a': //REVERSE, box, four line description, nContinueFooter
      oalnbbiyMINUSa();
      nContinueFooter();
      break;
    case 'oalnbbiy-b': //REVERSE, box, four line description, nContinueFooter
      oalnbbiyMINUSb();
      nContinueFooter();
      break;

    //merchant
    case 'm': //title, box, two line description, 2 options
      m();
      statsFooter();
      break;

    case 'ma': //title, box, two line description, 2 options
      ma();
      statsFooter();
      break;
    case 'mab': //title, box, two line description, 2 options
      mab();
      statsFooter();
      break;
    case 'maba': //title, box, two line description, 2 options
      maba();
      statsFooter();
      break;

    case 'mabb': //REVERSE, box, three line description, nContinueFooter
      mabb();
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
      mSIGN();
      break;
  }
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
