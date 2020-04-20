const readline = require('readline')
const rp = require('request-promise')

const views = require('./view')

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const getTranslation = word => {
    const transApKey = 'trnsl.1.1.20180122T071333Z.0f8a40f114d4aebb.ac8ea01cff1ff36fcf861ee0250c74fd6b27c595'
    const transApiUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${transApKey}&lang=en-ru&text=${word}`

    return rp(transApiUrl)
}

views.greeting()
views.enterWord()

rl.on('line', (input) => {
    if (input === 'exit') {
        views.bye()
        process.exit(0)
    }

    getTranslation(input)
        .then(data => {
            data = JSON.parse(data)

            if (data.code === 200) {
                views.translation(data.text[0])
                views.enterWord()
            } else {
                views.error()
            }
        })
        .catch(err => {
            views.error()
            throw new Error(err)
        })
})

// const request = require('request');
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on('line', (text) => {
//     request(encodeURI('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190522T092042Z.a8d635fbbfa1dc57.32a74a85103ebf0cb9e76817e7680347e4cb22ba&lang=en-ru&text=' + text), (err, req, json) => {
//         if (!err && req.statusCode === 200) {
//             console.log(JSON.parse(json).text);
//         }
//     });
// });
