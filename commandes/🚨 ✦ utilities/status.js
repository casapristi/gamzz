const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
const user=require("../../json/d/user.json");
module.exports={
    name:"status",category:"🚨 ✦ utilities",
    description:"To see the status of your friends",usage:"<prefix>status [mention]",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"utilities")){
            if(tools.language(message)==0){
                if(user[tools.user(message,args.join(" ")).user.id].isreg==false){
                    message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setDescription("⚠ __**This user isn't registered.**__\n`` DM register ``"))
                }else if(user[tools.user(message,args.join(" ")).user.id].status!=null){
                    message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setDescription(`\`\`\`${user[tools.user(message,args.join(" ")).user.id].status}\`\`\``).setTitle("👁️ STATUS OF "+tools.user(message,args.join(" ")).user.tag))
                }else{
                    message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setDescription("⚠ __**This user doesn't have any status.**__\n`` Create your own status with the command ["+tools.prefix(message)+"set-status] ``"))
                };
            }else{
                if(user[tools.user(message,args.join(" ")).user.id].isreg==false){
                    message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setDescription("⚠ __**Cet utilisateur ne s'est pas enregistré.**__\n`` DM register ``"))
                }else if(user[tools.user(message,args.join(" ")).user.id].status!=null){
                    message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setDescription(`\`\`\`${user[tools.user(message,args.join(" ")).user.id].status}\`\`\``).setTitle("👁️ STATUT DE "+tools.user(message,args.join(" ")).user.tag))
                }else{
                    message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setDescription("⚠ __**Cet utilisateur n'a pas de statut.**__\n`` Create your own status with the command ["+tools.prefix(message)+"set-status] ``"))
                };                
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