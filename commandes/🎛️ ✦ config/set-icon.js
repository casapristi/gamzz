const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
const user=require("../../json/d/user.json");
const fs=require("fs");
const el=["https://i.imgur.com/xwQzRkv.gif","https://i.imgur.com/0PuBxQ1.gif","https://i.imgur.com/62hTev9.gif"];
module.exports={
    name:"set-icon",aliases:["icon","si"],category:"🎛️ ✦ config",
    description:"To change your embeds icon.",usage:"<prefix>set-icon <hexadecimal value/\"random\"/\"default\">",
    run:async(client,message,args,tools)=>{
        if(user[message.author.id].isreg==false){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou need to be registerd to perform this command**\nTry that in dm :\n```register```"))
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez être enregistrés pour utiliser cette commande**\nEssaye ça en dm :\n```register```"))
            };
            return;
        };
        var er=el[Math.floor(Math.random()*el.length)];
        if(!args[0]){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou need to write arguments to perform this command.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+er+"```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez écrire des arguments pour utiliser cette commande.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+er+"```"))
            };
        }else if(args[0]=="default"||args[0]=="def"||args[0]=="d"){user[message.author.id].icon=config.Imain;
            fs.writeFile("./json/d/user.json",JSON.stringify(user,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});
            message.channel.send(new MessageEmbed().setImage(config.Imain).setColor(tools.color(message)).setTimestamp().setTitle("**🖼 SET-ICON**"));
        }else if(!args[0].startsWith("https://i.imgur.com/")){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYour arguments must be imgur links.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+er+"```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVos aruments doivent être des liens imgur.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+er+"```"))
            };
        }else if(args[0].endsWith(".mp4")){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe icon cannot be a video.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+er+"```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVôtre icone ne peut pas être une vidéo.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+er+"```"))
            };
        }else{user[message.author.id].icon=args[0];
            fs.writeFile("./json/d/user.json",JSON.stringify(user,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});
            message.channel.send(new MessageEmbed().setImage(args[0]).setColor(tools.color(message)).setTimestamp().setTitle("**🖼 SET-ICON**"));
        };
    }
};