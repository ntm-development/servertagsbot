const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (bot, message, args, func) => {

  const embed = new MessageEmbed()
    .setColor('#e0e0d2')
    .setTitle('**Server Tags**')
    .setDescription(stripIndents`
    Server Tags is a Discord Bot that focuses on the creation of tags, recalling them and viewing a list of them.

    **[Developer Site](https://dev.ntmnathan.com/) »** The Developer Website
    **[GitHub Repo](https://github.com/ntm-development/servertagsbot) »** Official Repo of the Bot
    **[Support Server](https://discord.com/invite/G2rb53z) »** Official Community Server
    **[Donations](https://www.patreon.com/nathantominecraft) »** Be kind and Donate!
    **[Invite](https://discordapp.com/oauth2/authorize?client_id=649805592059183134&scope=bot&permissions=117760) »** Invite Server Tags to your Server
    `)
    .setThumbnail('https://i.imgur.com/kCPLvwj.png')
    .setImage('https://i.imgur.com/5qnd7Mb.png')
    .setFooter('Developed by NTM Development');

  message.channel.send({embed});

}

module.exports.help = {
  name: "about",
  aliases: ["info"]
}
