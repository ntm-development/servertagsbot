const Discord = require('discord.js');

const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

  const resp = db.all().filter(data => data.ID.startsWith(`tags_${message.guild.id}`)).sort((a, b) => b.data - a.data);

    let i = 1;
  let content = "  ";

resp.forEach(resp => { 
let user = bot.users.find(m => m.id === resp.ID.split('_')[1])
if(user === null || undefined) user = "Unknown#0000";
content += `**\`${resp.data.name}\`** | **Owner »** ${resp.data.createdby}\n`;
});  

    const embed = new Discord.RichEmbed()
      .setTitle(`**${message.guild.name}'s Tags**`)
      .setThumbnail(`${message.guild.iconURL}?size=2048`)
      .setDescription(`${content || `**No Tags Created Yet :(**`}`)
      .setFooter(`Tags not in Order | Run t+taginfo <tagname> for Info`)
      .setColor("#6497c1")
    message.channel.send(embed);
  } 

  module.exports.help = {
  name:"taglist",
  aliases: [""]
}