const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports.run = async (bot, message, args) => {

    let embed = new MessageEmbed()
      .setTitle("**Server Tags Help**")
      .setDescription(`➜ For help, join our **[Support Server](https://discord.com/invite/G2rb53z)**\n➜ **t+about** for Information`)
      .setThumbnail(`https://i.imgur.com/kCPLvwj.png`)
      .addField("**Tags**", stripIndents`
      **\`t+tag <name>\`**
      **\`t+addtag <name> <content>\`**
      **\`t+edittag <name> <content>\`**
      **\`t+deletetag <name>\`**
      **\`t+taginfo <name>\`**
      **\`t+taglist\`**
      `, true)
      .addField("**Miscallaneous**", stripIndents`
      **\`t+help\`**
      **\`t+avatar <user>\`**
      **\`t+about\`**
      **\`t+botstats\`**
      **\`t+ping\`**
      **\`t+say\`**
      `, true)
      .setColor("#E0E0D2")
      .setFooter(`Prefix » t+`)

    message.channel.send(embed);

}

module.exports.help = {
  name: "help",
  aliases: ["servertags", "tags"]
}