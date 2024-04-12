const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    message.reply({
        content: "Hi from Bot", 
    })
});

client.on("interactionCreate", interaction => {
    interaction.reply("pongg!!")
})

client.login(
    "MTIyODM1MzY1MTk3MDY3MDYzMg.GsB1sJ.HHcPJCf_btWIaYeP_c0GjP449IXqQna_wUCrow"
);
