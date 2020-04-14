const minimist = require('minimist');

// console.log(minimist(process.argv.slice(2), { alias: {o: 'optimal'}})); //параметры командной строки

// console.log(process.env); // переменный

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on('line', (command) => {
//     console.log('You types %s', command);

//     if(command === 'exit') {
//         rl.close();
//     }
// });

const fs = require('fs'); //библиотека чтения из файла
// асинхронное чтение файла
// fs.exists('./package.json', (exists) => {
//     if(exists) {
//         fs.readFile('./package.json', (err, data) => {
//             console.log(data.toString());
//         });
//     }
// })

const exists = fs.existsSync('./package.json');
if(exists) {
    const data = fs.readFileSync('./package.json');
    console.log(data.toString());
}
