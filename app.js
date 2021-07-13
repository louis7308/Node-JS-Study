const express = require('express');
const app = express();
const db_config = require(__dirname + '/config/database.js');
const conn = db_config.init();
const bodyParser = require('body-parser');

db_config.connect(conn);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
//app.use(express.json());

app.get('/', (req, res) => {
    res.send('ROOT 경로 입니다.');
});

app.get('/list', (req, res) => {
    var sql = 'SELECT * FROM borad';
    conn.query(sql, function(err, rows, fields) {
        // console.log(rows);
        if(err) console.log('Query is not excuted. select fail..\n' + err);
        else res.render('list.ejs', {list: rows});
    });
});

app.get('/write', (req, res) => {
    res.render('write.ejs');
});

app.post('/writeAf', (req, res) => {
    const body = req.body;
    console.log(body);

    var sql = 'INSERT INTO borad VALUES(?, ?, ?, NOW())';
    const params = [body.id, body.title, body.content];
    console.log(sql);
    conn.query(sql, params, (err) => {
        console.log('params ' + params);
        if(err) console.log('query is not excuted. insert fail..\n', + err);
        else res.redirect('/list');
    });
});

app.listen(3000, () => console.log('server on'));