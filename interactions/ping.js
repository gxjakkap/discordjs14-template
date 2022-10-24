const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Reply with a Pong!."),
    async execute(interaction) {
        await interaction.deferReply() //reply with "bot is thinking..." interface
        await interaction.editReply("Pong!")
    }
}