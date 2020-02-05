console.log("Hello from external JavaScript!");

"use strict";
console.log("Hello from external JS!");
alert("welcome to my website!");
"use strict";
alert('Welcome to my website!');
prompt('Whats your favorite color?');
confirm('Thats my favorite color too!');

// exercise 3 //
// 1. //
var theLittleMermaid = ;
var brotherBear = 5;
var hercules = 1;
var moviePrice = 3;

var totalPrice = (theLittleMermaid*moviePrice) + (brotherBear*moviePrice) + (hercules*moviePrice);
var alertPrice = ("total amount will be $" + totalPrice);
// 2. //
var googlePay = number(prompt("What is your google rate?"));
var amazonPay = number(prompt("What is your amazon rate?"));
var facebook = number(prompt("What is your facebook rate?"));

var googHours = number(prompt("How many hours did you work at google?"));
var amazonHours = number(prompt("How many hours did you work at amazon?"));
var facebookHours = number(prompt("How many hours did you work at facebook?"));

var totalPay = (googlePay*googHours) + (amazonPay*amazonHours) + (facebook*facebookHours);
var alertMessage = ("your total pay is $" + totalPay);
alert(alertMessage);

// 3. //
var classNotFull = confirm("Class is not full");
var noScheduleConflicts = confirm("Schedules no not conflict");

var studentEnrolled = classNotFull && noScheduleConflicts;
alert("Student can enroll: " + studentEnrolled);

// 4. //
var numberOfItems = number(prompt("How many items are you buying?"));
var offerValid = confirm("Is the offer valid?");
var isPremiumMember = confirm("Are you a premium member?");

var discount = offerValid  && (isPremiumMember || numberOfItems > 2);
alert("Can use discount: " + discount);

