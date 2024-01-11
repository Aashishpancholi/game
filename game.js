const selectCharacter = document.querySelectorAll(".imgbox img");
const startGame = document.querySelector("#btn");

// const selectedAnime = document.querySelector("h3");

const timeDiv = document.querySelector("#left span");

const scoreDiv = document.querySelector("#right span");

const selectionScreen = document.querySelector("#top");

const playingScreen = document.querySelector("#second-page");

const scoreScreen = document.querySelector("#third-page");

const blankBoxImg = document.querySelector("#blank-box-img");

const finalScoreDiv = document.querySelector("#third-page h3 span");

let selectedAnime = "";
let timer = 20;
let score = 0;
startGame.disabled = true;

selectCharacter.forEach((char) => {
  char.addEventListener("click", (e) => {
    console.log(e);
    const imgboxes = document.querySelectorAll(".imgbox");
    imgboxes.forEach((box) => {
      box.classList.remove("selectCharacterImg");
    });

    e.target.parentElement.classList.add("selectCharacterImg");

    const charName = e.target.parentElement.nextElementSibling.innerHTML;
    document.querySelector("#selectedSuperhero span").innerHTML = charName;
    selectedAnime = e.target.src;
    startGame.disabled = false;
  });
});

startGame.addEventListener("click", () => {
  // selectionScreen.Style.display = "none";
  selectionScreen.style.display = "none";
  // playingScreen.Style.display="flex";
  playingScreen.style.display = "flex";

  //console.log(selectedAnime)

  const timeInterval = setInterval(() => {
    if (timer === 1) {
      clearInterval(timeInterval);
      playingScreen.style.display = "none";
      scoreScreen.style.display = "flex";
      calculateScore();
    }
    timeDiv.innerHTML = --timer;
  }, 1000);

  const scoreInterval = setInterval(() => {
    if (timer === 1) {
      clearInterval(scoreInterval);
    }
    const img = document.createElement("img");
    img.src = selectedAnime;
    img.classList.add("smallImg");

    // attach clicking mechanism

    img.addEventListener("click", removeImage);

    // give the image a random position

    randomPosition(img);
    blankBoxImg.append(img);
  }, 450);
});

// getBoundingClientRect()

function randomPosition(elem) {
  const y = blankBoxImg.clientHeight + 40;
  const x = blankBoxImg.clientWidth + 20;
  console.log("position", y, x);
  //Math.random() * (max - min) + min;
  const randomY = Math.random() * (y - 40) + 40;
  const randomX = Math.random() * (x - 20) + 20;
  console.log("random position", randomY, randomX);

  // const randomY=Math.random()*(max - min) + min;
  // const randomX=Math.random()*(max - min) + min;
  elem.style.top = randomY + "px";
  elem.style.left = randomX + "px";
}

function removeImage(event) {
  event.target.remove();
  scoreDiv.innerHTML = ++score;
}
function calculateScore() {
  finalScoreDiv.innerHTML = score;
}
