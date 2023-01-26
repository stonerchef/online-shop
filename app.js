require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

var app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

app.set('view engine', 'ejs');
app.set('views', './views');

app.use( express.static( "./static" ) );
app.use( express.static( "./images" ) );

app.get('/', (req, res) => {
    res.render('site');
})

app.get('/about_us', (req, res) => {
    res.render('about_us.ejs');
})

app.get('/cart', (req, res) => {
    res.render('cart.ejs');
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>');
})
  
app.listen(PORT, () => {
    console.log('http://localhost:' + process.env.PORT);
});