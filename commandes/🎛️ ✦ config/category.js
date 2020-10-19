const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
const server=require("../../json/d/server.json");
const fs=require("fs");
const categories=["utilities","games","fun","nsfw","moderation","info","search"];
var ustate;var gstate;var fstate;var nstate;var lstate;var mstate;var sstate;var ustate2;var gstate2;var fstate2;var nstate2;var lstate2;var mstate2;var sstate2;var choice;
module.exports={
    name:"category",aliases:["ctgr","ctgry"],category:"🎛️ ✦ config",
    description:"To enable/disable categories",usage:"<prefix>category [<category> <enable/disable>]",
    run:async(client,message,args,tools)=>{var rcategory=categories[Math.floor(Math.random()*categories.length)];
        if(!message.member.hasPermission("ADMINISTRATOR")){
            if(tools.language(message)==0){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou don't have the permission to perform this command.**\nPermission required :\n```ADMINISTRATOR```"));
            }else{message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous n'avez pas la permission d'effectuer cette commande.**\nPermission requise :\n```ADMINISTRATOR```"))};
            return;
        };
        function state(){
            if(tools.category(message,"utilities")==true){ustate="<:oui:748159544701485129> enabled";ustate2="<:oui:748159544701485129> activé"}else{ustate="<:non:748159545133760522> disabled";ustate2="<:non:748159545133760522> désactivé"};
            if(tools.category(message,"games")==true){gstate="<:oui:748159544701485129> enabled";gstate2="<:oui:748159544701485129> activé"}else{gstate="<:non:748159545133760522> disabled";gstate2="<:non:748159545133760522> désactivé"};
            if(tools.category(message,"fun")==true){fstate="<:oui:748159544701485129> enabled";fstate2="<:oui:748159544701485129> activé"}else{fstate="<:non:748159545133760522> disabled";fstate2="<:non:748159545133760522> désactivé"};
            if(tools.category(message,"nsfw")==true){nstate="<:oui:748159544701485129> enabled";nstate2="<:oui:748159544701485129> activé"}else{nstate="<:non:748159545133760522> disabled";nstate2="<:non:748159545133760522> désactivé"};
            if(tools.category(message,"moderation")==true){mstate="<:oui:748159544701485129> enabled";mstate2="<:oui:748159544701485129> activé"}else{mstate="<:non:748159545133760522> disabled";mstate2="<:non:748159545133760522> désactivé"};
            if(tools.category(message,"info")==true){lstate="<:oui:748159544701485129> enabled";lstate2="<:oui:748159544701485129> activé"}else{lstate="<:non:748159545133760522> disabled";lstate2="<:non:748159545133760522> désactivé"};
            if(tools.category(message,"search")==true){sstate="<:oui:748159544701485129> enabled";sstate2="<:oui:748159544701485129> activé"}else{sstate="<:non:748159545133760522> disabled";sstate2="<:non:748159545133760522> désactivé"};
        };
        if(tools.category(message,rcategory)==true){choice=" disable"}else{choice=" enable"};
        if(tools.language(message)==0){if(!args[0]){state();
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).addField("❓ ✦ info",lstate,true).addField("🌈 ✦ fun",fstate,true).addField("🎮 ✦ games",gstate,true).addField("🔍 ✦ search",sstate,true).addField("🔞 ✦ nsfw",nstate,true).addField("🔨 ✦ moderation",mstate,true).addField("🚨 ✦ utilities",ustate,true).setTimestamp().setTitle("**🎛️ CATEGORY**"));
            }else if(!args[1]){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou need to write arguments to perform this command.**\n(enable, disable)\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+rcategory+choice+"```"));
            }else if(args[0]!=categories[0]&&args[0]!=categories[1]&&args[0]!=categories[2]&&args[0]!=categories[3]&&args[0]!=categories[4]&&args[0]!=categories[5]&&args[0]!=categories[6]){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou need to write a correct category to perform this command.**\n("+categories.join(", ")+")\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+rcategory+choice+"```"));
            }else if(args[1]!="enable"&&args[1]!="disable"){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou need to write correct arguments to perform this command.**\n(enable, disable)\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+rcategory+choice+"```"));
            }else if(args[1]=="enable"&&tools.category(message,args[0])==true){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThis catgory is already enabled.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+rcategory+choice+"```"));
            }else if(args[1]=="disable"&&tools.category(message,args[0])==false){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThis catgory is already disabled.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+rcategory+choice+"```"));
            }else if(args[1]=="enable"){server[message.guild.id].server.categories[args[0]]=true;
                fs.writeFile("./json/d/server.json",JSON.stringify(server,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});state();
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).addField("❓ ✦ info",lstate,true).addField("🌈 ✦ fun",fstate,true).addField("🎮 ✦ games",gstate,true).addField("🔍 ✦ search",sstate,true).addField("🔞 ✦ nsfw",nstate,true).addField("🔨 ✦ moderation",mstate,true).addField("🚨 ✦ utilities",ustate,true).setTimestamp().setTitle("**🎛️ CATEGORY**"));
            }else if(args[1]=="disable"){server[message.guild.id].server.categories[args[0]]=false;
                fs.writeFile("./json/d/server.json",JSON.stringify(server,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});state();
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).addField("❓ ✦ info",lstate,true).addField("🌈 ✦ fun",fstate,true).addField("🎮 ✦ games",gstate,true).addField("🔍 ✦ search",sstate,true).addField("🔞 ✦ nsfw",nstate,true).addField("🔨 ✦ moderation",mstate,true).addField("🚨 ✦ utilities",ustate,true).setTimestamp().setTitle("**🎛️ CATEGORY**"));
            };
        }else{if(!args[0]){state();
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).addField("❓ ✦ info",lstate,true).addField("🌈 ✦ fun",fstate,true).addField("🎮 ✦ games",gstate,true).addField("🔍 ✦ search",sstate,true).addField("🔞 ✦ nsfw",nstate,true).addField("🔨 ✦ moderation",mstate,true).addField("🚨 ✦ utilities",ustate2,true).setTimestamp().setTitle("**🎛️ CATEGORY**"));
            }else if(!args[1]){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez écrire des arguments pour utiliser cette commande.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+rcategory+choice+"```"));
            }else if(args[0]!=categories[0]&&args[0]!=categories[1]&&args[0]!=categories[2]&&args[0]!=categories[3]&&args[0]!=categories[4]&&args[0]!=categories[5]&&args[0]!=categories[6]){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez me donner une catégorie à changer pour utiliser cette commande.**\n("+categories.join(", ")+")\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+rcategory+choice+"```"));
            }else if(args[1]!="enable"&&args[1]!="disable"){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez écrire des arguments corrects pour utiliser cette commande.**\n(enable, disable)\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+rcategory+choice+"```"));
            }else if(args[1]=="enable"&&tools.category(message,args[0])==true){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nCette catégorie est déjà activée.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+rcategory+choice+"```"));
            }else if(args[1]=="disable"&&tools.category(message,args[0])==false){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nCette catégorie est déjà désactivée.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+rcategory+choice+"```"));
            }else if(args[1]=="enable"){server[message.guild.id].server.categories[args[0]]=true;
                fs.writeFile("./json/d/server.json",JSON.stringify(server,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});state();
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).addField("❓ ✦ info",lstate2,true).addField("🌈 ✦ fun",fstate2,true).addField("🎮 ✦ games",gstate2,true).addField("🔍 ✦ search",sstate2,true).addField("🔞 ✦ nsfw",nstate2,true).addField("🔨 ✦ moderation",mstate2,true).addField("🚨 ✦ utilities",ustate2,true).setTimestamp().setTitle("**🎛️ CATEGORY**"));
            }else if(args[1]=="disable"){server[message.guild.id].server.categories[args[0]]=false;
                fs.writeFile("./json/d/server.json",JSON.stringify(server,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});state();
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).addField("❓ ✦ info",lstate2,true).addField("🌈 ✦ fun",fstate2,true).addField("🎮 ✦ games",gstate2,true).addField("🔍 ✦ search",sstate2,true).addField("🔞 ✦ nsfw",nstate2,true).addField("🔨 ✦ moderation",mstate2,true).addField("🚨 ✦ utilities",ustate2,true).setTimestamp().setTitle("**🎛️ CATEGORY**"));
            };
        };
    }
};