const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();
client.once('ready', () => {
	console.log('Ready!');
});
client.login(process./config.json.TOKEN);
