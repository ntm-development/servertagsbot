const { readdirSync } = require('fs');

module.exports = bot => {
    const events = readdirSync('./events/');
    for (let event of events) {
        let file = require(`../events/${event}`);
        bot.on(event.split('.')[0], (...args) => file(bot, ...args));
        delete require.cache[require.resolve(`../events/${event}`)];
    }
}