const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
const botclient=require("../../json/d/client.json");
module.exports={
    name:"daily-game",aliases:["dg"],category:"🎮 ✦ games",
    description:"To view the daily game",usage:"<prefix>daily-game",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"games")){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setTitle("**☀ DAILY GAME**").setDescription("**The daily game is :\n```fix\n"+botclient.dailygame+"```**"));
            }else{
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setTitle("**☀ JEU DU JOUR**").setDescription("**Le jeu du jour est :\n```fix\n"+botclient.dailygame+"```**"));
            };
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"games\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category games enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"games\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category games enable```"));
            };
        };
    }
};