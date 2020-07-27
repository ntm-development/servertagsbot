const { MessageEmbed } = require('discord.js');
const db = require(`quick.db`);
const moment = require("moment");
const { stripIndents } = require('common-tags');
const yes = ["yes", "y", "ye", "yeah", "yup", "yea", "ya"];
const no = ["no", "n", "nah", "nope", "nop"];

exports.run = async (client, message, args, color) => {

  try {

    if (message.author.bot) return message.channel.send(`**Bots cannot use the Tags System!**`)

    let name = args[0]; 
      if (!name) return message.channel.send("You must specify the name of the Tag to delete.")

    let tags = await db.fetch(`tags_${message.guild.id}-${name}`);
  
    let createdbyid = tags.createdbyid;
      if (message.author.id !== createdbyid) return message.channel.send(`**Cannot Delete this Tag!** ❌\n\n*You do not own this Tag!*`)

    let confirmembed = new MessageEmbed()
      .setTitle(`**Delete Tag?**`)
      .setDescription(stripIndents`
      **Are you sure you want to Delete this Tag?**
      **\`${name}\`**
      
      *Type **\`yes\`** ✅ to **confirm** this or **\`no\`** to Decline ❌*
      ***Typing \`yes\` will result in the Tag Data to disappear.***
      `)
      .setColor(`#f67b63`)

    message.channel.send(confirmembed);
    
  const hit = await verifyText(message.channel, message.author);
    if (hit) {
          db.delete(`tags_${message.guild.id}-${name}`);

    message.channel.send(`Successfully Deleted Tag **» ${name}** ✅`);

    } else {
      message.channel.send(`**Cancelled Tag Deletion...** *I understand the reasons!*`);
    }

  } catch (e){
    if (e.message === "Cannot read property 'content' of null")
    return message.channel.send(`**Tag Not Found** 🔎\n\n*Names are Case Sensitive. Make sure its spelt correctly!*`);
  };

  async function verifyText(channel, user, time = 30000) {

    const filter = res => {
      const value = res.content.toLowerCase();
      return (
        res.author.id === user.id && (yes.includes(value) || no.includes(value))
      );
    };

    const verify = await channel.awaitMessages(filter, {
      max: 1,
      time
    });

    if (!verify.size) return 0;

    const choice = verify.first().content.toLowerCase();
      if (yes.includes(choice)) return true;
      if (no.includes(choice)) return false;

    return false;
    
  }

}

module.exports.help = {
  name: "deletetag",
  aliases: ["delete"]
}
