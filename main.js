const ORDER = ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E"];
const SHARP_ORDER = ["C", "D", "F", "G", "A", "C", "D"];

let KEY_WIDTH = 60;
let TOTAL_KEY_WIDTH = 62;

function createPiano(w) {
  let piano_body = document.createElement("div");
  piano_body.setAttribute("class", "piano_body");
  document.body.appendChild(piano_body);
  for(let i = 0; i < w; i++) {
    createKey(piano_body, i);
  }

  let prev_set = -1;
  let total_xmod = 0;
  for(let i = 0; i < SHARP_ORDER.length;) {
    for(let j = 0; j < ((prev_set < 0) ? 2 : 3); j++) {
      if(j == 0 && i > 0) {
        total_xmod+=TOTAL_KEY_WIDTH;
      }
      createBlackKey(piano_body, i, total_xmod);
      i++;
    }
    prev_set = ((prev_set < 0) ? 1 : -1);
  }
}

function createKey(piano, n) {
  let key = document.createElement("div");
  key.setAttribute("class", "piano_key");
  key.id = ORDER[n].toLowerCase();
  key.onclick = () => {
    let audio = new Audio('./samples/' + ORDER[n].toLowerCase() + "3" + ".mp3");
    audio.volume = 1;
    audio.play();
  }
  piano.appendChild(key);
}

function createBlackKey(piano, n, xmod=0) {
  let key = document.createElement("div");
  key.setAttribute("class", "black_piano_key");
  key.id = SHARP_ORDER[n].toLowerCase();
  key.setAttribute('style', "left: " + ((n * TOTAL_KEY_WIDTH) + KEY_WIDTH + xmod) + "px; top: 8px;");
  key.onclick = () => {
    let audio = new Audio('./samples/' + SHARP_ORDER[n].toLowerCase() + "-3" + ".mp3");
    audio.volume = 1;
    audio.play();
  }
  piano.appendChild(key);
}

createPiano(10);