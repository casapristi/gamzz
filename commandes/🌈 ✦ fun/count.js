const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
const server=require("../../json/d/server.json");
module.exports={
    name:"count",category:"🌈 ✦ fun",
    description:"To count",usage:"count",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"fun")){
            server[message.guild.id].server.count++;
            const embed=new MessageEmbed().setColor(tools.color(message)).setTimestamp().setThumbnail(tools.icon(message));
            if(tools.language(message)){
                embed.setTitle("**🔢 COUNT**").setDescription("**The counter is now on : ` "+server[message.guild.id].server.count+" `**");
            }else{
                embed.setTitle("**🔢 COMPTEUR**").setDescription("**Le compteur est maintenant à : ` "+server[message.guild.id].server.count+" `**");
            };
            message.channel.send(embed);
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"fun\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category fun enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"fun\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category fun enable```"));
            };
        };
    }
};