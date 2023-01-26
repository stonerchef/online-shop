const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Users', {
    useNewUrlParser: true
}, 
err => {
    if (!err) {
        console.log('Connection secceeded');
    } else {
        console.log('Error in connection' + err);
    }
})

require('./user.model')