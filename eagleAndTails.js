const fs = require('fs');
const time = new Date();
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('What you prefer Eagle = 1 or Tale = 0. For exit type exit.');

rl.on('line', (cmd) => {
    let flipCoin = '';
    let playerStatus = '';
    flipCoin = Math.round(Math.random());

    console.log('Your choice is:', cmd);
    console.log('Random says:', flipCoin);
    if (cmd === 'exit') {
        rl.close();
    }

    if (cmd == 1 || cmd == 0) {
        if (cmd == flipCoin) {
            console.log('Congratulation, your choice is right:', cmd);
            playerStatus = 'win';
        } else {
            console.log('Sorry, but you are wrong with:', cmd);
            playerStatus = 'fail';
        }
    } else {
        console.log('If you want to play, type: 1 for Eagle, 0 for Tale');
        console.log('If you want to close the program, type: exit');
    }

    fs.appendFile("./eagleAndTails.txt", time + ': ' + playerStatus + "\r\n", (err, result) => {
        if(err) console.log('error', err);
    });
});
