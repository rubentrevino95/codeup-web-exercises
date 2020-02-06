"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
var isAdmin = true;
if(isAdmin) {
    console.log("Displaying admin navbar")
}
//TODO Together: Send a 20% off coupon if its users birthday
var isBirthday = true;
if(isBirthday) {
    console.log("sending coupon");
}
//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
var isRaining = true;
if(isRaining) {
    console.log("Its Raining");
}
//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
var currentBalance = 10000;
var itemCost = 500;

if(currentBalance > itemCost) {
    alert("You can buy it");
}


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
var numberOfLives = 0;
if(numberOfLives === 0) {
    alert("Sorry, Game Over");
}
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
var itsSnowing = true;
if(itsSnowing) {
    console.log("Its Snowing!");
}
//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
//assign the variable whatever you would like
var numberInput = 11;
if(numberInput > 10) {
    alert("it is true");
}


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
var isAdmin = true;
if (isAdmin) {
    console.log("displaying admin navbar")
} else {
    console.log("no navbar for you")
}
//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
var isRaining = true;
if(isRaining) {
    alert("Its raining!");
} else {
    alert("its not raining");
}



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
var numberOfLives = 1;
if(numberOfLives === 0) {
    alert("Sorry game over!");
} else {
    alert("Next Level!");
}
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
var weather = "its snowing";
if(weather === "its snowing") {
    alert("its snowing");
} else {
    alert("Check back another time");
}

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
var numberInput = 11;
if(numberInput > 10) {
    alert("the number is greater than 10")
} else {
    alert("the number is not greater than 10")
}
//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
function checkIfGameIsOver(numberOfLives) {
    if(numberOfLives === 0) {
        alert("Sorry game over!");
    } else {
        alert("Next Level!");
    }
}
// if identifies as true. else identifies as false.

//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.
function checkIfSnowing(weather) {
    if(weather === "its snowing") {
        alert("its snowing");
    } else {
        alert("Check back another time");
    }
}


// SHOULD WE DELETE STUFF EXAMPLE




//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
var age = 14;
if (age > 13) {
    alert("you may proceed");
} else {
    alert("you may not proceed");
}
// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
var weather = "raining";

if(weather === "snowing") {
    alert("its raining")
} else if(weather === "raining") {
} else {
    alert("have a nice day")
}
//TODO Together: refactor the above statement as a function
function checkWeather(weather) {
    if(weather === "snowing") {
        return "its snowing";
    } else if(weather === "raining")
        return "its raining"; {
    } else {
        return "have a nice day";
    }
}
// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.
var light = "green";

function trafficLight(light) {
    if(light === "green") {
        return alert("You may proceed");
    } else if(light === "yellow") {
        return alert("slow down");
    } else {
        return alert("stop");
    }
}





// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.







// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!



// =============== SWITCH STATEMENT ================
//
// TODO Together:
var pizzaPreference = "cheese";
    switch (pizzaPreference) {
        case  "pineapple and hot sauce":
            alert("Thats my favorite too");
            break;
        case "cheese":
            alert("Just cheese? I guess");
            break;
        default:
            alert(pizzaPreference + " is not my favorite, but lets order some.");
            break;
    }
// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }

//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.


//TODO: Rewrite the intersection function from earlier as a switch statement.
function pizzaMessage(pizzaPreference) {
    var pizzaConfirmation;
        switch (pizzaPreference) {
        case  "pineapple and hot sauce":
            pizzaConfirmation = "Thats my favorite too";
            break;
        case "cheese":
            pizzaConfirmation = "Just cheese? I guess";
            break;
        default:
            pizzaConfirmation = " is not my favorite, but lets order some.";
            break;
    }
}


// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
