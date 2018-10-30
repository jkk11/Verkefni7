
const GAMES_TO_PLAY = 10;

function start() {
  alert("Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og " + 
  "mögulegt er");
  play();
}

function play() {

  let correct = 0;

  let duration = Date.now();

  let quit = false;

  for (let i = 0; i < GAMES_TO_PLAY; i += 1) {
    const answer = ask();

    if (answer === null) {
      quit = true;
      break;
    }

    if (answer) {
      correct += 1;
    }
  }

  if (!quit) {
    duration = (Date.now() - duration) / 1000;

    const X = correct;
    const Y = duration.toFixed(2);
    const Z = (correct / duration).toFixed(2);

    alert(`Þú svaraðir ${X} af ${GAMES_TO_PLAY} dæmum rétt á ${Y} sekúndum\n` +
    `Meðalrétt svör á sekúndu eru ${Z}`);
  }

  if (confirm("Spila annan leik?")) {
    play();
  } else {

  }
}

function question() {
  const choice = 4 * Math.random();

  let a = null;
  let b = null;
  let op = null;
  let c = null;

  if (choice < 1) {
    a = randomNumber(1, 100);
    b = randomNumber(1, 100);
    op = "+";
    c = a + b;
  } else if (choice < 2) {
    a = randomNumber(1, 100);
    b = randomNumber(1, 100);
    op = "-";
    c = a - b;
  } else if (choice < 3) {
    a = randomNumber(1, 10);
    b = randomNumber(1, 10);
    op = "*";
    c = a * b;
  } else if (choice < 4) {
    b = randomNumber(2, 10);
    a = b * randomNumber(2, 10);
    op = "/";
    c = a / b;
  }

  return [a, op, b, c];
}


function ask() {
  let [a, op, b, c] = question();

  const answer = window.prompt(`Hvað er ${a} ${op} ${b}?`);

  if (answer === null) {
    return null;
  } else {
    return parseInt(answer, 10) === c;
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

start();
