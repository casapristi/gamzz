const{MessageEmbed,MessageAttachment}=require("discord.js");
const config=require("../../json/u/config.json");
const user=require("../../json/d/user.json");
const DIG = require("discord-image-generation");
const name=Math.random().toString(36).substring(2,15);
const fs=require("fs");
module.exports={
    name:"set-color",aliases:["color","sc"],category:"🎛️ ✦ config",
    description:"To change your embeds color.",usage:"<prefix>set-color <hexadecimal value/\"random\"/\"default\">",
    run:async(client,message,args,tools)=>{
        if(user[message.author.id].isreg==false){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou need to be registerd to perform this command**\nTry that in dm :\n```register```"))
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez être enregistrés pour utiliser cette commande**\nEssaye ça en dm :\n```register```"))
            };
            return;
        };
        if(!args[0]){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou need to write arguments to perform this command.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" #"+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+"```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez écrire des arguments pour utiliser cette commande.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" #"+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+"```"))
            };
        }else if(args[0]=="default"||args[0]=="def"||args[0]=="d"||args[0]=="#cab568"){user[message.author.id].color="#cab568";
            fs.writeFile("./json/d/user.json",JSON.stringify(user,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});
            let img=await new DIG.Color().getImage("#cab568");
            const attachment=new MessageAttachment(img,name+".png");
            message.channel.send(new MessageEmbed().attachFiles(attachment).setImage("attachment://"+name+".png").setColor(tools.color(message)).setTimestamp().setTitle("**🌈 SET-COLOR**"));
        }else if(!args[0].startsWith("#")){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYour arguments must be hexadecimals.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" #"+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+"```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVos aruments doivent être hexadecimales.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" #"+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+"```"))
            };
        }else if(args[0].length!=7){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYour arguments must be hexadecimals.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" #"+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+"```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVos aruments doivent être hexadecimales.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" #"+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+tools.randomHex()+"```"))
            };
        }else{user[message.author.id].color=args[0];
            fs.writeFile("./json/d/user.json",JSON.stringify(user,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});
            let img=await new DIG.Color().getImage(args[0]);
            const attachment=new MessageAttachment(img,name+".png");
            message.channel.send(new MessageEmbed().attachFiles(attachment).setImage("attachment://"+name+".png").setColor(tools.color(message)).setTimestamp().setTitle("**🌈 SET-COLOR**"));
        };
    }
};