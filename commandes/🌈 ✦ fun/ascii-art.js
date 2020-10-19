const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
const figlet=require("figlet");
module.exports={
    name:"ascii-art",aliases:["ascii"],category:"🌈 ✦ fun",
    description:"To convert your text to ascii art",usage:"ascii-art <text>",exemple:"ascii-art hi !",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"fun")==true){
            if(args.join(" ").length>100){
                if(tools.language(message)==0){
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe command can't reach more than 100 characters.**\nTry this :\n```"+tools.prefix(message)+module.exports.exemple+"```"));
                }else{
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa commande ne peut pas atteindre plus de 100 caractères.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.exemple+"```"));
                };
            }else if(!args){
                if(tools.language(message)==0){
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou need to write arguments to perform this command.**\nTry this :\n```"+tools.prefix(message)+module.exports.exemple+"```"));
                }else{
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez écrire des arguments pour utiliser cette commande.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.exemple+"```"));
                };
            };
            figlet(`${args.join(" ")}`,function(err,data){message.channel.send(`${data}`,{code:'AsciiArt'})});
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"fun\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category fun enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"fun\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category fun enable```"));
            };
        };
    }
};