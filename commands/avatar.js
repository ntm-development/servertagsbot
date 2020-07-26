const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  const user = message.mentions.users.first() || client.users.cache.get(args[0]) ||  message.author;
  
  const embed = new Discord.MessageEmbed()
  
  .setTitle(`**${user.username}#${user.discriminator}'s avatar**`) 
  .setColor("#e0e0d2")
  .setImage(user.displayAvatarURL({dynamic: true, size: 2048})) 
  
  message.channel.send(embed)
  
}

module.exports.help = {
  name:"avatar",
  aliases: ["icon"]
}