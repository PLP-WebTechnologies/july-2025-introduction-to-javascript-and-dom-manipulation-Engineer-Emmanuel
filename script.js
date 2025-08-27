// Part 1: Variable declarations and conditionals

// Declare some variables
let userName = "Engineer Emmanuel";
let userAge = 30;

// Conditional statement to check age
if (userAge >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is not an adult.");
}

// Part 2: Custom Functions

// Function to greet a user
function greetUser(name) {
    return "Hello, " + name + "!";
}

// Function to calculate square of a number
function squareNumber(num) {
    return num * num;
}

// Using the functions and displaying result in the console
console.log(greetUser(userName));
console.log("Square of 5 is " + squareNumber(5));

// Part 3: Loop Examples

// Loop example 1: for loop to display numbers 1 to 5
function displayNumbers() {
    let numbers = "";
    for (let i = 1; i <= 5; i++) {
        numbers += i + " ";
    }
    return numbers;
}

// Loop example 2: while loop to count down from 3
function countdown() {
    let count = 3;
    let result = "";
    while (count > 0) {
        result += count + "... ";
        count--;
    }
    return result + "Go!";
}

// Part 4: DOM Interaction

// Interaction 1: Display greeting message inside 'output' div
const outputDiv = document.getElementById("output");
outputDiv.textContent = greetUser(userName);

// Interaction 2: Add event listener to button for running loop example
const btnLoop = document.getElementById("btnLoop");
btnLoop.addEventListener("click", function() {
    outputDiv.textContent = "Numbers: " + displayNumbers() + " | Countdown: " + countdown();
});

// Interaction 3: Add event listener to toggle header text color class
const header = document.getElementById("header");
const btnToggle = document.getElementById("btnToggle");
btnToggle.addEventListener("click", function() {
    header.classList.toggle("toggled");
});