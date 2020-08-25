//Here is a basic discord bot, its fucking trash tho. Use it if u want to.
//Author: Derp.#1234 - github https://github.com/derpdude-wq

//Some basic shit, wach a youtube video if u dont know what it is. Feel free to add more!
const { Client, Attachment } = require('discord.js');
const bot = new Client();
const Discord = require('discord.js');
const fs = require('fs');
const PREFIX ='.'; //This is where you "activate" the command. Like this: .ping

bot.login('TOKEN IN HERE');

bot.on('ready', () => {
    console.log('Bot Status: Online') //The message it send if its online (Only to you)
    bot.user.setActivity('Command: .Help', { type: 'WATCHING' }).catch(console.error);//Status.
})


//Message
bot.on('message', (msg) => {
    if (msg.content === 'help')
      msg.channel.send(`Hello we have some commands
.Feel Free to add stuff here 
.Feel Free to add stuff here 
.Feel Free to add stuff here 
.Feel Free to add stuff here 
.Feel Free to add stuff here 
.Feel Free to add stuff here
${msg.author}`) // ${msg.author} is tagging the person who send the request.
   }
  );



bot.login(token); 

//This was just some fucking basic shit. If u want me to make another more complicatet bot, feel free to DM Derp.#1234
