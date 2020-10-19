const {MessageEmbed}=require('discord.js');
const config=require("../../json/u/config.json");
module.exports={
    name:"pornhub-logo",aliases:["pl", "phl", "phlogo", "ph-logo", "pornhublogo"],category:"🌈 ✦ fun",
    description:"Change your text to the pornhub logo",usage:"pornhub-logo <text1> | <text2>",exemple:"pornhub-logo You | Tube",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"fun")){
            if(!args){
                if(tools.language(message)==0){
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou need to write arguments to perform this command.**\nTry this :\n```"+tools.prefix(message)+module.exports.exemple+"```"));
                }else{
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez écrire des arguments pour utiliser cette commande.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.exemple+"```"));
                };
            }else{
                message.channel.send(new MessageEmbed().setTitle("**👄 PORNHUB TEXT**").setColor(tools.color(message)).setImage(`https://api.alexflipnote.dev/pornhub?text=${args[0]}&text2=${args[1]}`).setTimestamp());
            };
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"fun\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category fun enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"fun\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category fun enable```"));
            };
        };
    }
};