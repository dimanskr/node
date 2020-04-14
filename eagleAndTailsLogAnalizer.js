const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('./eagleAndTails.txt'),
    output: process.stdout
});

var numberOfGames = 0;
var wins = 0;
var fails = 0;

rl.on('line', function(line) {
    line = line.toLowerCase();
    numberOfGames++;

    if (line.includes('win')) {
        wins++;
    } else if (line.includes('fail')) {
        fails++;
    }
});
// console.log('Number of wins:', wins);

const result = `Games: ${numberOfGames}. Wins ${wins}. Fails ${fails}.`;

fs.appendFile('./eagleAndTails.txt', result + "\r\n", (err, result) => {
    if(err) console.log('error', err);
});
