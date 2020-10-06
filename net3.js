// const https = require('https');

// https.get('https://geekbrains.ru', (res) => {
//     console.log(res.statusCode);
// }).on('error', (e) => {
//     console.error(e);
// });
// const request = require('request');
// // const request = require('co-request');

// request('https://geekbrains.ru', (err, response, body) =>{
//     if(err) {
//         throw err;
//     }
//     console.log(body);
// })

// const nodemailer = require('nodemailer');
// const smtpTransport = nodemailer.createTransport('SMTP', {
//     service: 'GMail',
//     auth: {
//         user: 'dimanskr2@gmail.com',
//         pass: ''
//     }
// });

// smtpTransport.sendMail({
//     from: 'Dmitriy Skryabin <dimanskr2@gmail.com>',
//     to: 'Dmitriy <dimanskr@mail.ru>',
//     subject: 'Hi Dmitriy',
//     text: fs.readFileSync('letter.txt'),
//     html: '<b>Hellow!!!!</b>'
// }, (err, response) => {
//     if(err) {
//         throw err;
//     } else {
//         console.log('Message sent');
//     }

//     smtpTransport.close();
// })
const request = require('request');
const cheerio = require('cheerio');
// const phantomjs = require('phantomjs');
// const zombie = require('zombie');

request('https://www.banki.ru/products/currency/usd/', (err, req, html) => {
    if (!err && req.statusCode === 200) {
        const $ = cheerio.load(html);
        console.log('Курс доллара', $('.currency-table__large-text').eq(1).text());
    }
})
