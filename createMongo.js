const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(`mongodb://127.0.0.1:27017/myapp`, (err) => {
    if (err) {
        console.log(err);
    }
});

const userSchema = new Schema({
    username: { type: String },
    password: { type: String },
    name: { type: String },
    facebookId: { type: String }
});

const Person = mongoose.model('User', userSchema, 'users'); //

const newuser = new Person({
    username: 'user2',
    password: 'user2',
    name: 'Second user'
});

newuser.save().then(newuser => {
    console.log('Document', newuser);
}, err => {
    console.error(err);
})
