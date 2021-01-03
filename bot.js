const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const logs = require("discord-logs");
logs(client);
const ayarlar = require("./ayarlar.json");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.log(err);
  console.log(`${files.length} kadar komut bulundu, yükleniyor...`);
  files.forEach(f => {
    let cmds = require(`./komutlar/${f}`);
    console.log(`Komut yükleniyor: ${cmds.help.name}`);
    client.commands.set(cmds.help.name, cmds);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, cmds.help.name);
    });
  })
})

client.login(ayarlar.token);
