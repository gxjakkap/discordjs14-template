exports.run = (client, message, args) => {
    const text = args.join(" ")
    message.reply(text)
}

exports.name = "echo"
exports.aliases = ["repeat", "repeatafterme"]
exports.desc = "Reply with message provided by user. Args:[Message]"