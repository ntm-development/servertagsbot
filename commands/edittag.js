const { MessageEmbed } = require('discord.js');
const db = require(`quick.db`);
const moment = require("moment");
const { stripIndents } = require('common-tags');

exports.run = async (client, message, args, color) => {

  try {
    if (message.author.bot) return message.channel.send(`**Bots cannot use the Tags System!**`)

    let name = args[0]; 
    let tags = await db.fetch(`tags_${message.guild.id}-${name}`);
    
    let value = args.splice(1).join(" ");
    if (!value) return message.channel.send("You must specify new content for this Tag!\n\n**This will not Change the Name of the Tag**");

    let createdbyid = tags.createdbyid;
      if (message.author.id !== createdbyid) return message.channel.send(`**Cannot Edit this Tag!** ❌\n\n*You do not own this Tag!*`)

        db.set(`tags_${message.guild.id}-${name}.content`, value);
   
        let embed = new MessageEmbed()
          .setTitle(`**Tags**`)
          .setDescription(stripIndents`
          **Tag Edited!** 📝
          
          **Tag Name »** ${name}
          ${value}
          `)
          .setColor(`#f9f08e`)
          .setFooter(`Note: This tag can only be accessed on this Server!`, `${message.guild.iconURL({dynamic: true, size: 2048})}`)
       
        message.channel.send(embed);
   
  } catch (e){
    if (e.message === "Cannot read property 'content' of null")
    return message.channel.send(`**Tag Not Found** 🔎\n\n*Names are Case Sensitive. Make sure its spelt correctly!*`)
  }

}

module.exports.help = {
  name: "edittag",
  aliases: ["edit"]
}