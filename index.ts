// #! /usr/bin/env node
import inquirer from "inquirer";

// Computer will generate a random number - Done

// 2) User input for guesiing a number

// Computer user input with generated number to for show the result

const randomNumber = Math.floor(Math.random() * 6 + 1);


const answers = await inquirer.prompt([
    {
    
  name: "userGuessedNumber",
    type: "number",
    message: "Please guess any number: ",
},
]);

if (answers.userGuessNumber === randomNumber) {
console.log("Congratulation! to Select the Right Answer and you have won the Bike.");
    }else {
        console.log("Sorry!, You have lost the Bike.");
    }






