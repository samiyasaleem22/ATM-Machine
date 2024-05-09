#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance;
let myPin;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
console.log("pinAnswer");
