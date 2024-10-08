let h4 = document.querySelector("h4");
let level = 0; // it will track our level
let start = false;
let gameSeq = [];
let userSeq = [];
let allButtons = document.querySelectorAll(".buttons");
let score = 0;

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
  gameSeq.push(randomColor);
  console.log(gameSeq);

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

  let userColor = btn.getAttribute("id");
  console.log("user color = ", userColor);

  userSeq.push(userColor);
  console.log(userSeq);

  checkBtn();
}

// flash on click on each (all 4) button
for (let btn of allButtons) {
  btn.addEventListener("click", btnPress);
}

// checking if user pressing the right button
function checkBtn() {
  console.log(`current level = ${level}`);

  let index = level - 1;
  if (userSeq[index] === gameSeq[index]) {
    score++;
    console.log(`score is = ${score}`);
    levelUp();
  } else {
    h4.innerText = "Game Over!! Press any to restart the game.";
    h4.style.color = "red";
    h4.style.fontSize = "1.5rem";

    let scoreShow = document.createElement("h3");
    scoreShow = score;
    h4.insertAdjacentHTML("afterend", `Your Score is : ${scoreShow}`);
  }
}
