const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
module.exports={
    name:"ban",category:"🔨 ✦ moderation",
    description:"To ban someone",usage:"<prefix>ban <user>",
    run:async(client,message,args,tools)=>{
        try{
            if(tools.category(message,"moderation")){
                if(tools.language(message)==0){
                    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou don't have the permission to perform this command.**\nPermission required :\n```BAN_MEMBERS```"));
                    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nI don't have the permission to perform this command.**\nPermission required :\n```BAN_MEMBERS```"));
                    if(!args[0])return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou must write arguments**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" "+rle+"```"));
                }else{
                    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous n'avez pas la permission d'effectuer cette commande.**\nPermission requise :\n```BAN_MEMBERS```"));
                    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous n'avez pas la permission d'effectuer cette commande.**\nPermission requise :\n```BAN_MEMBERS```"));
                    if(!args[0])return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous devez écrire des arguments**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+rlf+"```"));
                };
                try{
                    tools.user(message,args.join(" "),true).ban().then(member=>{
                        if(tools.language(message)==0){
                            message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setTitle("**🔨 BAN**").setDescription(`\` ${member.user.username} \` Has been banned by \` ${message.author.username} \``).setImage("https://i.pinimg.com/originals/75/cd/f6/75cdf69a0efeaa22fe85fe66254e4330.gif"));
                        }else{
                            message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setTitle("**🔨 BAN**").setDescription(`\` ${member.user.username} \` viens de se faire banir par \` ${message.author.username} \``).setImage("https://i.pinimg.com/originals/75/cd/f6/75cdf69a0efeaa22fe85fe66254e4330.gif"));
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