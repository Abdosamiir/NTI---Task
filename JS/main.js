"use strict";

// DAY 1

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

//DAY 2

/*
// Task 01: Palindrome Checker

function isPalindrome() {
  let inputString = prompt("Enter a string to check if it's a palindrome:");

  if (inputString === null || inputString.trim() === "") {
    alert("No input provided.");
    return;
  }

  let caseSensitive = confirm("Do you want the palindrome check to be case-sensitive? (OK for Yes, Cancel for No)");

  let cleanedString = inputString.replace(/[^A-Za-z0-9]/g, ""); // Remove non-alphanumeric characters
  if (!caseSensitive) {
    cleanedString = cleanedString.toLowerCase();
  }

  let isPalindrome = cleanedString === cleanedString.split("").reverse().join("");

  if (isPalindrome) {
    alert(`The string is a palindrome.`);
  } else {
    alert(`The string is not a palindrome.`);
  }
}

isPalindrome();
*/

/*


// Task 02: Count 'e' Characters in a String
function countECharacters() {

  let inputString = prompt("Enter a string to count occurrences of the character 'e':");


  if (inputString === null || inputString.trim() === "") {
    alert("No input provided.");
    return;
  }


  let lowercaseString = inputString.toLowerCase();

 
  let eCount = 0;
  for (let char of lowercaseString) {
    if (char === 'e') {
      eCount++;
    }
  }

 
  alert(`The character 'e' appears ${eCount} times in the string.`);
}


countECharacters();
*/

/*
// Task 03: Circle Area Calculator
function calculateCircleArea() {

  let radiusInput = prompt("Enter the radius of the circle:");

 
  let radius = parseFloat(radiusInput);

  if (isNaN(radius) || radius <= 0) {
    alert("Please enter a valid positive number for the radius.");
    return;
  }

  
  let area = Math.PI * Math.pow(radius, 2);

 
  alert(`The area of the circle with radius ${radius} is: ${area.toFixed(2)}`);
}


calculateCircleArea();
*/
