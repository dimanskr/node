const express = require('express');
const app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.post('/about', urlencodedParser, function(req, res) {
	// Если данные не переданы, то возвращаем ошибку
	// if (!req.body) return res.sendStatus(400);
	// Все данные из формы сохраняются в req.body
	console.log(req.body);
	// Можем вывести другую страницу и передать в нее все данные
	// res.render('about');
	res.render('about-success', {data: req.body});
});

app.get('/news/:id', (req, res) => {
    var obj = {title: "Новость", id: 4, paragraphs: ['Параграф - 1', 'Параграф -2','Параграф - 3','Параграф - 4','Параграф - 5','Параграф - 6',]};
    console.log(req.query);
    res.render('news', {newsId: req.params.id, obj: obj});
});

app.listen(3000);
