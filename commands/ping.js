const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args, color) => {
  try {
    const msg = await message.channel.send("**Pong! Please wait...**");
    msg.edit(
      `Here is the Current Ping.\n\n**📈 Latency » \`${msg.createdTimestamp -
        message.createdTimestamp}\` ms**\n**💓 API » \`${Math.round(
        client.ws.ping
      )}\` ms**`
    );
  } catch (e) {
    return message.channel.send(`Error Occurred :( \n${e.message}`);
  }
};

module.exports.help = {
  name: "ping",
  aliases: ["latency"]
};
