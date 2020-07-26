 const Discord = require("discord.js");
 const db = require("quick.db");

 module.exports.run = async (bot, message, args) => {

  let tagname = args.join(" ");
  if(!tagname) return message.channel.send(`**Specify a Tag Name**\n*Note: Case Sensitive Tag Names!*`)
   
  let tags = await db.fetch(`tags_${message.guild.id}-${tagname}`)
  if(!tags) return message.channel.send(`**Tag Not Found** 🔎\n\n*Names are Case Sensitive. Make sure its spelt correctly!*`)

  let content = tags.content
  let createdby = tags.createdby
  let created = tags.created
  let name = tags.name
  let date = tags.date

    message.channel.send(`${content}`)
          
  }

  module.exports.help = {
  name:"tag",
  aliases: [""]
}