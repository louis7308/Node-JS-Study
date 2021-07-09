const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.listen(3000, () => {
    console.log('Server open');
});