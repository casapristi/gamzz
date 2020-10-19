const{MessageEmbed}=require("discord.js");
const botclient=require("../../json/d/client.json");
const fs=require("fs");
const config=require("../../json/u/config.json");
const args1=["use","remove","board","current","info"];
module.exports={
    name:"texture-pack",aliases:["tp","texture","pack","p"],category:"🎛️ ✦ config",
    description:"To manage texture packs\nArguments :\ncreate,use,board,remove and current\n(Type:<prefix>texture-pack create help)",usage:"<prefix>texture-pack <create/use/remove/current/board/info> [arguments]",exemple:"texture-pack use chroma",
    run:async (client,message,args,tools)=>{
        const consone=["z","r","t","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n",""];
        const voyelle=["a","e","i","o","u","y","ou","on","un","in","en","an",""];
        var letter1=consone[Math.floor(Math.random()*consone.length)];
        var letter2=voyelle[Math.floor(Math.random()*voyelle.length)];
        var letter3=consone[Math.floor(Math.random()*consone.length)];
        var letter4=voyelle[Math.floor(Math.random()*voyelle.length)];
        var letter5=consone[Math.floor(Math.random()*consone.length)];
        var letter6=voyelle[Math.floor(Math.random()*voyelle.length)];
        var rname=letter1+letter2+letter3+letter4+letter5+letter6;
        var rArg1=args1[Math.floor(Math.random()*args1.length)];
        let embed=new MessageEmbed()
        .setColor(tools.color(message))
        .setThumbnail(config.icon)
        .setTimestamp()
        .setTitle("**📦 ✦ TEXTURE-PACK :**");
        const user=message.author.id;
        if(!args[0]){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou must write arguments**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous devez écrire des arguments**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
            };
        }else if(args[0]!="create"&&args[0]!="use"&&args[0]!="remove"&&args[0]!="current"&&args[0]!="board"&&args[0]!="c"&&args[0]!="u"&&args[0]!="r"&&args[0]!="cur"&&args[0]!="b"&&args[0]!="info"&&args[0]!="i"){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou must write corrects arguments**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous devez écrire des arguments corrects**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
            };
        }else if(args[0]=="c"||args[0]=="create"){
            if(!args[1]){
                if(tools.language(message)==0){
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou must write arguments**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
                }else{
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous devez écrire des arguments**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
                };
            }else if(!args[2]||!args[3]||!args[4]){
                if(args[1]=="h"||args[1]=="help"){
                }else if(tools.language(message)==0){
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou must write arguments**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
                }else{
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous devez écrire des arguments**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
                };
            };
        }else if(args[0]=="r"||args[0]=="remove"&&!args[1]){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou must write arguments**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous devez écrire des arguments**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
            };
        }else if(args[0]=="u"||args[0]=="use"&&!args[1]){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou must write arguments**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous devez écrire des arguments**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
            };
        };
        if(args[0]=="create"||args[0]=="c"){
            if(args[1]=="help"||args[1]=="h"){
                if(tools.language(message)==0){
                    embed.setDescription("You should write the command like that :"+tools.prefix(message)+"pack create __Pack-Name__ **Player**, **Enemy** and **Effect**")
                }else{
                    embed.setDescription("Vous devez écrire comme cela :"+tools.prefix(message)+"pack create __Nom-Du-Pack__ **Joueur**, **Enemie** et **Effet**")
                };
                message.channel.send(embed);
		}else{
                if(botclient["pack"][args[1]]==undefined){
                    if(botclient["count"][user]==undefined){
                        botclient["count"][user]={};
                        botclient["count"][user]["count"]=3;
                    };
                    if(parseInt(botclient["count"][user]["count"])>0){
                        botclient["pack"][args[1]]={};
                        botclient["pack"][args[1]]["name"]=args[1];
                        botclient["list"][botclient["packcount"]]={};
                        botclient["list"][botclient["packcount"]]["name"]=args[1];
                        botclient["list"][botclient["packcount"]]["author"]=message.author.username;
                        botclient["pack"][args[1]]["player"]=args[2];
                        botclient["pack"][args[1]]["ennemy"]=args[3];
                        botclient["pack"][args[1]]["object"]=args[4];
                        botclient["pack"][args[1]]["author"]=message.author.username;
                        botclient["pack"][args[1]]["authorid"]=message.author.id;
                        botclient["packcount"]=parseInt(botclient["packcount"])+1;
                        botclient["count"][user]["count"]=parseInt(botclient["count"][user]["count"]) - 1;
                        if(tools.language(message)==0){
                            embed.setDescription(`Your pack named **${args[1]}** has succesfully been created with emojis ${botclient["pack"][args[1]]["player"]},${botclient["pack"][args[1]]["ennemy"]} and ${botclient["pack"][args[1]]["object"]}`)
                        }else{
                            embed.setDescription(`Vôtre pack nommé **${args[1]}** a bien été créé avec les emojis ${botclient["pack"][args[1]]["player"]},${botclient["pack"][args[1]]["ennemy"]} et ${botclient["pack"][args[1]]["object"]}`)
                        };
                        message.channel.send(embed);
                    }else{
                        if(tools.language(message)==0){
                            message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVou reach you texture pack limit (3)**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
                        }else{
                            message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous avez atteint le nombre maximal de pack de textures (3)**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
                        };
                    };
                }else{
                    if(tools.language(message)==0){
                        message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nI don't know this texture pack**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
                    }else{
                        message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nJe ne connais pas ce pack de texture**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
                    };
                };         
            };
        };
        if(args[0]=="info"||args[0]=="i"){
            if(botclient["pack"][args[1]]){
                user=message.author.id;
                if(tools.language(message)==0){
                    embed.setColor(tools.color(message)).addField("Player",botclient["pack"][args[1]]["player"],true).addField("Enemy",botclient["pack"][args[1]]["ennemy"],true).addField("Effect",botclient["pack"][args[1]]["object"],true)
                    .setDescription("Informations of the pack  ` "+args[1]+" `")
                }else embed.setColor(tools.color(message)).addField("Joueur",botclient["pack"][args[1]]["player"],true).addField("Ennemi",botclient["pack"][args[1]]["ennemy"],true).addField("Effet",botclient["pack"][args[1]]["object"],true)
                .setDescription("Informations du pack  ` "+args[1]+" `")
                message.channel.send(embed)
            }else if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nI don't know this texture pack**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nJe ne connais pas ce pack de texture**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
            };
        };
        if(args[0]=="use"||args[0]=="u"){
            if(args[1]=="help"||args[1]=="h"||args[1]=="?"){
                if(tools.language(message)==0){
                    embed.setDescription("You should write the command like that :" + prefixes[message.guild.id].prefixes + "pack use __Pack-Name__ **Game-Name**")
                }else{
                    embed.setDescription("Vous devez écrire comme cela :" + prefixes[message.guild.id].prefixes + "pack use __Nom-Du-Pack__ **Nom-Du-Jeu**")
                };
                message.channel.send(embed);            
            }else{
                if(botclient["pack"][args[1]]!=undefined){
                    user=message.author.id;
                    botclient["users"][user]={};
                    botclient["users"][user]["cur"]=botclient["pack"][args[1]]["name"];
                    botclient["users"][user]["curgame"]=args[2];
                    if(tools.language(message)==0){
                        embed.setDescription("You now use the pack **" + botclient["pack"][args[1]]["name"] + "** by " + botclient["pack"][botclient["users"][user]["cur"]]["author"] + " on the game \"" + args[2] + "\"")
                    }else{
                        embed.setDescription("Vous utilisez maintenant le pack **" + botclient["pack"][args[1]]["name"] + "** de " + botclient["pack"][botclient["users"][user]["cur"]]["author"] + "sur le jeu \"" + args[2] + "\"")
                    };
                    message.channel.send(embed);                
                }else if(botclient["pack"][args[1]]!="default"&&args[1]!="default"){
                    if(tools.language(message)==0){
                        message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nI don't know this texture pack**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
                    }else{
                        message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nJe ne connais pas ce pack de texture**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
                    };   
                }else{
                    if(tools.language(message)==0){
                        embed.setDescription("You have deleted this pack")
                    }else{
                        embed.setDescription("Vous avez supprimé ce pack")
                    };
                    message.channel.send(embed);                    
                    try {
                    botclient["users"][user]["curgame"]=args[2];
                    botclient["users"][user]["cur"]=args[1];
                    } catch (error){}
                };
            };
        };
        if(args[0]=="current"||args[0]=="cur"){
            user=message.author.id;
            if(botclient["users"][user]!=undefined){
                if(tools.language(message)==0){
                    embed.setDescription("You currently using the pack **" + botclient["pack"][args[1]]["name"] + "** by " + botclient["pack"][botclient["users"][user]["cur"]]["author"] + " on the game \"" + args[2] + "\"")
                }else{
                    embed.setDescription("Vous utilisez actuellement le pack **" + botclient["pack"][args[1]]["name"] + "** de " + botclient["pack"][botclient["users"][user]["cur"]]["author"] + "sur le jeu \"" + args[2] + "\"")
                };
                message.channel.send(embed);            
            }
        }
        if(args[0]=="remove"||args[0]=="r"||args[0]=="rem"){
            try{
            user=message.author.id;
            if(user==botclient["pack"][args[1]]["authorid"]){
                if(tools.language(message)==0){
                    embed.setDescription("You have deleted the pack named **" + botclient["pack"][args[1]]["name"] + "**")
                }else{
                    embed.setDescription("Vous avez supprimé le pack nommé **" + botclient["pack"][args[1]]["name"] + "**")
                };
                message.channel.send(embed);                
                botclient["pack"][args[1]]=undefined;
                var oldlist=[];
                for (i=0;i<botclient["packcount"];i++){
                    if(botclient["list"][i]["name"]!=args[1]){oldlist.push(botclient["list"][i]);}
                }
                botclient["count"][user]["count"]=parseInt(botclient["count"][user]["count"]) + 1;
                botclient["packcount"]=parseInt(botclient["packcount"]) - 1;
                
                botclient["list"]={};
                for (i=0;i<botclient["packcount"];i++){
                    botclient["list"][i]=oldlist[i];
                }
            }else{
                if(tools.language(message)==0){
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou are not the owner of this pack**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
                }else{
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nTu n'es pas le findateur de ce pack**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
                }}
            }catch(e){
                if(tools.language(message)==0){
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nI don't know this texture pack**\nTry that :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
                }else{
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nJe ne connais pas ce pack de texture**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" create help```"));
                };
            }
        }
        if(args[0]=="board"||args[0]=="b"){
            var def=[];
            var packs=[];
            var final=[];
            var pc=0;
            var pc2=0;
            var pc3=0;
            for(i=0;i<botclient["packcount"];i++){
                if(botclient["list"][i]!=undefined){
                    if(tools.language(message)==0){
                        def.push("- ``"+botclient["list"][i]["name"]+"``, created by `" + botclient["list"][i]["author"]+"`");
                    }else{
                        def.push("- **"+botclient["list"][i]["name"]+"**, crée par `"+botclient["list"][i]["author"]+"`");
                    };
                    pc++;
                    pc2++;
                    if(pc>18){
                        packs.push(def[i-20],[def[i-19],def[i-18],def[i-17],def[i-16],def[i-15],def[i-14],def[i-13],def[i-12],def[i-11],def[i-10],def[i-9],def[i-8],def[i-7],def[i-6],def[i-5],def[i-4],def[i-3],def[i-2],def[i-1]]);
                        pc=0;
                        pc3++;
                    };
                };
            };
            if(pc>=0){
                var pc4=[];
                for(i=0;i<pc+2;i++){
                    pc4.push(def[i+pc2-pc]);
                };
                packs.push(pc4);
            }
            for(i=0;i<packs.length;i++){
                final.push(packs[i].join("\n"))
            };
            var pageid=0;
            var maxid=final.length-1;
            var minid=0;
            let embedd=new MessageEmbed()
            .setColor(tools.color(message))
            .setTitle("**📦 ✦ TEXTURE-PACK BOARD :**")
            .setDescription(final[pageid] + `\nPage ${pageid+1}/${maxid+1}`)
            .setTimestamp()
            if(tools.language(message)==0){
                embedd.setFooter(`For more informations, type <prefix>texture-pack info <pack-name>`).setAuthor("Type :<prefix>texture-pack use <pack-name> <game-name>");
            }else{
                embedd.setFooter(`Pour plus d'informations, écris <prefix>texture-pack info <nom-du-pack>`).setAuthor("Écris :<préfixe>texture-pack use <nom-du-pack> <nom-du-jeu>");
            };
            embedd.setThumbnail(config.icon);
            message.channel.send(embedd).then(msg=>{
                msg.react('716709961853435945').then(r=>{
                    msg.react('716709950633672775')
                    async function autoDelete(){
                        const userReactions=msg.reactions.cache.filter(reaction=>reaction.users.cache.has(message.author.id));
                        try {
                            for (const reaction of userReactions.values()){
                                await reaction.users.remove(message.author.id);
                            }
                        }catch(e){};
                    }
                    function actu(){
                        embedd.setDescription(final[pageid] + `\nPage ${pageid+1}/${maxid+1}`);
                        msg.edit(embedd);
                    }
                    const backwardsFilter=(reaction,user)=>reaction.emoji.id=='716709961853435945'&&user.id==message.author.id;
                    const forwardsFilter=(reaction,user)=>reaction.emoji.id=='716709950633672775'&&user.id==message.author.id;
                    const backwards=msg.createReactionCollector(backwardsFilter,{ time:60000 });
                    const forwards=msg.createReactionCollector(forwardsFilter,{ time:60000 });
                    backwards.on('collect',r=>{
                        if(pageid > minid){
                            pageid--;
                        }else{
                            pageid=maxid;
                        }
                        autoDelete();
                        actu();
                    });
                    forwards.on('collect',r=>{
                        if(pageid < maxid){
                            pageid++
                        }else{
                            pageid=minid;
                        }
                        autoDelete();
                        actu();
                    });
                });
            });
        };
        fs.writeFile("./json/d/client.json",JSON.stringify(botclient,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});
    }
};