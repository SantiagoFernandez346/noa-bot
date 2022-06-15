const Discord = require('discord.js');
require ("dotenv").congif()

const TOKEN = "OTg2Njc1NDE2NjU3OTY1MDU2.GZL5ga.RmTmbGgw1nRNT1n36SR-2MbnXfc-Q2u8VRSnws"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on('ready', () => {
	console.log(`Looged in ass ${client.user.tag}`);
});

client.once("messageCreate", (message) => {
    if (message.content == "noa"){
        message.reply("KAWAIIII")
    }
})

client.login(process.env.TOKEN);