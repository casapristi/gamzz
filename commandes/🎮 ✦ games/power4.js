const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
const botclient=require("../../json/d/client.json");
function getRandom(max){return Math.floor(Math.random()*Math.floor(max))};
module.exports={
    name:"power4",category:"🎮 ✦ games",
    description:"To play to the power4 game",usage:"<prefix>power4",
    run:async (client,message,args,tools)=>{
        if(tools.category(message,"games")){
            var playing=1;
            var emoji=["<:N_:718506491660992735>","🟡","🔴","🔻"];
            try{
                if(botclient["users"][user]["curgame"]=="Power4" || botclient["users"][user]["curgame"]=="power4"){
                    if(botclient["users"][user]!=undefined&&botclient["users"][user]["cur"]!="none"){
                        var emoji=["<:N_:718506491660992735>",botclient["pack"][botclient["users"][user]["cur"]]["player"],botclient["pack"][botclient["users"][user]["cur"]]["ennemy"],botclient["pack"][botclient["users"][user]["cur"]]["object"]];
                    } else {
                        var emoji=["<:N_:718506491660992735>","🟡","🔴","🔻"];
                    };
                };
            }catch(e){};
            const z=emoji[0];
            const l0=[z,z,z,z,z,z,z,z];
            const l1=[z,z,z,z,z,z,z,z];
            const l2=[z,z,z,z,z,z,z,z];
            const l3=[z,z,z,z,z,z,z,z];
            const l4=[z,z,z,z,z,z,z,z];
            const l5=[z,z,z,z,z,z,z,z];
            const l6=[z,z,z,z,z,z,z,z];
            const c=[l0,l1,l2,l3,l4,l5,l6];
            var px=0;
            function placeBlock(x,y,slot){c[y][x]=emoji[slot]};
            let embed=new MessageEmbed()
            .setColor(tools.color(message)).setTitle("**🟡 POWER4**").setDescription(`${l0.join("")}\n${l1.join("")}\n${l2.join("")}\n${l3.join("")}\n${l4.join("")}\n${l5.join("")}\n${l6.join("")}\n`).setTimestamp();
            embed.setThumbnail(config.icon);
            message.channel.send(embed).then(msg=>{
                msg.react('◀️').then(r=>{
                    msg.react('766953927903412236')
                    msg.react('▶️')
                    async function autoDelete(){
                        const userReactions=msg.reactions.cache.filter(reaction=>reaction.users.cache.has(message.author.id));
                        try{
                            for(const reaction of userReactions.values()){
                                await reaction.users.remove(message.author.id);
                            }
                            placeBlock(px-1,0,0)
                            placeBlock(px,0,3)
                            placeBlock(px+1,0,0)
                            embed.setDescription(`${l0.join("")}\n${l1.join("")}\n${l2.join("")}\n${l3.join("")}\n${l4.join("")}\n${l5.join("")}\n${l6.join("")}\n`)
                            msg.edit(embed)
                        }catch(e){};
                    };
                    function checkWin(){
                        var winner;
                        var wc=0;
                        for(i=0;i<7;i++){
                            for(j=1;j<6;j++){
                                if(c[j][i]==emoji[2] || c[j][i]==emoji[1]){
                                    try{
                                        if(c[j][i]==c[j+1][i]&&c[j+2][i]==c[j][i]&&c[j][i]==c[j+3][i]){
                                            playing=0;
                                            winner=c[j][i];
                                            wc++;
                                        };
                                    }catch(e){}
                                    try{
                                        if(c[j][i]==c[j][i+1]&&c[j][i]==c[j][i+2]&&c[j][i]==c[j][i+3]){
                                            playing=0;
                                            winner=c[j][i];
                                            wc++;
                                        };
                                    }catch(e){};
                                };
                            };
                        };
                        var pw=0;
                        var ew=0;
                        for(i=0;i<wc;i++){
                            if(winner[i]==emoji[1]){pw=1;}
                            if(winner[i]==emoji[2]){ew=1;}
                            if(!pw&&ew){
                                if(tools.language(message)==0){
                                    message.channel.send("**Tie :D**");
                                }else{
                                    message.channel.send("**Égalité :D**");
                                };
                            }else if(pw&&!ew){
                                if(tools.language(message)==0){
                                    message.channel.send("**You lose :/**");
                                }else{
                                    message.channel.send("**Vous avez perdu :/**");
                                };
                                tools.newDefeat(message,"power4");
                            }else if(!pw&&!ew){
                                if(tools.language(message)==0){
                                    message.channel.send("**You win !**");
                                }else{
                                    message.channel.send("**Vous avez gagné !**");
                                };
                                tools.newWin(message,"power4");
                            };
                        };
                    };
                    const backwardsFilter=(reaction,user)=>reaction.emoji.name=='◀️'&&user.id==message.author.id&&playing==1
                    const shootFilter=(reaction,user)=>reaction.emoji.id=='766953927903412236'&&user.id==message.author.id&&playing==1
                    const forwardsFilter=(reaction,user)=>reaction.emoji.name=='▶️'&&user.id==message.author.id&&playing==1
                    const backwards=msg.createReactionCollector(backwardsFilter,{time:60000});
                    const shoot=msg.createReactionCollector(shootFilter,{time:60000});
                    const forwards=msg.createReactionCollector(forwardsFilter,{time:60000});
                    backwards.on('collect',r=>{
                        px--;
                        autoDelete();
                    });
                    forwards.on('collect',r=>{
                        px++;
                        autoDelete();
                    });
                    shoot.on('collect',r=>{
                        for(i=0;i<6;i++){
                            if(c[i+1][px]==emoji[0]){
                                placeBlock(px,i,0);
                                placeBlock(px,i+1,1);
                            }
                        }
                        var ia=getRandom(3);
                        for(i=0;i<6;i++){
                            if(c[i+1][px-ia+1]==emoji[0]){
                                placeBlock(px-ia+1,i,0);
                                placeBlock(px-ia+1,i+1,2);
                            }
                        }
                        checkWin();
                        autoDelete();
                    });
                });
            });
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"games\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category games enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"games\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category games enable```"));
            };
        };
    }
};