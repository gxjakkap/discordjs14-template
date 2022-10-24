const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("echo")
        .setDescription("Reply with message provided by user")
        .addStringOption(options => options.setName('message').setDescription("Message to echo").setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply() //reply with "bot is thinking..." interface
        const text = interaction.options.getString("message")
        await interaction.editReply(text)
    }
}