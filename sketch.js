
let gamblerSym, scholarSym, heroSym;

var canvas;

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
      canvas.mouseClicked(restart);
      break;
    case 'oalnbbinTRYAGAIN':
      oalnbbinTRYAGAIN();
      restartFooter();
      canvas.mouseClicked(restart);
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

    case 'oalnbbin':
      oalnbbin();
      statsFooter();
      break;
    case 'oalnbbinALEX':
      oalnbbinALEX();
      nContinueFooter();
      break;

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

    case 'oalnbbiy':
      oalnbbiy();
      nContinueFooter();
      break;
    case 'oalnbbiy-':
      oalnbbiyMINUS();
      statsFooter();
      break;
    case 'oalnbbiy-a':
      oalnbbiyMINUSa();
      nContinueFooter();
      break;
    case 'oalnbbiy-b':
      oalnbbiyMINUSb();
      nContinueFooter();
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

    case 'mabb':
      mabb();
      nContinueFooter();
      break;

    case 'mabaa':
      mabaa();
      nContinueFooter();
      break;
    case 'mabab':
      mabab();
      nContinueFooter();
      break;

    case 'mbcy':
      mbcy();
      nContinueFooter();
      break;
    case 'mbcn':
      mbcn();
      nContinueFooter();
      break;
    case 'mSIGN':
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
