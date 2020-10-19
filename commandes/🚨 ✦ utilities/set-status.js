const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
const user=require("../../json/d/user.json");
const fs=require("fs");
module.exports={
    name:"set-status",aliases:["ss"],category:"🚨 ✦ utilities",
    description:"To set your bot status",usage:"<prefix>set-status <new status>",exemple:"set-status i love potatoes",
    run:async (client,message,args,tools)=>{
        if(tools.category(message,"utilities")){
            user[message.author.id].status=args.join(" ");
            fs.writeFile("./json/d/user.json",JSON.stringify(user,null,4),(err)=>{if(err) console.log("[ERROR]"+err)});
            if(!args[0]){
                if(tools.language(message)==0){
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou must write arguments**\nTry that :\n```"+tools.prefix(message)+module.exports.exemple+"```"));
                }else{
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous devez écrire des arguments**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.exemple+"```"));
                };
            };
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setTitle("👁️ NEW STATUS").setThumbnail(tools.icon(message)).setTimestamp().setDescription("**Status set :**\n```" + args.join(" ") + "\n```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setTitle("👁️ NOUVEAU STATUT").setThumbnail(tools.icon(message)).setTimestamp().setDescription("**Statut défini :**\n```" + args.join(" ") + "\n```"));
            };
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"utilities\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category utilities enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"utilities\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category utilities enable```"));
            };
        };
    }
};