const expresss = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/', (req, res) => {
    res.render('user/addOrEdit', {
        viewTitle: 'insert User'
    })
})
