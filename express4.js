const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const consolidate = require('consolidate');

const Task = require('./models_/task');

app.use(bodyParser.json());

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views_`);

app.use((req, res, next) => {
  req.blablabla = '111';
  console.log('use');
  next();
});

app.get('/users', (req, res) => {
  res.send('users');
});

app.get('/', async (req, res) => {
  const tasks = await Task.getAll();
  res.render('tasks', tasks);
  // то же самое ниже
  // Task.getAll().then((tasks) => {
  //   res.render('tasks', tasks);
  // })

})

app.get('/user/:id', (req, res, next) => {
  console.log(':id');
  next();
});

app.get('/user/vasya', (req, res) => {
  console.log('vasya');
  res.send('ok');
})

app.get('/user/:firstName/:lastName/:age', (req, res) => {
  console.log(req.query);
  res.send(`User with name ${req.params.firstName} ${req.params.lastName} and age ${req.params.age}`)
});

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello, world',
    features: [{
        name: 'Прочность',
        value: 10,
      },
      {
        name: 'Сила',
        value: 124,
      },
      {
        name: 'Интеллект',
        value: 0,
      }
    ]
  });
});

// app.post('/', (req, res) => {
//   if(req.body.source === 'ria') {
//     request('ria.ru', (..) => {
//       $ = cheerio(html)

//       res.render('')
//     })
//   }
// })

app.listen(8888);
