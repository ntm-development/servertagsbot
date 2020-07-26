const Discord = require('discord.js');

exports.run = (bot, message, args, func) => {

const embed = new Discord.MessageEmbed()
    .setColor('#e0e0d2')
    .setTitle('**Server Tags**')
    .setDescription(`
Server Tags is a Discord Bot that focuses on the creation of tags, recalling them and viewing a list of them.

**[Developer Site](https://dev.ntmnathan.com/) »** The Developer Website
**[Github Repo](https://github.com/NTMNathan/servertagsbot) »** Official Repo of the Bot
**[Support Server](https://discordapp.com/invite/G2rb53z) »** Official Community Server
**[Donations](https://www.patreon.com/nathantominecraft) »** Be kind and Donate!
**[Invite](https://discordapp.com/oauth2/authorize?client_id=649805592059183134&scope=bot&permissions=117760) »** Invite Server Tags to your Server
`)
    .setThumbnail('https://i.imgur.com/kCPLvwj.png')
    .setImage('https://i.imgur.com/5qnd7Mb.png')
    .setFooter('Developed by NTM Development');
    message.channel.send({embed});

}
module.exports.help = {
  name:"about",
  aliases: ["info"]
}
