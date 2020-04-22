const express = require('express');
const app = express();

const mongoose = require('mongoose');
const db = mongoose.connect(`mongodb://localhost/friends`, {useNewUrlParser: true});

const User = require('./users');

// const vasya = new User({
//     firstName: 'Василий',
//     lastName: 'Пупкин'
// });

// vasya.save().then(vasya => {
//     console.log('Document', vasya);
// }, err => {
//     console.error(err);
// })

app.get('/', (req, res) => {
    res.send(`Hello World!!!`);
});

app.get('/users',async (res, req)=>{
    const users = await User.find();
    res.send(users);
});

app.get('/users/:id',async (res, req)=>{
    const users = await User.findById(req.params.id);
    res.send(users);
});
app.post('/users',async(req,res)=>{
    let users = new User(req,body);
    user = await user.save();
    res.send(user);
});


app.listen(8888, () => {
    console.log("Server has been started!");
});
