const requestEvent = (event) => require(`./events/${ev}`);
module.exports = client => {
  client.on('message', function (ev) {requestEvent("message")(client, ev)});
  client.on('ready', function() {requestEvent("ready")(client)});
}
