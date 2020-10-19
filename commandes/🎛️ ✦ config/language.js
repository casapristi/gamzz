const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
const server=require("../../json/d/server.json");
const le=["fr","french"];
const lf=["en","english"];
const rle=le[Math.floor(Math.random()*le.length)];
const rlf=lf[Math.floor(Math.random()*lf.length)];
const fs=require("fs");
module.exports={
    name:"language",aliases:["lan"],category:"🎛️ ✦ config",
    description:"To change my language",usage:"<prefix>language <language>",
    run:async(client,message,args,tools)=>{
        if(!message.member.hasPermission("ADMINISTRATOR")){
            if(tools.language(message)==0){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou don't have the permission to perform this command.**\nPermission required :\n```ADMINISTRATOR```"));
            }else{message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous n'avez pas la permission d'effectuer cette commande.**\nPermission requise :\n```ADMINISTRATOR```"))};
            return;
        };
        if(!args[0]){
            if(server[message.guild.id].server.language==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou must write arguments**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" "+rle+"```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous devez écrire des arguments**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+rlf+"```"));
            };
        }else if(server[message.guild.id].server.language==1&&args[0]=="fr"){
            message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous ne pouvez pas choisir un langage que vous avez déjà**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+rlf+"```"));
        }else if(server[message.guild.id].server.language==1&&args[0]=="french"){
            message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous ne pouvez pas choisir un langage que vous avez déjà**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+rlf+"```"));
        }else if(server[message.guild.id].server.language==0&&args[0]=="en"){
            message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou can't choose that language**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" "+rlf+"```"));
        }else if(server[message.guild.id].server.language==0&&args[0]=="english"){
            message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou can't choose that language**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" "+rlf+"```"));
        }else if(args[0]!="fr"&&args[0]!="french"&&args[0]!="english"&&args[0]!="en"){
            if(server[message.guild.id].server.language==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou must write valide arguments**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" "+rle+"```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous devez écrire des arguments valides**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+rlf+"```"));
            };
        }else if(args[0]=="english"||args[0]=="en"){
            server[message.guild.id].server.language=0;
            message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setTitle("**🌐 LANGUAGE**").setDescription("```fix\nNew language : English```"));
        }else if(args[0]=="french"||args[0]=="fr"){
            server[message.guild.id].server.language=1;
            message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setTitle("**🌐 LANGUAGE**").setDescription("```fix\nNouveau langage : Français```"));
        };
        fs.writeFile("./json/d/server.json",JSON.stringify(server,null,4),(err)=>{if(err)console.log("[ERROR]"+err)});
    }
};