const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
const server=require("../../json/d/server.json");
const fs=require("fs");
module.exports={
    name:"prefix-change",aliases:["prefix","pc","4gme"],category:"🎛️ ✦ config",
    description:"To change my prefix",usage:"<prefix>prefix-change <new-prefix>",
    run:async(client,message,args,tools)=>{
        if(!message.member.hasPermission("ADMINISTRATOR")){
            if(tools.language(message)==0){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou don't have the permission to perform this command.**\nPermission required :\n```ADMINISTRATOR```"));
            }else{message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous n'avez pas la permission d'effectuer cette commande.**\nPermission requise :\n```ADMINISTRATOR```"))};
            return;
        };
        const l=["-","+","_","=",".",",",";","!","?",":","/","4g.","ga.","§","#","\"","'","\\","&","*","$"];
        const p=l[Math.floor(Math.random()*l.length)];
        if(!args[0]){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou must write arguments**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" "+p+"```"))
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez écrire des arguments**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+p+"```"))
            };
        }else if(args[0].length>3){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou must write arguments with less than 3 characters**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" "+args[0].slice(args[0].length-2).toLowerCase()+".```"))
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez écrire des arguments de moins de 3 caractères**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+args[0].slice(args[0].length-2).toLowerCase()+".```"))
            };
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setDescription("**```fix\nNew prefix : "+args[0]+"```**").setTitle("**#️⃣ PREFIX**").setFooter("Try "+tools.prefix(message)+"help"))
            }else{
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setDescription("**```fix\nNouveau préfixe : "+args[0]+"```**").setTitle("**#️⃣ PRÉFIXE**").setFooter("Essaye "+tools.prefix(message)+"help"))
            };
            server[message.guild.id].server.prefix=args[0];
        };
        fs.writeFile("./json/d/server.json",JSON.stringify(server,null,4),(err)=>{if(err)console.log("[ERROR]"+err)});
    }
};