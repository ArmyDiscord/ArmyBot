const Discord = require("discord.js");
const client = new Discord.Client();

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("ArmyBot, !help");
    console.log("Bot Prêt !");
});

bot.login ("process.env.TOKEN")
