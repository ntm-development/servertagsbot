const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("**Server Tags Help**")
    .setDescription(`➜ For help, join our **[Support Server](https://discord.gg/v82EGYX)**\n➜ **t+about** for Information`)
    .setThumbnail(`https://i.imgur.com/kCPLvwj.png`)
    .addField("**Tags**", `
    **\`t+tag <name>\`**
    **\`t+addtag <name> <content>\`**
    **\`t+edittag <name> <content>\`**
    **\`t+deletetag <name>\`**
    **\`t+taginfo <name>\`**
    **\`t+taglist\`**
              `, true)
    .addField("**Other**", `
    **\`t+help\`**
    **\`t+avatar <user>\`**
    **\`t+about\`**
    **\`t+botstats\`**
    **\`t+ping\`**
    **\`t+say\`**
    `, true)
    .setColor("#E0E0D2")
    .setFooter(`Prefix » n! (changeable)`)
    message.channel.send(embed)

}

module.exports.help = {
  name:"help",
  aliases: ["servertags", "tags"]
}