const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
module.exports={
    name:"captcha",aliases:["cap"],category:"🌈 ✦ fun",
    description:"To convert your text to a captcha test",usage:"captcha <text>",exemple:"captcha are you idiot ?",
    run:async(client,message,args,tools)=>{if(tools.category(message,"fun")==true){if(!args[0]){if(tools.language(message)==0){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou need to write arguments to perform this command.**\nTry this :\n```"+tools.prefix(message)+module.exports.exemple+"```"));
                }else{message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez écrire des arguments pour utiliser cette commande.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.exemple+"```"))};
            }else{message.channel.send(new MessageEmbed().setImage(`https://api.alexflipnote.dev/captcha?text=${args.join("+")}`).setColor(tools.color(message)).setTitle("**🤖 CAPTCHA :**").setTimestamp())};
        }else{if(tools.language(message)==0){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"fun\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category fun enable```"));
            }else{message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"fun\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category fun enable```"))};
        };
    }
};