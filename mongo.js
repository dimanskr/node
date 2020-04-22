const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(`mongodb://localhost/test`, (err) => {
    if (err) {
        console.log(err);
    }
});

const PersonSchema = new Schema({
    userame: {
        type: String,
        // default: 'anonimous',
        required: true
    },
    name: {
        firstName: {
            type: String,
        },
        lastName: {
            type: String
        }
    }
});

const Person = mongoose.model('person', PersonSchema);

Person.find({}).then(vasya =>{
    console.log(vasya);
}, err =>{
    console.error(err);
})

// const vasya = new Person({
//     userame: 'vasya',
//     name: {
//         firstName: 'Василий',
//         lastName: 'Пупкин'
//     }
// });

// vasya.save().then(vasya => {
//     console.log('Document', vasya);
// }, err => {
//     console.error(err);
// })
