const { Client, Collection } = require("discord.js");
const DBL = require("dblapi.js");

const bot = new Client({
  disableMentions: 'everyone',
  messageCacheMaxSize: 50,
  messageCacheLifetime: 60,
  messageSweepInterval: 120,
  partials: [
      'MESSAGE',
      'USER',
      'GUILD_MEMBER',
      'REACTION',
      'CHANNEL'
  ],
  ws: {
      intents: [
      'GUILDS',
      'GUILD_MESSAGES',
      'GUILD_VOICE_STATES',
      'GUILD_MEMBERS',
      'GUILD_PRESENCES',
      'GUILD_BANS',
      'GUILD_EMOJIS',
      'DIRECT_MESSAGES',
      'GUILD_INVITES',
      'GUILD_WEBHOOKS',
      'GUILD_MESSAGE_REACTIONS',
    ],
  },
});

const dbl = new DBL(process.env.DBLTOKEN, bot);

bot.commands = new Collection();
bot.aliases = new Collection();

dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Server Tags » ${e}`);
})

bot.login(process.env.TOKEN);

require("./handler/commands")(bot);
require("./handler/events")(bot);