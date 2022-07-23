const { MessageEmbed } = require("discord.js");

module.exports = async (client, queue) => {
    const embed = new MessageEmbed()
    .setColor('#2f3136')
    .setDescription(`**Channel is Empty!**`)

    queue.textChannel.send({ embeds: [embed] })
}