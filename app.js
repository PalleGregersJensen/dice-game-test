"use strict";

let dices = [];
let dicesForPlayer = [];
let dicesForComputer = [];
let playerPoints = "";
let computerPoints = "";

window.addEventListener("load", start);

async function start() {
  console.log("JS kører");
  dices = await fetchJsonFileAboutDices();
  console.log(dices);
  document.querySelector("#roll-dice").addEventListener("click", showRandomDiceUser);
}

async function fetchJsonFileAboutDices() {
  const response = await fetch("dice.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

function showRandomDiceUser() {
  let randomDiceNumber = Math.random();
  randomDiceNumber = Math.floor(randomDiceNumber * 6);
  console.log(randomDiceNumber);
  let randomDiceUser = dices[randomDiceNumber];
  dicesForPlayer.push(randomDiceUser);
  console.log(randomDiceUser);
  console.log(dicesForPlayer);
  playerPoints = checkArrayForPointsForPlayer();
  console.log(playerPoints);
  showDice(randomDiceUser);
  if (dicesForPlayer.length >= 2) {
    resetDicesForPlayer();
  }
}

function showDice(dice) {
  const diceHtml = /*html*/ `<img src="${dice.image}">`;
  document.querySelector("#dices").insertAdjacentHTML("beforeend", diceHtml);
}

function resetDicesForPlayer() {
  console.log("læses dette");
  // dicesForPlayer = [];
  document.querySelector("#roll-dice").classList.add("hidden");
}

function checkArrayForPointsForPlayer() {
  console.log("check array for points");
  if (dicesForPlayer.includes("diceSix", 2)) {
    playerPoints += 4;
    console.log("to seksere");
  } else if (dicesForPlayer.includes("diceSix")) {
    playerPoints++;
    console.log("en sekser");
  } else if (
    dicesForPlayer.includes("diceOne", 2) ||
    dicesForPlayer.includes("diceTwo", 2) ||
    dicesForPlayer.includes("diceThree", 2) ||
    dicesForPlayer.includes("diceFour", 2) ||
    dicesForPlayer.includes("diceFive", 2)
  ) {
    playerPoints += 2;
    console.log("to ens");
  }
  console.log(playerPoints);
  return playerPoints;
}

