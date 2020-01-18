const discord = require("discord.js");
const client = new discord.Client();
var prefix = "//";

client.login("NjY0OTk1NDEyMTA4NzcxMzI4.XiBoHA.HO8_MiwppWq-Kl3tejheBz5cf2Q");

client.on("guildMemberAdd", user =>{
    let joinEmbed = new discord.RichEmbed()
    .setColor("#49ff00")
    .setAuthor(user.user.username, user.user.displayAvatarURL)
    .setDescription(":wave: Hey, bienvenue" + user + ", sur __**" + user.guild.name + "**__ !")
    .setFooter("N'oublie pas de lire les règle.")
    user.guild.channels.get("658986236215820318").send(joinEmbed)
    user.addRole("663429697140424705")
});

client.on("guildMemberRemove", user =>{
    let leaveEmbed = new discord.RichEmbed()
    .setColor("#f00707")
    .setAuthor(user.user.username, user.user.displayAvatarURL)
    .setDescription(user.user.username +  "à quitté " + user.guild.name + ":slight_frown: ...sniff !")
    .setFooter("Adieu...")
    user.guild.channels.get("658986236215820318").send(leaveEmbed)
})

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "salut"){
        message.channel.send("Bonjour " + message.author + " !")
    }
    if(message.content === prefix + "comment tu vas"){
        message.channel.send("Bien et toi ?")
    }
    if(message.content === prefix + "règle"){
        message.channel.send("Le règlement n'est pas encore disponible.")
    }
});