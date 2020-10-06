// const cheerio = require('cheerio');
// const request = require('request');
// const readline = require('readline');


// request('https://news.mail.ru/', (err, res, html) => {
//     if (!err || res.statusCode === 200) {
//         console.log('test-good');
//         const $ = cheerio.load(html);
//         for (let i = 0; i <= 5; i++) {
//             console.log($('.list__text').eq(i).text(), '\n');
//         }

//     } else {
//         console.log('err');
//     }
// })

// request('https://vc.ru/new', (err, req, html) => {
//     if (!err && req.statusCode === 200) {
//         const $ = cheerio.load(html);
//         const feeds = $('.feed__item');
//         const news = [];

//         feeds.each(i => {
//             const title = feeds.eq(i).find('h2').text().replace(/\s+/g,' ');
//             const author = feeds.eq(i).find('.content-header-author--user').text().replace(/\s+/g,' ');
//             const text = feeds.eq(i).find('p').text().replace(/\s+/g,' ');

//             news.push({
//                 title: title,
//                 author: author,
//                 text: text
//             });
//         });

//         console.log(news);
//     }
// });

const path = require('path');
const express = require('express');
const consolidate = require('consolidate');
const request = require('request');
const cheerio = require('cheerio');

const app = express();

app.engine('html', consolidate.handlebars);
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname));

app.get('/(:time)?', async (req, res) => {
    const news = await requestNews(req.params.time);

    res.render('news', { news });
});

app.listen(8888, () => {
    console.log('Server has been started.')
});

function requestNews(time) {
    return new Promise((resolve, reject) => {
        let news = [];

        request('https://vc.ru/' + (time ? `top/${time}` : ''), (err, req, html) => {
            if (!err && req.statusCode === 200) {
                const $ = cheerio.load(html);
                news = $('.feed__item').map(function () {
                    return {
                        title: $(this).find('h2').text().trim(),
                        author: $(this).find('.content-header-author--user').text(),
                        text: $(this).find('p').text().trim(),
                    }
                }).get();
            }

            resolve(news);
        });
    })
}
