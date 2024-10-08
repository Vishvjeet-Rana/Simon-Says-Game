let h4 = document.querySelector("h4");
let level = 0; // it will track our level
let start = false;
let gameSeq = [];
let userSeq = [];
let allButtons = document.querySelectorAll(".buttons");

// these are class's name in html given to the buttons
let btnArray = ["red", "teal", "blue", "orange"];

//starting game on keypressing
document.addEventListener("keypress", () => {
  if (start === false) {
    h4.innerText = "Game start";
    h4.style.fontSize = "2rem";
    h4.style.color = "green";

    start = true;
    setTimeout(() => {
      levelUp();
    }, 500);
  }
});

const levelUp = () => {
  level++;
  h4.innerText = `Level ${level}`;
  h4.style = "none";

  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = btnArray[randomNum];
  let btn = document.querySelector(`.${randomColor}`);

  // for debugging
  if (!btn) {
    console.error(`Button with class ${randomColor} not found`);
    return;
  }

  gameFlash(btn);
};

// flash by logic of game
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 200);
}

// this triggers when user manually cliks any button
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 150);
}

function btnPress() {
  let btn = this;
  userFlash(btn);
}

// flash on click on each (all 4) button
for (let btn of allButtons) {
  btn.addEventListener("click", btnPress);
}
