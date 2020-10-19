const{MessageEmbed}=require("discord.js");
const{get}=require("https");
const config=require("../../json/u/config.json");
module.exports={
    name:"poke",category:"🌈 ✦ fun",
    description:"To poke someone",usage:"poke <mention>",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"fun")==true){
            get("https://nekos.life/api/v2/img/poke",(res)=>{
                const{statusCode}=res;
                if(statusCode!=200){
                    if(tools.language(message)==0){
                        message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nAn error has occured with the api.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+tools.randomUsername(message)+"```"));
                    }else{
                        message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nUne erreure est survenue avec l'api.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+tools.randomUsername(message)+"```"));
                    };
                }else if(!tools.user(message,args.join(" "),true)){
                    if(tools.language(message)==0){
                        message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou need to mention someone to perform this command.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+tools.randomUsername(message)+"```"));
                    }else{
                        message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez mentionner quelqu'un pour utiliser cette commande.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+tools.randomUsername(message)+"```"));
                    };
                }else{
                    res.setEncoding("utf8");
                    let rawData="";
                    res.on("data",chunk=>{
                    rawData+=chunk;
                });
                res.on("end",()=>{
                    const parsedData=JSON.parse(rawData);
                    if(tools.language(message)==0){
                        message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setImage(parsedData.url).setTitle('**👇 POKE**').setDescription("<@"+message.author.id+"> poke <@"+tools.user(message,args.join(" "),true).user.id+">"));
                    }else{
                        message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setImage(parsedData.url).setTitle('**👇 POKE**').setDescription("<@"+message.author.id+"> tapote <@"+tools.user(message,args.join(" "),true).user.id+">"));
                    };
                });
            }}).on("error",(error)=>{
                console.error(error.message);
            });
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"fun\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category fun enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"fun\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category fun enable```"));
            };
        };
    }
};