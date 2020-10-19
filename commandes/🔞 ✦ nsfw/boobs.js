const{MessageEmbed}=require("discord.js");
const{get}=require("https");
const config=require("../../json/u/config.json");
module.exports={
    name:"boobs",category:"🔞 ✦ nsfw",
    description:"To send a boobs picture",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"nsfw")==true){
            get("https://nekos.life/api/v2/img/boobs",(res)=>{
                const{statusCode}=res;
                if(!message.channel.nsfw){
                    if(tools.language(message)==0){
                        message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou must be in a NSFW channel to perform this command.**\nTry to send tis command in a NSFW channel"));
                    }else{
                        message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez être dans un salon NSFW pour utiliser cette commande.**\nEssaye ça d'aller dans un salon NSFW"));
                    };
                    return; 
                };
                if(statusCode!=200){
                    if(tools.language(message)==0){
                        message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nAn error has occured with the api.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+"```"));
                    }else{
                        message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nUne erreure est survenue avec l'api.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+"```"));
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
                        message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setImage(parsedData.url).setTitle('**🔞 BOOBS**'));
                    }else{
                        message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setImage(parsedData.url).setTitle('**🔞 BOOBS**'));
                    };
                });
            }}).on("error",(error)=>{
                console.error(error.message);
            });
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"nsfw\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category fun enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"nsfw\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category fun enable```"));
            };
        };
    }
};