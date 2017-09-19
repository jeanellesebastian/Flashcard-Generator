// import modules needed
var inquirer = require("inquirer");
var BasicCard = require("./basicCard.js");
var basicQuestions = require("./basicQuestions.js");
var fs = require("fs");
var counter = 0;

// flashcard question function
var askQuestions = function () {

    if (counter < 5) {
        inquirer.prompt([

            // brings in question to ask user
            {
                type: "input",
                message: basicQuestions[counter].front,
                name: "question"
            }

            // asks for user input
        ]).then(function (answer) {

            var userInput = answer.question.toLowerCase();

            // if user input is equal to the answer then .. WOO! 
            if (userInput === basicQuestions[counter].back.toLowerCase()) {
                console.log("\n >>> WOO! That is CORRECTAMUNDO!");
            }

            // if user input is not equal to the answer then ERR!
            else {
                console.log("\n >>> ERRRR! Wrong!");
            }

            // show the full text answer whether right or wrong
            console.log(basicQuestions[counter].full);
            counter++
            askQuestions();

        });
    }

    // after finishing looping through questions then ask user if they want to play y/n
    else {
        console.log("\n >>>>> THE END <<<<<")
        inquirer.prompt([

            {
                type: "confirm",
                message: "============================= \n So - Do you want to play again?",
                name: "playAgain",
                default: true
            }
        ]).then(function (answer) {

            if (answer.playAgain === true) {
                counter = 0;
                askQuestions();

            }
            else {
                console.log(">>>>> SEE YA LATER! <<<<<");
            }

        });
    }

};

// call the AskQuestions function to run the program
askQuestions();