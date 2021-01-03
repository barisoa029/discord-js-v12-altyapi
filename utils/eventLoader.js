const requestEvent = (event) => require(`./events/${ev}`);
module.exports = client => {
  client.on('message', function (ev) {reqEvent("message")(client, ev)});
  client.on('ready', function() {reqEvent("ready")(client)});
}
