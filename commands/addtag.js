const Discord = require('discord.js');
const db = require(`quick.db`)
const moment = require("moment");

exports.run = async (client, message, args, color) => {

  let name = args[0];
       if (!name) return message.channel.send("You must specify a Tag Name...\n\n*Only __single word tag names__ can be used!*")
  let value = args.splice(1).join(" ")
      if (!value) return message.channel.send("You'll need to provide the content for this Tag!")
         if (message.author.bot) return message.channel.send(`**Bots cannot use the Tags System!**`)


  let content = value
  let createdby = message.author.username
  let createdbyid = message.author.id
  let names = name
  let date = moment().format('MMMM Do YYYY, h:mm:ss a')
    
  let tags = await db.fetch(`tags_${message.guild.id}-${name}`)

    if (tags) return message.channel.send(`**Error Whilst Creating Tag** ❌\n\n*The Tag with the name **\`${name}\`** already exists on ${message.guild.name}*`);

        db.set(`tags_${message.guild.id}-${name}.name`, names)
        db.set(`tags_${message.guild.id}-${name}.content`, content)
        db.set(`tags_${message.guild.id}-${name}.createdby`, createdby)
        db.set(`tags_${message.guild.id}-${name}.createdbyid`, createdbyid)
        db.set(`tags_${message.guild.id}-${name}.date`, date)
        
        let embed = new Discord.MessageEmbed()
        .setTitle(`**Tags**`)
        .setDescription(`**Tag Created Successfully!** ✅\n\n**Tag Name »** ${name}\n*View All Tags with **t+taglist***`)
        .setColor(`#39db69`)
        .setFooter(`Note: This tag can only be accessed on this Server!`, `${message.guild.iconURL({dynamic: true, size: 2048})}`)
       
        message.channel.send(embed)
    
}

  module.exports.help = {
  name:"addtag",
  aliases: ["add"]
}
