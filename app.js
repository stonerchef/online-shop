var express = require('express');
var app = express();

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', '/views');

app.get('/', (req, res) => {
    res.render('test');
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>');
})
  
app.listen(PORT, () => {
    console.log(`server started at adress localhos:${PORT}...`);
});