#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import { v4 as uuidv4 } from 'uuid';
let user_name = await inquirer.prompt({
    name: "user_name",
    type: "input",
    message: chalk.redBright("Enter your name fellow student:  "),
    default: "player"
});
let subject_user = await inquirer.prompt({
    name: "subject_user",
    type: "list",
    message: chalk.redBright("please choose your subject from the following subjects below"),
    choices: ["Science", "Math", "English", "computer science"]
});
let myuuid = uuidv4();
console.log(chalk.redBright('Your ID is: ') + myuuid);
console.log(chalk.redBright(`good luck with ${subject_user.subject_user} hope to see you next time ${user_name.user_name}`));
