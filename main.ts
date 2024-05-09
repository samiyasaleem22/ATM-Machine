#! /usr/bin/env node
import inquirer from "inquirer"
let myBalance: 20000; 
let myPin: 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number",
        }
    ]
   
) 
console.log("pinAnswer");


