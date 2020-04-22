const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');

const app = express();

app.use(cookieParser('secret'));
app.use(session({ keys: ['secret']}));

// app.get('/', (req, res) => {
//     res.cookie('name', 'Dmitriy');
//     res.clearCookie('something');
//     res.json(req.cookies);
// })

app.use((req, res) => {
    let n = req.session.views || 0;
    req.session.views = ++n;

    res.end(`${n} views`);
});

app.listen(4444, () => {
    console.log('Server has been started');
});
