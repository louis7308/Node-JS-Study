// 모듈
const express = require('express');
const app = express();


// 라우팅 분리
const home = require('./routers/index')


app.set('views', '../views');
app.set('view engine', 'ejs')

app.use('/', home); // use -> 미들웨어를 등록해주는 메소드

module.exports = app;