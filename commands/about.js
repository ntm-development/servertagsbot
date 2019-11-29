const Discord = require('discord.js');

exports.run = (bot, message, args, func) => {

const embed = new Discord.RichEmbed()
    .setColor('#e0e0d2')
    .setTitle('**Server Tags**')
    .setDescription('Server Tags is a Discord Bot that focuses on the creation of tags, recalling them and viewing a list of them.\n\n**[Developer Site](https://ntmnathan.glitch.me/) »** The Bot Dev\'s Site\n**[Github Repo](https://github.com/NTMNathan/servertagsbot) »** Official Repo of the Bot\n**[Support Server](https://discord.gg/rvrFHCJ) »** Official Community Server\n**[Donations](https://www.patreon.com/nathantominecraft) »** Be kind and Donate!')
    .setThumbnail('https://i.imgur.com/kCPLvwj.png')
    .setImage('https://i.imgur.com/RICdATH.png')
    .setFooter('Developed by NTM Nathan');
    message.channel.send({embed});

}
module.exports.help = {
  name:"about",
  aliases: ["info"]
}