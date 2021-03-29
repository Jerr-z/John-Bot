module.exports = {
    name: 'sora',
    description: "Finds his light",
    execute(message, args){
        if (args[1] == "moveset" ){
            message.channel.send("What would you like to know about his moveset?");
            if (args.length < 3) {
            let filter = (msg) => !message.author.bot;
            let options = {
              max: 1,
              time: 15000
            };
            let collector = message.channel.createMessageCollector(filter, options);
    
            collector.on('end', (collected, reason) => {
              if (reason === 'time') {
                message.channel.send('Ran out of time');
              } else {
                switch (collected.array()[0].content) {
                  case 'nair':
                    message.channel.send('Sora currently uses Marths nair');
                    break;
                  case 'fair':
                    message.channel.send('Sora currently uses a fair that is similar to Ikes nair');
                    break;
                  case 'bair':
                    message.channel.send('Sora currently uses Clouds bair');
                    break;
                  case 'dair':
                    message.channel.send('Sora currently uses a dair that involves him spinning in a vertical circle and has spike properties at the beginning of the move');
                    break;
                  case 'up air':
                    message.channel.send('Sora currently uses an up air similar to Marths');
                    break;
                  default:
                    message.channel.send('I dont recognize that move');
                    break;
                }
              }
            });
          }
        }
    }
}