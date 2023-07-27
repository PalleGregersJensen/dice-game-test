"use strict";

let dices = [];
let dicesForPlayer = [];
let dicesForComputer = [];

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
  console.log(dicesForPlayer);
  console.log(randomDiceUser);
  showDice(randomDiceUser);
}

function showDice(dice) {
  const diceHtml = /*html*/ `<img src="${dice.image}">`;
  document.querySelector("#dices").insertAdjacentHTML("beforeend", diceHtml);
}
