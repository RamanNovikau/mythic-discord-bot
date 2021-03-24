const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NjU2NDUyOTc1ODMyNTk2NDgy.Xfi47w.69UfWFBcTrYEmU26w30I3JAZqmI');

const forbiddenRepository = require('./modules/forbidden-words/forbidden-word.service');
const { dbConnection } = require('./modules/db/mongoDb');

dbConnection();

client.on('message', async (message) => {

    const prefix = '!ban';
    if (message.content === '!doc') {
        message.channel.send('https://docs.google.com/spreadsheets/d/1Q4bcK0bpHYsYnRr-y7A8sPRkA62LTe4JV8R6ZfeJ4Q8/edit#gid=0');
    }

    const ban = await forbiddenRepository.getAll();
    console.log(ban);

    if (message.member.roles.find(role => role.name === 'admin')) {
        const commandBody = message.content.slice(prefix.length);
        console.log(commandBody);
        const args = commandBody.split(' ');
        console.log(args);
        const command = args.shift().toLowerCase();
        console.log(command);
    }
    let flag = false
    ban.forEach(element => {
        if (message.toString().toLowerCase().includes(element.word) && !flag) {
            message.delete();
            flag = !flag;
            message.reply('ОЙ ОЙ ОЙ!!');
        }
    });
});


client.on('ready', () => {
    console.log('Bot Ready!');
});

