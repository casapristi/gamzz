const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
const enchoices=["heads","tails"];
const frchoices=["pile","face"];
module.exports={
    name:"flip-coin",aliases:["heads-or-tails","flip","fc","headsortails"],category:"🎮 ✦ games",
    description:"To flip a coin.",usage:"<prefix>flip-coin [heads/tails]",
    run:async(client,message,args,tools)=>{
        var enrandom=enchoices[Math.floor(Math.random()*enchoices.length)];
        var frandom=frchoices[Math.floor(Math.random()*frchoices.length)];
        if(tools.category(message,"games")){var embed=new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp();
            if(tools.language(message)==0){embed.setTitle("**<:coin:756803447814094929> HEADS OR TAILS**")
                if(!args[0]){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou need to write arguments to perform this command.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+enrandom+"```"));
                }else if(args[0]!="heads"&&args[0]!="tails"){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou need to write correct arguments to perform this command.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+enrandom+"```"));
                }else if(args[0]==enrandom){embed.setDescription("**You win**\nThe coin flips on **"+enrandom+"** <:coin:756803447814094929>")
                    message.channel.send(embed)
                    tools.newWin(message,"flipcoin");
                }else{embed.setDescription("**You lose**\nThe coin flips on **"+enrandom+"** <:coin:756803447814094929>");
                    message.channel.send(embed);
                    tools.newDefeat(message,"flipcoin");
                };
            }else{embed.setTitle("**<:coin:756803447814094929> PILE OU FACE**")
                if(!args[0]){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez écrire des arguments pour utiliser cette commande.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+enrandom+"```"));
                }else if(args[0]!="heads"&&args[0]!="tails"){message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez écrire des arguments corrects pour utiliser cette commande.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+enrandom+"```"));
                }else if(args[0]==enrandom){embed.setDescription("**Tu as gagné**\nLa pièce est tombée sur **"+frandom+"** <:coin:756803447814094929>");
                    message.channel.send(embed);
                    tools.newWin(message,"flipcoin");
                }else{embed.setDescription("**Tu as perdu**\nLa pièce est tombée sur **"+frandom+"** <:coin:756803447814094929>");
                    message.channel.send(embed);
                    tools.newDefeat(message,"flipcoin");
                };
            };
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"games\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category games enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"games\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category games enable```"));
            };
        };
    }
};