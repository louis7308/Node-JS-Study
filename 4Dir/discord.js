const Discord = require('discord.js');
const client = new Discord.Client(); // 클라이언트 객체 하나 생성
const token = require('./token.json')

client.on('ready', () => { // .on은 이벤트 리스너로 첫번째 인자로 처리할 이벤트 ,두번째 인자로 callback 함수
    // ready 라는 이벤트는 봇이 실행되었을때 나타나는 이벤트
    console.log(`${client.user.tag}봇이 실행되었습니다.`);
});

client.on('message', (msg) => {
    if (msg.content === 'ping') {
        msg.reply('퐁인뎁쇼?');
    }
});

client.login(token.token);