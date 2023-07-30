"use strict";

let dices = [];
let dicesForPlayer = [];
let dicesForComputer = [];
let playerPoints = 0;
let computerPoints = "";

window.addEventListener("load", start);

// ========== start function ==============
async function start() {
  console.log("JS kører");
  dices = await fetchJsonFileAboutDices();
  console.log(dices);
  document.querySelector("#roll-dice").addEventListener("click", showRandomDiceUser);
}

// ========== fetch JSON-data function ==============
async function fetchJsonFileAboutDices() {
  const response = await fetch("dice.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

// ========== find random dice for player function ==============
function showRandomDiceUser() {
  let randomDiceNumber = Math.random();
  randomDiceNumber = Math.floor(randomDiceNumber * 6);
  console.log(randomDiceNumber);
  let randomDiceUser = dices[randomDiceNumber];
  dicesForPlayer.push(randomDiceUser);
  console.log(randomDiceUser);
  console.log(dicesForPlayer);
  console.log(playerPoints);
  showDice(randomDiceUser);
  if (dicesForPlayer.length == 2) {
    playerPoints = checkArrayForPointsForPlayer();
    hideRollDice();
    const myTimeOutResetDiceArray = setTimeout(resetDiceArrayForPlayer, 5000);
    const myTimeOutRemoveHiddenClass = setTimeout(removeHiddenClass, 5000);
    myTimeOutResetDiceArray;
    console.log("timeout reset dice array");
    myTimeOutRemoveHiddenClass;
    console.log("remove hidden class");
  }
  document.querySelector("#display-player-points").textContent = playerPoints;
}
// ========== show dice function ==============
function showDice(dice) {
    const diceHtml = /*html*/ `<img src="${dice.image}">`;
    document.querySelector("#dices").insertAdjacentHTML("beforeend", diceHtml);
  }


// ========== hide dice function ==============
function hideRollDice() {
  console.log("læses dette");
  document.querySelector("#roll-dice").classList.add("hidden");
}

// ========== check array for points for player function ==============
function checkArrayForPointsForPlayer() {
  console.log("check array for points");
  if (dicesForPlayer[0].name === "diceSix" && dicesForPlayer[1].name === "diceSix") {
    playerPoints += 4;
    console.log("to seksere");
  } else if (dicesForPlayer[0].name === "diceSix" || dicesForPlayer[1].name === "diceSix") {
    playerPoints++;
    console.log("en sekser");
  } else if (
    (dicesForPlayer[0].name === "diceOne" && dicesForPlayer[1].name === "diceOne") ||
    (dicesForPlayer[0].name === "diceTwo" && dicesForPlayer[1].name === "diceTwo") ||
    (dicesForPlayer[0].name === "diceThree" && dicesForPlayer[1].name === "diceThree") ||
    (dicesForPlayer[0].name === "diceFour" && dicesForPlayer[1].name === "diceFour") ||
    (dicesForPlayer[0].name === "diceFive" && dicesForPlayer[1].name === "diceFive")
  ) {
    playerPoints += 2;
    console.log("to ens");
  }
  console.log(playerPoints);
  return playerPoints;
}

function removeHiddenClass() {
  document.querySelector("#roll-dice").classList.remove("hidden");
}

// ========== reset dice array for player function ==============
function resetDiceArrayForPlayer() {
  dicesForPlayer = [];
  document.querySelector("#dices").innerHTML = "";
}
