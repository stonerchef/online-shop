const express = require('express');
var app = express();

const PORT = 3000;

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

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>');
})
  
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
});