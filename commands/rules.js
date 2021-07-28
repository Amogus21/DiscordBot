module.exports = {
    name: 'command',
    description: "Server rules!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.Message.Embed()
        .setColor('304281')
        .setTitle('Rules')
        .setURL('https://discord.com/terms')
        .setDescription('Global Rules')
        .addFields(
            {name:'Rule 1', value:'Common Sense'},
            {name:'Rule 2', value:'No spamming, flooding, racism, threats, leaking personal information, etc'},
            {name:'Rule 3', value:''},
        )
    }
}