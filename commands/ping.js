exports.run = (client, message, args) => {
    message.reply("Pong!") // Or you could use message.channel.send() to send normal message rather than reply.
}

exports.name = "ping"
exports.aliases = null
exports.desc = "Reply with a Pong!."