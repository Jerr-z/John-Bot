const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Ready to John!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(" ");
    const command = args[0].shift().toLowerCase();
 
    if(command == 'john'){
        client.commands.get('john').execute(message, args);
    } else if (command == 'sora'){
        client.commands.get('sora').execute(message, args);
    }
});

client.login('ODI1ODE4OTIxNTQyMDkwNzYy.YGDdzQ.okABKYiGFIMJC5tk3cJ8RmweqBI');