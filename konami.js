// Key Map
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};
// Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// position of input that will increment as code in input.
var konamiCodePosition = 0;

// keydown event listener; event in for keyboard event
document.addEventListener('keydown', function(event) {

    // value of the key code from key map
    // The keyCode property returns the Unicode character code of the key that triggered the onkeypress event
    var key = allowedKeys[event.keyCode];

    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];

    // compare the key with the required key
    if (key === requiredKey) {
        // move to the next key in the konami code sequence
        konamiCodePosition++;
        // if the last key is reached, activate cheats
        // position of inputs reaches length of konami input
        if (konamiCodePosition === konamiCode.length) {
            activateCheats();
        }
    } else {
        // if input incorrectly the position resets
        konamiCodePosition = 0;
    }
});

function activateCheats() {
    document.body.style.background = "url('img/ffvii-victory.gif') no-repeat";
    document.body.style.backgroundPosition ="center";

    // document.body.style.background = "url('img/chocobo.gif') no-repeat";
    // document.body.style.backgroundPosition="top right";


    var audio = new Audio('audio/ffvii.mp3');
    audio.play();
}