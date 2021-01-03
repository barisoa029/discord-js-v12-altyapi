exports.run = async (client, msg, args) => {
  msg.reply("Pong!");
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  category: "bot"
}

exports.help = {
  name: "ping",
  description: "Pong!",
  usage: "ping"
}
