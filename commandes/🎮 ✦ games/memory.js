const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
const user=require("../../json/d/user.json");
const server=require("../../json/d/server.json");
const fs=require("fs");
module.exports={
    name:"memory",
    aliases:["memo"],
    category:"🎮 ✦ games",
    description:"To play to a memory game",
    usage:"<prefix>memory <5-15 number>",
    exemple:"memory 8",
    run:async(client,message,args,tools)=>{
        let numberlist=["1","2","3","4","5","6","7","8","9","0"];
        let random1=numberlist[Math.floor(Math.random()*numberlist.length)];
        let random2=numberlist[Math.floor(Math.random()*numberlist.length)];
        let random3=numberlist[Math.floor(Math.random()*numberlist.length)];
        let random4=numberlist[Math.floor(Math.random()*numberlist.length)];
        let random5=numberlist[Math.floor(Math.random()*numberlist.length)];
        let random6=numberlist[Math.floor(Math.random()*numberlist.length)];
        let random7=numberlist[Math.floor(Math.random()*numberlist.length)];
        let random8=numberlist[Math.floor(Math.random()*numberlist.length)];
        let random9=numberlist[Math.floor(Math.random()*numberlist.length)];
        let random10=numberlist[Math.floor(Math.random()*numberlist.length)];
        let random11=numberlist[Math.floor(Math.random()*numberlist.length)];
        let random12=numberlist[Math.floor(Math.random()*numberlist.length)];
        let random13=numberlist[Math.floor(Math.random()*numberlist.length)];
        let random14=numberlist[Math.floor(Math.random()*numberlist.length)];
        let random15=numberlist[Math.floor(Math.random()*numberlist.length)];
        var msg;var timer;
        if(args[0]=="5"){msg=random1+random2+random3+random4+random5;timer=2;
        }else if(args[0]=="6"){msg=random1+random2+random3+random4+random5+random6;timer=3;
        }else if(args[0]=="7"){msg=random1+random2+random3+random4+random5+random6+random7;timer=4.5;
        }else if(args[0]=="8"){msg=random1+random2+random3+random4+random5+random6+random7+random8;timer=5.75;
        }else if(args[0]=="9"){msg=random1+random2+random3+random4+random5+random6+random7+random8+random9;timer=7;
        }else if(args[0]=="10"){msg=random1+random2+random3+random4+random5+random6+random7+random8+random9+random10;timer=8;
        }else if(args[0]=="11"){msg=random1+random2+random3+random4+random5+random6+random7+random8+random9+random10+random11;timer=9;
        }else if(args[0]=="12"){msg=random1+random2+random3+random4+random5+random6+random7+random8+random9+random10+random11+random12;timer=10;
        }else if(args[0]=="13"){msg=random1+random2+random3+random4+random5+random6+random7+random8+random9+random10+random11+random12+random13;timer=11;
        }else if(args[0]=="14"){msg=random1+random2+random3+random4+random5+random6+random7+random8+random9+random10+random11+random12+random13+random14;timer=12;
        }else if(args[0]=="15"){msg=random1+random2+random3+random4+random5+random6+random7+random8+random9+random10+random11+random12+random13+random14+random15;timer=13;
        };
        if(tools.category(message,"games")){
            if(tools.language(message)==0){
                if(!args[0]){
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou need to write arguments to perform this command.**\nTry this :\n```"+tools.prefix(message)+module.exports.exemple+"```"));
                    return;
                }else if(parseInt(args[0])>15||parseInt(args[0])<5){
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe memory length must be into the 5-15 range.**\nTry this :\n```"+tools.prefix(message)+module.exports.exemple+"```"));
                    return;
                }else{
                    let embed=new MessageEmbed().setColor(tools.color(message)).setTimestamp().setThumbnail(tools.icon(message)).setTitle("**🧠 MEMORY**").setDescription("Remember this number :\n`` "+msg+"``");
                    message.channel.send(embed).then(msg=>{
                        setTimeout(function(){
                            msg.edit(embed.setColor(tools.color(message)).setTimestamp().setThumbnail(tools.icon(message)).setTitle("**🧠 MEMORY**").setDescription("Write the number !"));
                        },timer*1000);
                    });
                    try{
                        let msgs=await message.channel.awaitMessages(u2=>u2.author.id==message.author.id,{time:30000,max:1,errors:["time"]})
                        if(msgs.first().content==msg){
                            tools.newWin(message,"memory");
                            return message.channel.send(new MessageEmbed().setColor(tools.color(message)).setTimestamp().setThumbnail(tools.icon(message)).setTitle("**🧠 MEMORY**").setDescription("You found the correct number !\nIt was ``"+msg+"``"));
                        }else{
                            tools.newDefeat(message,"memory");
                            return message.channel.send(new MessageEmbed().setColor(tools.color(message)).setTimestamp().setThumbnail(tools.icon(message)).setTitle("**🧠 MEMORY**").setDescription("You lose !\nThe correct number was ``"+msg+"``"));
                        };
                    }catch(e){
                        return message.channel.send(new MessageEmbed().setColor(config.Cerr).setTimestamp().setThumbnail(tools.icon(message)).setTitle("**🧠 MEMORY**").setDescription("You did not answer..."));
                    };
                };
            }else{
                if(!args[0]){
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous devez écrire des arguments pour utiliser cette commande.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+enrandom+"```"));
                    return;
                }else if(args[0]!="5"&&args[0]!="6"&&args[0]!="7"&&args[0]!="8"&&args[0]!="9"&&args[0]!="10"&&args[0]!="11"&&args[0]!="12"&&args[0]!="13"&&args[0]!="14"&&args[0]!="15"){
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nLa longueur du memory doit être comprise entre 5 et 15.**\nTry this :\n```"+tools.prefix(message)+module.exports.exemple+"```"));
                    return;
                }else{
                    let embed=new MessageEmbed().setColor(tools.color(message)).setTimestamp().setThumbnail(tools.icon(message)).setTitle("**🧠 MEMORY**").setDescription("Retiens ce nombre :\n`` "+msg+"``");
                    message.channel.send(embed).then(msg=>{
                        setTimeout(function(){
                            msg.edit(embed.setColor(tools.color(message)).setTimestamp().setThumbnail(tools.icon(message)).setTitle("**🧠 MEMORY**").setDescription("Tu peux écrire le nombre !"));
                        },timer*1000);
                    });
                    try{
                        let msgs=await message.channel.awaitMessages(u2=>u2.author.id==message.author.id,{time:30000,max:1,errors:["time"]})
                        if(msgs.first().content==msg){
                            tools.newWin(message,"memory");
                            return message.channel.send(new MessageEmbed().setColor(tools.color(message)).setTimestamp().setThumbnail(tools.icon(message)).setTitle("**🧠 MEMORY**").setDescription("Tu as trouvé le numéro correct !\nC'était ``"+msg+"``"));
                        }else{
                            tools.newDefeat(message,"memory");
                            return message.channel.send(new MessageEmbed().setColor(tools.color(message)).setTimestamp().setThumbnail(tools.icon(message)).setTitle("**🧠 MEMORY**").setDescription("Tu as perdu !\nLe bon numéro était ``"+msg+"``"));
                        };
                    }catch(e){
                        return message.channel.send(new MessageEmbed().setColor(config.Cerr).setTimestamp().setThumbnail(tools.icon(message)).setTitle("**🧠 MEMORY**").setDescription("Tu n'as pas répondu..."));
                    };
                };
            }
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"games\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category games enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"games\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category games enable```"));
            };
        };
    }
};