/**
 * Help command.
 * This will automatically load all commands and its description from this directory to make a help message.
 * Available as: help, commands, cmd
 */

const fs = require('fs')
const { EmbedBuilder } = require("discord.js")
const { prefix } = require("../config.json")

const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))
const commandCollections = []
const helpCommands = ["cmd"]

for (const file of commands) {
    const commandName = file.split(".")[0];
    if (helpCommands.includes(commandName)){
        continue
    }
    const command = require(`./${file}`);
    commandCollections.push({name: command.name, desc: command.desc})
}
console.log(commandCollections)

exports.run = (client, message, args) => {
    let pmsg = ''
    commandCollections.forEach(item => {
        pmsg += `**${prefix}${item.name}**: ${item.desc}\n\n`
    })
    const fields = [
        {name: "List", value: pmsg},
    ]
    const msg = new EmbedBuilder()
        .setColor([147, 181, 198])
        .setAuthor({name: "Available Commands"})
        .addFields(fields)
    message.reply({embeds: [msg]})
}

exports.name = "cmd"
exports.aliases = ["help", "commands"]
exports.desc = "Get VALORANT rank for requested player. Specify regions in first parameter: AP, NA, KR, EU."