const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
module.exports={
    name:"ping",category:"❓ ✦ info",
    description:"To see my ping",usage:"<prefix>ping",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"info")){
            if(tools.language(message)==0){
                let rep=["ping of the discord API","discord API ping"]
                let randomrep=rep[Math.floor(Math.random() * rep.length)]
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setTitle('**💬 ✦ PING :**').setDescription(tools.emoji(client,"719176623068545115")+" "+'Pinging...').setThumbnail(tools.icon(message)).setTimestamp()).then(m=>{
                    let ping=m.createdTimestamp-message.createdTimestamp;
                    m.edit(new MessageEmbed().setColor(tools.color(message)).setTitle('**💬 ✦ PING :**').addField(tools.emoji(client,"719174437311610960")+' • Bot ping :',"``"+ping+"`` ms",true).addField(tools.emoji(client,"719175479768252447")+" • "+randomrep+" :","``"+Math.round(client.ws.ping)+"`` ms",true).setThumbnail(tools.icon(message)).setTimestamp());
                });
            }else{
                let rep=["Ping de la discord API","Ping de l'API de discord"];
                let randomrep=rep[Math.floor(Math.random() * rep.length)];
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setTitle('**💬 ✦ PING :**').setDescription(tools.emoji(client,"719176623068545115")+" "+'Pinging...').setThumbnail(tools.icon(message)).setTimestamp()).then(m=>{
                    let ping=m.createdTimestamp-message.createdTimestamp;
                    m.edit(new MessageEmbed().setColor(tools.color(message)).setTitle('**💬 ✦ PING :**').addField(tools.emoji(client,"719174437311610960")+' • Ping du bot :',"``"+ping+"`` ms",true).addField(tools.emoji(client,"719175479768252447")+" • "+randomrep+" :","``"+Math.round(client.ws.ping)+"`` ms",true).setThumbnail(tools.icon(message)).setTimestamp());
                });
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