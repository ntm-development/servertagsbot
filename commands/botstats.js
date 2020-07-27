const { version, MessageEmbed } = require("discord.js");
const moment = require("moment");
const { stripIndents } = require("common-tags");
require("moment-duration-format");

exports.run = async (bot, message, args) => { 
   
   const duration = moment.duration(bot.uptime).format(" D [days], H [hours], m [minutes], s [seconds]");
  
        const embedStats = new MessageEmbed()
            .setTitle("**Server Tags Stats**")
            .setColor("e0e0d2")
            .setThumbnail(`https://i.imgur.com/kCPLvwj.png`)
            .setDescription(stripIndents`
            📊 __**Statistics**__
            **Users »** ${bot.users.cache.size}
            **Servers »** ${bot.guilds.cache.size}
            **Channels »** ${bot.channels.cache.size}
            **Emojis »** ${bot.emojis.cache.size}
            **Uptime »** ${duration}\n**Ping (Latency) »** \`${Math.round(bot.ws.ping)} ms\`

            💡 __**Bot Module Versions**__
            **Discord.js »** \`v${version}\`
            **Node.js »** \`${process.version}\`
            **Databases »** \`v7.1.1\`

            🖥 __**Usage**__
            **Memory Usage »** ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB
            **CPU Usage »** ${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%
            **Node CPU Usage »** ${(process.cpuUsage().user / 1024 / 1024).toFixed(2)}%

            **[Dev Website](https://dev.ntmnathan.com/)** | **[Invite](https://discordapp.com/oauth2/authorize?client_id=649805592059183134&scope=bot&permissions=117760)** | **[Hangout Server](https://discordapp.com/invite/G2rb53z)** | **[Vote on top.gg](https://top.gg/bot/649805592059183134/vote)**
            `)
            .setFooter(`To learn more about Server Tags, run t+about for special information`)

        message.channel.send(embedStats);
  
};

module.exports.help = {
  name: "botstats",
  aliases: ["bot", "stats"]
}
