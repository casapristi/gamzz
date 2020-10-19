const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
module.exports={
    name:"purge",aliases:["clear"],category:"🔨 ✦ moderation",
    description:"To delete a lot of messages",usage:"<prefix>purge <number>",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"moderation")){
            if(tools.language(message)==0){
                if(isNaN(args[0]))return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("💢 Erreur\n**You should write numbers to perform this command**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+Math.floor(Math.random()*50-1)+"```"));
                if(!args[0])return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("💢 Erreur\n**You should write arguments to perform this command**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+Math.floor(Math.random()*50-1)+"```"));
                if(parseInt(args[0])>100)return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("💢 Erreur\n**The command must reach less than 100 characters**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+Math.floor(Math.random()*50-1)+"```"));
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setTitle("**🕳 PURGE**").setDescription(`\` ${args[0]} \` messages has been deleted.`));
            }else{
                if(isNaN(args[0]))return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("💢 Erreur\n**Vous devez évrire des chiffres pour utiliser cette commande**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+Math.floor(Math.random()*50-1)+"```"));
                if(!args[0])return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("💢 Erreur\n**Vous devez écrire des arguments pour utiliser cette commande**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+Math.floor(Math.random()*50-1)+"```"));
                if(parseInt(args[0])>100)return message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("💢 Erreur\n**Cette commande doit faire moins de 100 caractères**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+Math.floor(Math.random()*50-1)+"```"));
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setTitle("**🕳 PURGE**").setDescription(`\` ${args[0]} \` messages ont étés supprimés.`));
            }
            message.channel.bulkDelete(args[0])
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"moderation\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category moderation enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"moderation\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category moderation enable```"));
            };
        };
    }
};