const { MessageEmbed } = require('discord.js');
const db = require(`quick.db`)
const moment = require("moment");

exports.run = async (client, message, args, color) => {
 try {
    
  let name = args[0]; 
  let tags = await db.fetch(`tags_${message.guild.id}-${name}`)
  
  let value = args.splice(1).join(" ")
   let content = tags.content
  let createdby = tags.createdby
  let createdbyid = tags.createdbyid
  let created = tags.created
  let names = tags.name
  let date = tags.date
  
    if (message.author.id !== createdbyid) return message.channel.send(`**Cannot Edit this Tag!** ❌\n\n*You do not own this Tag!*`)
        if (message.author.bot) return message.channel.send(`**Bots cannot use the Tags System!**`)

      if (!value) return message.channel.send("You must specify new content for this Tag!\n\n**This will not Change the Name of the Tag**")

        db.set(`tags_${message.guild.id}-${name}.content`, value);
   
        let embed = new Discord.MessageEmbed()
        .setTitle(`**Tags**`)
        .setDescription(`**Tag Edited!** 📝\n\n**Tag Name »** ${name}\n${value}`)
        .setColor(`#f9f08e`)
        .setFooter(`Note: This tag can only be accessed on this Server!`, `${message.guild.iconURL({dynamic: true, size: 2048})}`)
       
        message.channel.send(embed)
   
 } catch (e){
        if (e.message === "Cannot read property 'content' of null")
        return message.channel.send(`**Tag Not Found** 🔎\n\n*Names are Case Sensitive. Make sure its spelt correctly!*`)

  }
}

  module.exports.help = {
  name:"edittag",
  aliases: ["edit"]
}