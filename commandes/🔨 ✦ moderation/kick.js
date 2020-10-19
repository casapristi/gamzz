const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
module.exports={
    name:"kick",category:"🔨 ✦ moderation",
    description:"To kick someone",usage:"<prefix>kick <user>",
    run:async(client,message,args,tools)=>{
        try{
            if(tools.category(message,"moderation")){
                if(tools.language(message)==0){
                    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou don't have the permission to perform this command.**\nPermission required :\n```KICK_MEMBERS```"));
                    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nI don't have the permission to perform this command.**\nPermission required :\n```KICK_MEMBERS```"));
                    if(!args[0])return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou must write arguments**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" "+rle+"```"));
                }else{
                    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous n'avez pas la permission d'effectuer cette commande.**\nPermission requise :\n```KICK_MEMBERS```"));
                    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous n'avez pas la permission d'effectuer cette commande.**\nPermission requise :\n```KICK_MEMBERS```"));
                    if(!args[0])return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous devez écrire des arguments**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+rlf+"```"));
                };
                try{
                    tools.user(message,args.join(" "),true).kick().then(member=>{
                        if(tools.language(message)==0){
                            message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setTitle("**🔨 KICK**").setDescription(`\` ${member.user.username} \` Has been kicked by \` ${message.author.username} \``));
                        }else{
                            message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setTitle("**🔨 KICK**").setDescription(`\` ${member.user.username} \` viens de se faire expulser par \` ${message.author.username} \``));
                        };
                    });
                }catch(e){
                    if(tools.language(message)==0){
                        message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("💢 Error\n**Cannot find the user "+args.join(" ")+".**\nAre you sure you have write the correct username ?"));
                    }else{
                        message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("💢 Erreur\n**je ne vois pas qui est "+args.join(" ")+".**\nEs-tu sure de bien avoir écris le pseudonyme correctement ?"));
                    };
                };
            }else{
                if(tools.language(message)==0){
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"moderation\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category moderation enable```"));
                }else{
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"moderation\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category moderation enable```"));
                };
            };
        }catch(e){};
    }
};