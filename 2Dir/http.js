const http = require('http')
const server = http.createServer( (req, res) => {
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"}) // 서버 설정
    if(req.url === '/') {
        res.end('하잉');
    }
    else if(req.url === '/login') {
        res.end('로그인');
    }
});

server.listen(3001, () => {
    console.log('서버 오픈');
})