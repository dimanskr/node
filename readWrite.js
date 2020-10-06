var fs = require('fs');
var http = require('http');

// myReadShort.on('data', function(chunk) {
//     console.log("Новые данные получены:");
//     myWriteShort.write(chunk);
// });

var server = http.createServer(function(req, res) {
    console.log("URL страницы " + req.url);
    // res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    // res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    var obj = {
        model: 'Audi',
        speed: '234.5',
        wheels: 4
    };
    // var myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');
    var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

    // myReadShort.pipe(res);
    res.end(JSON.stringify(obj));
});

server.listen(3000, '127.0.0.1');
console.log("Отслеживаем порт 3000");

