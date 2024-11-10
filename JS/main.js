"use strict";
/* 
task 1

let sum = 0;
let input;

do {
  input = prompt("Enter a number (enter 0 to stop):");
  let number = parseFloat(input);

  if (isNaN(number)) {
    alert("Please enter a valid number.");
    continue;
  }

  if (number === 0) break;

  if (sum + number > 100) {
    alert("Adding this number would exceed 100. Stopping input.");
    break;
  }

  sum += number;
} while (true);

alert("The total sum is: " + sum);

/*

/*
task 2

alert("Welcome to our website!");

let userName = prompt("Please enter your name:");
let color = prompt("Choose a color for your welcome message:");

let validColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "black",
  "white",
];

document.body.innerHTML = `<h1 style="color:${color};">Welcome, ${userName}!</h1>`;
*/

/* 
task 3
let userMessage = prompt("Enter a message to display:");

for (let i = 1; i <= 6; i++) {
  let heading = document.createElement(`h${i}`);
  heading.textContent = userMessage;
  document.body.appendChild(heading);
}
*/
