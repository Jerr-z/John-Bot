module.exports = {
    name: 'john',
    description: "No Johns!",
    execute(message, args){
    let replies = [
    "reply 1", 
    "reply 2", 
    "reply 3"
    ];

    let random = Math.floor(Math.random() * replies.length);
        message.channel.send(replies[random]);
    }
}