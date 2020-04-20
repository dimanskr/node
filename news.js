const cheerio = require('cheerio');
const request = require('request');
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

request('https://vc.ru/new', (err, req, html) => {
    if (!err && req.statusCode === 200) {
        const $ = cheerio.load(html);
        const feeds = $('.feed__item');
        const news = [];

        feeds.each(i => {
            const title = feeds.eq(i).find('h2').text().replace(/\s+/g,' ');
            const author = feeds.eq(i).find('.content-header-author--user').text().replace(/\s+/g,' ');
            const text = feeds.eq(i).find('p').text().replace(/\s+/g,' ');

            news.push({
                title: title,
                author: author,
                text: text
            });
        });

        console.log(news);
    }
});
