const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
function getRandom(max){return Math.floor(Math.random()*Math.floor(max))};
module.exports={
    name:"tic-tac-toe",aliases:["ttt","tictactoe"],
    category:"🎮 ✦ games",description:"To play to tictactoe",usage:"<prefix>tic-tac-toe",
    run:async (client,message,args,tools)=>{
        if(tools.category(message,"games")){
            var emoji=["<:c_:757223277721681920>",":x:",":o:"];
            var playing=1;
            let zero=emoji[0];
            let l1=[zero,zero,zero];
            let l2=[zero,zero,zero];
            let l3=[zero,zero,zero];
            let c=[l1,l2,l3];
            function placeBlock(x,y,slot){c[y][x]=emoji[slot]};
            let embed=new MessageEmbed().setColor(tools.color(message)).setTimestamp().setTitle("**⭕ ✦ TIC TAC TOE :**").setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")).setThumbnail(tools.icon(message));
            message.channel.send(embed).then(msg=>{
                msg.react("1️⃣").then(r=>{
                    msg.react("2️⃣").then;
                    msg.react("3️⃣").then;
                    msg.react("4️⃣").then;
                    msg.react("5️⃣").then;
                    msg.react("6️⃣").then;
                    msg.react("7️⃣").then;
                    msg.react("8️⃣").then;
                    msg.react("9️⃣");
                    async function autoDelete(){
                        const userReactions=msg.reactions.cache.filter(reaction=>reaction.users.cache.has(message.author.id));
                        try{
                            for(const reaction of userReactions.values()){
                                await reaction.users.remove(message.author.id);
                            };
                        }catch(e){};
                    };
                    function actu(){
                        embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join(""));
                        msg.edit(embed);
                    };
                    function placeBot2(){
                        try{
                        placeBot();
                        }catch(e){};
                    };
                    function placeBot(){
                        var r1=getRandom(3);
                        var r2=getRandom(3);
                        if (c[r2][r1]==emoji[0]){
                            placeBlock(r1,r2,2);
                        }else{
                            placeBot2();
                        };
                    };
                    function checkWin(){
                        for(i=0;i<3;i++){
                            for(j=0;j<3;j++){
                                if(c[j][i]==emoji[2]){
                                    try{
                                        if(c[j+1][i]==emoji[2]&&c[j+2][i]==emoji[2]){
                                            if(tools.language(message)==0){
                                                embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n\n**You lose.**");
                                            }else{
                                                embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n\n**Vous avez perdu.**");
                                            };
                                            tools.newDefeat(message,"tictactoe");
                                            msg.edit(embed)
                                            playing=0;
                                        }
                                    }catch(e){};
                                    try{
                                        if(c[j][i+1]==emoji[2]&&c[j][i+2]==emoji[2]){
                                            if(tools.language(message)==0){
                                                embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n\n**You lose.**");
                                            }else{
                                                embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n\n**Vous avez perdu.**");
                                            };
                                            tools.newDefeat(message,"tictactoe");
                                            msg.edit(embed)
                                            playing=0;
                                        }
                                    } catch (error){}
                                }
                                if(c[j][i]==emoji[1]){
                                    try{
                                        if(c[j+1][i]==emoji[1]&&c[j+2][i]==emoji[1]){
                                            if(tools.language(message)==0){
                                                embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n\n**You win.**")
                                            }else{
                                                embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n\n**Vous avez gagné.**")
                                            };
                                            tools.newWin(message,"tictactoe");
                                            msg.edit(embed);
                                            playing=0;
                                        };
                                    }catch(e){};
                                    try{
                                        if(c[j][i+1]==emoji[1]&&c[j][i+2]==emoji[1]){
                                            if(tools.language(message)==0){
                                                embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n\n**You win.**");
                                            }else{
                                                embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n\n**Vous avez gagné.**");
                                            };
                                            tools.newWin(message,"tictactoe");
                                            msg.edit(embed);
                                            playing=0;
                                        };
                                    }catch(e){};
                                };
                            };
                        };
                        if(c[0][0]==emoji[1]&&c[1][1]==emoji[1]&&c[2][2]==emoji[1]){
                            if(tools.language(message)==0){
                                embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n\n**You win.**");
                            }else{
                                embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n\n**Vous avez gagné.**");
                            };
                            tools.newWin(message,"tictactoe");
                            msg.edit(embed)
                            playing=0;
                        };
                        if(c[0][2]==emoji[1]&&c[1][1]==emoji[1]&&c[2][0]==emoji[1]){
                            if(tools.language(message)==0){
                                embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n\n**You win.**")
                            }else{
                                embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n\n**Vous avez gagné.**")
                            };
                            tools.newWin(message,"tictactoe");
                            msg.edit(embed);
                            playing=0;
                        };
                    };
                    const oneFilter=(reaction,user)=>reaction.emoji.name=="1️⃣"&&user.id==message.author.id;
                    const twoFilter=(reaction,user)=>reaction.emoji.name=="2️⃣"&&user.id==message.author.id;
                    const threeFilter=(reaction,user)=>reaction.emoji.name=="3️⃣"&&user.id==message.author.id;
                    const fourFilter=(reaction,user)=>reaction.emoji.name=="4️⃣"&&user.id==message.author.id;
                    const fiveFilter=(reaction,user)=>reaction.emoji.name=="5️⃣"&&user.id==message.author.id;
                    const sixFilter=(reaction,user)=>reaction.emoji.name=="6️⃣"&&user.id==message.author.id;
                    const sevenFilter=(reaction,user)=>reaction.emoji.name=="7️⃣"&&user.id==message.author.id;
                    const eightFilter=(reaction,user)=>reaction.emoji.name=="8️⃣"&&user.id==message.author.id;
                    const nineFilter=(reaction,user)=>reaction.emoji.name=="9️⃣"&&user.id==message.author.id;
                    const one=msg.createReactionCollector(oneFilter,{time:180000});
                    const two=msg.createReactionCollector(twoFilter,{time:180000});
                    const three=msg.createReactionCollector(threeFilter,{time:180000});
                    const four=msg.createReactionCollector(fourFilter,{time:180000});
                    const five=msg.createReactionCollector(fiveFilter,{time:180000});
                    const six=msg.createReactionCollector(sixFilter,{time:180000});
                    const seven=msg.createReactionCollector(sevenFilter,{time:180000});
                    const eight=msg.createReactionCollector(eightFilter,{time:180000});
                    const nine=msg.createReactionCollector(nineFilter,{time:180000});
                    one.on("collect",r=>{
                            if(playing){
                                if(c[0][0]==emoji[0]){
                                    placeBlock(0,0,1)
                                };
                                placeBot();
                                actu();
                                autoDelete();
                                checkWin();
                            };
                        });
                    two.on("collect",r=>{
                        if(playing){
                            if(c[0][1]==emoji[0]){
                                placeBlock(1,0,1)
                            };
                            placeBot();
                            actu();
                            autoDelete();
                            checkWin();
                        };
                    });
                    three.on("collect",r=>{
                        if(playing){
                            if(c[0][2]==emoji[0]){
                                placeBlock(2,0,1)
                            };
                            placeBot();
                            actu();
                            autoDelete();
                            checkWin();
                        };
                    });
                    four.on("collect",r=>{
                        if(playing){
                            if(c[1][0]==emoji[0]){
                                placeBlock(0,1,1)
                            };
                            placeBot();
                            actu();
                            autoDelete();
                            checkWin();
                        };
                    });
                    five.on("collect",r=>{
                        if(playing){
                            if(c[1][1]==emoji[0]){
                                placeBlock(1,1,1)
                            };
                            placeBot();
                            actu();
                            autoDelete();
                            checkWin();
                        };
                    });
                    six.on("collect",r=>{
                        if(playing){
                            if (c[1][2]==emoji[0]){
                                placeBlock(2,1,1)
                            };
                            placeBot();
                            actu();
                            autoDelete();
                            checkWin();
                        };
                    });
                    seven.on("collect",r=>{
                        if(playing){
                            if(c[2][0]==emoji[0]){
                                placeBlock(0,2,1)
                            };
                            placeBot();
                            actu();
                            autoDelete();
                            checkWin();
                        };
                    });
                    eight.on("collect",r=>{
                        if(playing){
                            if(c[2][1]==emoji[0]){
                                placeBlock(1,2,1)
                            };
                            placeBot();
                            actu();
                            autoDelete();
                            checkWin();
                        };
                    });
                    nine.on("collect",r=>{
                        if(playing){
                            if(c[2][2]==emoji[0]){
                                placeBlock(2,2,1)
                            };
                            placeBot();
                            actu();
                            autoDelete();
                            checkWin();
                        };
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