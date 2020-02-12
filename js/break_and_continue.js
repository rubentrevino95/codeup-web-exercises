function numberSkipper() {

    do {
        numberSkip = parseInt(prompt('Enter an odd number between 0 and 50: '));
        if (numberSkip % 2 !== 0 && numberSkip <= 50 && numberSkip >= 0) {
            break;
        }
    } while (true);

    for (var i = 1; i <= 50; i++) {
        if (i === numberSkip) {
            console.log('Yikes! Skipping number: ' + i);
            continue;
        }
       if (i % 2 === 0) {
          continue;
       }
        console.log('here is an odd number: ' + i);
    }
}
numberSkipper();