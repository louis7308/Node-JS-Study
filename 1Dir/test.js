// var i = process.argv[2];
// var j = process.argv[3];

// console.log(i, j);
// var sum = parseInt(i) + parseInt(j);
// console.log(sum);

// console.log(process.arch);
// console.log(process.platform);

// function sayHelloWorld(name) {
//     console.log('Hello world node land', name);
// }

// let t = setTimeout(sayHelloWorld, 3000, 'seungwon');

// console.log('삭제합니다');
// // clearTimeout(t);

// function Goodbye(who) {
//     console.log('Good bye', who);
// }

// setInterval(Goodbye, 1000, 'seungwon');
const util = require('util')

// function Parent() { }

// Parent.prototype.sayHello = function () {
//     console.log('Hello Im Parrent');
// }

// function Child() { }
// util.inherits(Child, Parent);

// let child = new Child();
// child.sayHello();

// var str1 = util.format('%d %d %d', 1, 2, (1+2));
// var str2 = util.format('%s %s', 'Hello', 'node');

// console.log(str1);
// console.log(str2);

// 사용자 목록조회 API
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world\n');
})

app.get('/users', (req, res) => {
    return res.json(users);
})
// app.get('/users/:id', (req, res) => {
//     console.log(req.params.id);
//     // 사용자가 입력한 :id 값이 출력됨. (주의 : 서버로 오는 데이터는 전부 문자열 형식이다. 기억할 것.)
// })
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.json({succed : 'succed'});
    console.log(id);
    if(!id) {
        return res.status(400).json({err : 'Incorrect id'});
    }
})

app.listen(3000, () => {
    console.log('Server on');
})

let users = [ // 객체 배열
    {
        id: 1,
        name: 'Hyun'
    },
    {
        id: 2,
        name: 'young'
    },
    {
        id: 3,
        name : 'testname'
    }
]