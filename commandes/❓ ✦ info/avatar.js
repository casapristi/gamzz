const{MessageEmbed}=require('discord.js');
const config=require("../../json/u/config.json");
module.exports={
    name:"avatar",category:"❓ ✦ info",
    description:"To get the avatar of someone",usage:"<prefix>avatar [mention]",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"info")){
            if(tools.language(message)==0){
                return message.channel.send(new MessageEmbed().setColor(tools.color(message)).setImage(tools.user(message,args.join(" ")).user.displayAvatarURL({size:2048,dynamic:true,fromat:"png"})).setTitle(`🖼️ AVATAR OF ${tools.user(message,args.join(" ")).user.tag.toUpperCase()}`));
            }else{
                return message.channel.send(new MessageEmbed().setColor(tools.color(message)).setImage(tools.user(message,args.join(" ")).user.displayAvatarURL({size:2048,dynamic:true,fromat:"png"})).setTitle(`🖼️ AVATAR DE ${tools.user(message,args.join(" ")).user.tag.toUpperCase()}`));
            }
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"info\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category info enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"info\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category info enable```"));
            };
        };
    }
};