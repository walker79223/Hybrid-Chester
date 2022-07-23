const { MessageEmbed } = require("discord.js");

module.exports = async (client, queue, song) => {
    let embed = new MessageEmbed()
    .setDescription(`**Queued • [${song.name}](${song.url})** \`${song.formattedDuration}\` • ${song.user}`)
    .setColor('#2f3136')

    queue.textChannel.send({ content: ' ', embeds: [embed] })
}