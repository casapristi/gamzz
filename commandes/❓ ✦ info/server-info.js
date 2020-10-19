const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
module.exports={
    name:"server-info",aliases:["serverinfo","si"],category:"❓ ✦ info",
    description:"To get infos from the server",usage:"<prefix>server-info",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"info")){
            const{guild}=message;
            const icon=guild.iconURL({dynamic:true});
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setTitle("**❓ INFOS OF "+guild.name.toUpperCase()+"**").setThumbnail(icon).addField("Owner",guild.owner.user.tag,true).addField("Region",guild.region,true).addField("Verification level",guild.verificationLevel,true).addField("System channel",guild.systemChannel.name,true).addField("AFK timeout",guild.afkTimeout,true).addField("Member count",guild.memberCount,true).addField("Server id",guild.id,true).addField("Emoji number",guild.emojis.cache.size,true).setColor(tools.color(message)).setTimestamp());
            }else{
                message.channel.send(new MessageEmbed().setTitle("**❓ INFOS OF "+guild.name.toUpperCase()+"**").setThumbnail(icon).addField("Fondateur",guild.owner.user.tag,true).addField("Région",guild.region,true).addField("Niveau de vérification",guild.verificationLevel,true).addField("Salon de système",guild.systemChannel.name,true).addField("Délai AFK",guild.afkTimeout,true).addField("Nombre de membres",guild.memberCount,true).addField("Id du serveur",guild.id,true).addField("Nombre d'emojis",guild.emojis.cache.size,true).setColor(tools.color(message)).setTimestamp());
            };
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"info\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category info enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"info\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category info enable```"));
            };
        };
    }
};