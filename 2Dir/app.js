const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('여기는 루트 경로입니다.');
});

app.get('/login', (req, res) => {
    res.send('여기는 로그인 경로입니다.');
});

app.listen(3000, () => {
    console.log('Server open');
});