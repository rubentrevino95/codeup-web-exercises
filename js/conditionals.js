"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

confirm("Would you like to enter a number?");

var numEntered = Number(prompt("Enter a number"));

if(numEntered % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}
var numPlus = (numEntered) + 100;

alert("Your number plus 100 equals to " + numPlus);

if(numEntered > 0) {
    alert("The number is positive");
    }   else {
        alert("the number is negative");
    }
if(numEntered === isNaN) {
    alert("Thats not a number.")
} else {

}

//functions//

function ifaNum(input) {
    return !isNaN(input);
}
function numberEven(numEntered) {
    if(numEntered % 2 === 0) {
       return alert("The number is even");
    } else {
        return alert("The number is odd");
    }
}
function numPlus100(numEntered) {
    return alert(numEntered + 100);
}

function posOrNeg(numEntered) {
    if (numEntered > 0) {
        return alert("The number is positive");
    } else {
        return alert("The number is negative");
    }
        }
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// var color = "red";
function analyzeColor(color) {
    if(color === 'blue') {
        return console.log('blue is the color of the sky');
    } else if(color === 'red') {
        return console.log('strawberries are red');
    } else if(color === 'cyan') {
        return console.log('I dont know anything about cyan');
    } else {
        return console.log('I dont know anything about that color');
    }
}
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
function colorRanomizer(randomColor) {
    return console.log(randomColor);
}
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function randomizer(color) {
    switch (color) {
        case 'red':
            alert('the color is red');
            break;
        case 'orange':
            alert('the color is orange');
            break;
        case 'yellow':
            alert('the color is yellow');
            break;
        case 'green':
            alert('the color is green');
            break;
        case 'blue':
            alert('the color is blue');
            break;
        case 'indigo':
            alert('the color is indigo');
            break;
        case 'violet':
            alert('the color is violet');
            break;
        default:
            alert('dont know that color');
    }
    return color;
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var chooseColor = prompt("Choose a color");

analyzeColor(alert('The color is '+ chooseColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(luckyNumber, price) {
    if (luckyNumber === 0) {
        return console.log('no discount for you.');
    } else if (luckyNumber === 1) {
        return price - (price * .10);
    } else if (luckyNumber === 2) {
        return price - (price * .25);
    } else if (luckyNumber === 3) {
        return price - (price * .35);
    } else if (luckyNumber === 4) {
        return price - (price * .50);
    } else if (luckyNumber === 5) {
        return 0;
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = (Number(prompt("What is your total bill?")));

alert("Your lucky number was " + luckyNumber + " and your price before discount was " + totalBill + " your discounted total is now " + calculateTotal(luckyNumber, totalBill));