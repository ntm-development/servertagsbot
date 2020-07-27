const config = require('../config.json')

module.exports = async (bot, message) => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = config.prefix;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandFile;

    if (bot.commands.has(cmd)) {
        commandFile = bot.commands.get(cmd);
    
    } else if (bot.aliases.has(cmd)) {
        commandFile = bot.commands.get(bot.aliases.get(cmd));

    }
  
    if (!message.content.startsWith(prefix)) return;

    try {
       
        commandFile.run(bot, message, args);
      
    } catch (e) {
      
    }
}

