const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000; 
const DATABASE_URL = 'mongodb://localhost/users';
var app = express();

mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

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
    console.log('http://localhost:' + PORT);
});