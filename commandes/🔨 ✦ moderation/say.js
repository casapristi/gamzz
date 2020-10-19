const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
module.exports={
    name:"say",category:"🔨 ✦ moderation",
    description:"To let me say something",usage:"<prefix>say <sentence>",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"moderation")){
            message.delete(message);
            if(tools.language(message)==0){
                if(args.join(" ").includes("@everyone")||args.join(" ").includes("@here"))return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou can't use @everyone or @here.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" hello```"));
            }else{
                if(args.join(" ").includes("@everyone")||args.join(" ").includes("@here"))return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous ne pouvez pas @everyone ou @here.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" salut```"));
            };
            message.channel.send(args.join(" "));
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"moderation\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category moderation enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"moderation\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category moderation enable```"));
            };
        };
    }
};