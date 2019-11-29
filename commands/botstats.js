const { version, RichEmbed } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (bot, message, args) => { 

   const duration = moment
    .duration(bot.uptime)
    .format(" D [days], H [hrs], m [mins], s [secs]");
  
        const embedStats = new RichEmbed()
            .setTitle("**Server Tags Stats**")
            .setColor("e0e0d2")
            .setThumbnail(`https://i.imgur.com/kCPLvwj.png`)
            .setDescription(`📊 __**Statistics**__\n**Users »** ${bot.users.size.toLocaleString()}\n**Servers »** ${bot.guilds.size.toLocaleString()}\n**Channels »** ${bot.channels.size.toLocaleString()}\n**Uptime »** ${duration}\n**Ping (Latency) »** \`${Math.round(bot.ping)} ms\`\n\n💡 __**Bot Module Versions**__\n**Discord.js »** \`v${version}\`\n**Node.js »** \`${process.version}\`\n**Databases »** \`v7.0.0-b21\``)
            .setFooter(`To learn more about Server Tags, run t+about for special information`)
        message.channel.send(embedStats)
  
};

module.exports.help = {
  name:"botstats",
  aliases: ["bot", "stats"]
}