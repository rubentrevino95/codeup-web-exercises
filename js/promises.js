//
// let wait = num => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, num)
//     });
// };
//
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// => means return
// Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made.

// To find the most recent commit, find the most recent public push event payload and use the first commit in the payload to find it's date.

function gitHubUserInfo(userName) {
    fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {"Authorization": `token b48c101eb866a02cdef2f9763282b3e9564e3578
`}})
        .then(data => { console.log(data);

            data.json().then(moreData => { console.log(moreData);

                console.log(`The last commit of ${userName} was on ${moreData[0].created_at}`);
            });
        })
        .catch(() => console.log("Failed"));
}
gitHubUserInfo("rubentrevino95");


