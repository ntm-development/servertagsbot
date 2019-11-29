const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  const user = message.mentions.users.first() || client.users.get(args[0]) ||  message.author;
  
  const embed = new Discord.RichEmbed()
  
  .setTitle(`**${user.username}#${user.discriminator}'s avatar**`) 
  .setColor("#e0e0d2")
  .setImage(user.displayAvatarURL) 
  
  message.channel.send(embed)
  
}

module.exports.help = {
  name:"avatar",
  aliases: ["icon"]
}