const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, color) => {
  
  	try{
  	let msgping1 = new Date();
      let msgping2 = new Date() - message.createdAt;
		const m = await message.channel.send('**Checking Ping, Please wait...**');
      
		const embed = new RichEmbed()
    .setColor(`#ba625f`)
    .setTitle("**Server Tags**")
    .setDescription(`**Here is the Current Ping**\n\n\n**⏱ Time »** **\`${m.createdTimestamp - message.createdTimestamp} ms\`**\n\n**📈 Latency »** **\`${msgping2} ms\`**\n\n**💓 API »** **\`${Math.floor(client.ping)} ms\`**`)
    .setTimestamp(new Date())
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL}`);
		return m.edit({embed: embed});
      
	}catch(e){
		return message.channel.send(`Error Occurred :( \n${e.message}`);
	}

}

module.exports.help = {
  name:"ping",
  aliases: ["latency"]
}