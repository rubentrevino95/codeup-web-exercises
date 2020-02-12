// 1. create loop that squares output.

// var i = 2;
// while (i <= 65536) {
//     console.log(i);
//     i*=2;
// };
//------------------------
// 2. ice cream while loop.

// This is how you get a random number between 50 and 100
// This expression will generate a random number between 1 and 5
var allCones = Math.floor(Math.random() * 50) + 50;
do {
    var cones = Math.floor(Math.random() * 5) + 1;
    if (cones > allCones) {
        console.log("I cannot sell you " + cones + ", I only have " + allCones + " left.")
    } else {
        allCones -= cones;
        console.log("I sold " + cones + " cones.");
    }
} while (allCones > 0);
console.log("I'm all done");
//------------------------
//example.
// var i = 10;
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);
