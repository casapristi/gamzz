const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
const user=require("../../json/d/user.json");
const fs=require("fs");
function getRandom(max){return Math.floor(Math.random()*Math.floor(max))};
module.exports={
    name:"pacman",category:"🎮 ✦ games",
    description:"To play to a discord pacman",usage:"<prefix>pacman",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"games")){
            if(args[0]=="s"||args[0]=="settings"){
                let embed=new MessageEmbed()
                .setColor(tools.color(message))
                .setThumbnail(tools.icon(message))
                .setTimestamp()
                if(tools.language(message)==0){
                    embed.setDescription("**What border style whould you like to give to have ?**\nAvaliable colors : ⬜, 🟥, 🟧, 🟨, 🟩, 🟦, 🟪, 🟫, ⬛").setTitle("**<:pacman:747733530188185642> PACMAN SETTINGS :**");
                }else{
                    embed.setDescription("**Quel type de bordures voulez vous ?**\nCouleurs disponibles : ⬜, 🟥, 🟧, 🟨, 🟩, 🟦, 🟪, 🟫, ⬛").setTitle("**<:pacman:747733530188185642> PARAMERTES DE PACMAN :**");
                };
                message.channel.send(embed);
                try{
                    let msgs=await message.channel.awaitMessages(u2=>u2.author.id===message.author.id,{time:30000,max:1,errors:["time"]})
                    if(msgs.first().content=="⬜"||msgs.first().content=="🟥"||msgs.first().content=="🟧"||msgs.first().content=="🟨"||msgs.first().content=="🟩"||msgs.first().content=="🟦"||msgs.first().content=="🟪"||msgs.first().content=="🟫"||msgs.first().content=="⬛"){
                        let embedd=new MessageEmbed()
                        .setColor(tools.color(message))
                        .setThumbnail(tools.icon(message))
                        .setTimestamp()
                        if(tools.language(message)==0){
                            embedd.setDescription("**What pacman style whould you like to have ?**\nAll emojis (even personalized) are available.")
                            .setTitle("**<:pacman:747733530188185642> PACMAN SETTINGS :**")
                        }else{
                            embedd.setDescription("**Quel type de pacman voulez vous ?**\nTous les emojis (même personnalisées) sont disponibles.")
                            .setTitle("**<:pacman:747733530188185642> PARAMERTES DE PACMAN :**")
                        };
                        user[message.author.id].pacman={
                            border:msgs.first().content,
                            pacman:"🟡"
                        };
                        fs.writeFile("./json/d/user.json",JSON.stringify(user,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});
                        message.channel.send(embedd)
                        try{
                            let msgs=await message.channel.awaitMessages(u2=>u2.author.id===message.author.id,{ time:30000,max:1,errors:["time"] })
                            if(msgs.first().content){
                                let embedd=new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp();
                                user[message.author.id].pacman={
                                    border:user[message.author.id].pacman.border,
                                    pacman:msgs.first().content
                                };
                                fs.writeFile("./json/d/user.json",JSON.stringify(user,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});
                                if(tools.language(message)==0){
                                    embedd.setDescription("**Your pacman has been succesfully changed with :\n**"+user[message.author.id].pacman.border+" and "+user[message.author.id].pacman.pacman+".")
                                    .setTitle("**<:pacman:747733530188185642> PACMAN SETTINGS :**");
                                }else{
                                    embedd.setDescription("**Vôtre pacman à été modifié avec succes avec :\n**"+user[message.author.id].pacman.border+" et "+user[message.author.id].pacman.pacman+".")
                                    .setTitle("**<:pacman:747733530188185642> PARAMERTES DE PACMAN :**");
                                };
                                return message.channel.send(embedd);
                            };
                        }catch(e){
                            if(tools.language(message)==0){
                                let embed=new MessageEmbed()
                                .setColor(config.Cerr)
                                .setTimestamp()
                                .setThumbnail(config.Ierr)
                                .setTitle("**<:pacman:747733530188185642> PACMAN SETTINGS :**")
                                .setDescription("You did not answer...")
                                return message.channel.send(embed);
                            }else{
                                let embed=new MessageEmbed()
                                .setColor(config.Cerr)
                                .setTimestamp()
                                .setThumbnail(config.Ierr)
                                .setTitle("**<:pacman:747733530188185642> PACMAN SETTINGS :**")
                                .setDescription("Vous n'avez pas répondu...")
                                return message.channel.send(embed);
                            };
                        };
                    }else{
                        let embedd=new MessageEmbed()
                        .setColor(config.Cerr)
                        .setThumbnail(config.Ierr)
                        .setTimestamp()
                        if(tools.language(message)==0){
                            embedd.setDescription("**You can't change your border with "+msgs.first().content+".**")
                            .setTitle("**<:pacman:747733530188185642> PACMAN SETTINGS :**")
                        }else{
                            embedd.setDescription("**Vous ne pouvez pas changer vos borduers avec "+msgs.first().content+".**")
                            .setTitle("**<:pacman:747733530188185642> PARAMERTES DE PACMAN :**")
                        };
                        return message.channel.send(embedd)
                    };
                }catch(e){
                    if(tools.language(message)==0){
                        let embed=new MessageEmbed()
                        .setColor(config.Cerr)
                        .setTimestamp()
                        .setThumbnail(config.Ierr)
                        .setTitle("**<:pacman:747733530188185642> PACMAN SETTINGS :**")
                        .setDescription("You did not answer...")
                        return message.channel.send(embed)
                    }else{
                        let embed=new MessageEmbed()
                        .setColor(config.Cerr)
                        .setTimestamp()
                        .setThumbnail(config.Ierr)
                        .setTitle("**<:pacman:747733530188185642> PACMAN SETTINGS :**")
                        .setDescription("Vous n'avez pas répondu...")
                        return message.channel.send(embed)
                    };
                };
            };
            if(user[message.author.id].pacman){
                var emoji=["◽",user[message.author.id].pacman.border,user[message.author.id].pacman.pacman,"<:N_:718506491660992735>"];
            }else{
                var emoji=["◽","🟦","🟡","<:N_:718506491660992735>"];
            };
            let phantom=["<:ph:757143611572748318>"];
            let win=[":regional_indicator_y:",":regional_indicator_o:",":regional_indicator_u:",":regional_indicator_w:",":regional_indicator_i:",":regional_indicator_n:","🟦"];
            let game_over=[":regional_indicator_g:",":regional_indicator_a:",":regional_indicator_m:",":regional_indicator_e:",":regional_indicator_o:",":regional_indicator_v:",":regional_indicator_e:",":regional_indicator_r:",];
            let l1=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l2=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l3=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l4=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l5=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[2],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l6=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l7=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l8=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l9=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let c=[l1,l2,l3,l4,l5,l6,l7,l8,l9];
            coin=0;
            let px=7;
            let py=4;
            let fx=1;
            let fy=1;
            let fx1=13;
            let fy1=1;
            let fx2=13;
            let fy2=7;
            let fx3=1;
            let fy3=7;
            function placeBlock(x,y,slot){c[y][x]=emoji[slot]};
            function placeWin(x,y,slot){c[y][x]=win[slot]};
            function placeDeath(x,y,slot){c[y][x]=game_over[slot]};
            function placePhantom(x,y,slot){c[y][x]=phantom[slot]};
            function getBlock(x,y){return c[y][x]};
            function onWin(){
                placeWin(4,4,0);
                placeWin(5,4,1);
                placeWin(6,4,2);
                placeWin(8,4,3);
                placeWin(9,4,4);
                placeWin(10,4,5);
            };
            function gameOver(){
                placeDeath(3,4,0);
                placeDeath(4,4,1);
                placeDeath(5,4,2);
                placeDeath(6,4,3);
                placeDeath(8,4,4);
                placeDeath(9,4,5);
                placeDeath(10,4,6);
                placeDeath(11,4,7);
            };
            function checkDeath(){
                if(px==fx&&py==fy){
                    gameOver();
                }else if(px==fx1&&py==fy1){
                    gameOver();
                }else if(px==fx2&&py==fy2){
                    gameOver();
                }else if(px==fx3&&py==fy3){
                    gameOver();
                };
            };
            for(i=0;i<14;i++)placeBlock(i,0,1);
            for(i=0;i<14;i++)placeBlock(i,8,1);
            for(i=0;i<9;i++)placeBlock(14,i,1);
            for(i=0;i<8;i++)placeBlock(0,i,1);
            for(i=2;i<7;i++)placeBlock(2,i,1);
            for(i=2;i<7;i++)placeBlock(12,i,1);
            for(i=3;i<6;i++)placeBlock(i,4,1);
            placeBlock(px+1,py,1);
            placeBlock(px+2,py,1);
            placeBlock(px+3,py,1);
            placeBlock(px+4,py,1);
            placeBlock(px-1,py,1);
            var a=4;
            while (a <= 10){
                placeBlock(a,py-2,1);
                a++;
            };
            a=4;
            while (a <= 10){
                placeBlock(a,py+2,1);
                a++;
            };
            placeBlock(px-2,py+2,0);
            placeBlock(px+2,py+2,0);
            placeBlock(px+2,py-2,0);
            placeBlock(px-2,py-2,0);
            placePhantom(fx,fy,0);
            placePhantom(fx1,fy1,0);
            placePhantom(fx2,fy2,0);
            placePhantom(fx3,fy3,0);
            function movePhantom(){
                if(px>fx){
                    if(getBlock(fx+1,fy)!=emoji[1]){
                        placePhantom(fx+1,fy,0);
                        placeBlock(fx,fy,0);
                        fx++;
                    };
                }else if(px<fx){
                    if(getBlock(fx-1,fy)!=emoji[1]){
                        placePhantom(fx-1,fy,0);
                        placeBlock(fx,fy,0);
                        fx--;
                    }
                }else{
                    if(py>fy){
                        if(getBlock(fx,fy+1)!=emoji[1]){
                            placePhantom(fx,fy+1,0);
                            placeBlock(fx,fy,0);
                            fy++;
                        }
                    }else if(py<fy){
                        if(getBlock(fx,fy-1)!=emoji[1]){
                            placePhantom(fx,fy-1,0);
                            placeBlock(fx,fy,0);
                            fy--;
                        }
                    }
                }
            }
            function movePhantom1(){
                if(py>fy1){
                    if(getBlock(fx1,fy1+1)!=emoji[1]){
                        placePhantom(fx1,fy1+1,0);
                        placeBlock(fx1,fy1,0);
                        fy1++;
                    }
                }else if(py<fy1){
                    if(getBlock(fx1,fy1-1)!=emoji[1]){
                        placePhantom(fx1,fy1-1,0);
                        placeBlock(fx1,fy1,0);
                        fy1--;
                    }
                }else{
                    if(px>fx1){
                        if(getBlock(fx1+1,fy1)!=emoji[1]){
                            placePhantom(fx1+1,fy1,0);
                            placeBlock(fx1,fy1,0);
                            fx1++;
                        }
                    }else if(py<fy1){
                        if(getBlock(fx1-1,fy1)!=emoji[1]){
                            placePhantom(fx1-1,fy1,0);
                            placeBlock(fx1,fy1,0);
                            fx1--;
                        }
                    }
                }
            }
            function movePhantom2(){
                var dir=getRandom(4);
                if(dir==0){
                    if(getBlock(fx2+1,fy2)!=emoji[1]){
                        placePhantom(fx2+1,fy2,0);
                        placeBlock(fx2,fy2,0);
                        fx2++;
                    }
                }else if(dir==2){
                    if(getBlock(fx2-1,fy2)!=emoji[1]){
                        placePhantom(fx2-1,fy2,0);
                        placeBlock(fx2,fy2,0);
                        fx2--;
                    }
                }else{
                    if(dir==1){
                        if(getBlock(fx2,fy2+1)!=emoji[1]){
                            placePhantom(fx2,fy2+1,0);
                            placeBlock(fx2,fy2,0);
                            fy2++;
                        }
                    }else if(dir==3){
                        if(getBlock(fx2,fy2-1)!=emoji[1]){
                            placePhantom(fx2,fy2-1,0);
                            placeBlock(fx2,fy2,0);
                            fy2--;
                        }
                    }
                }
            }
            function movePhantom3(){
                var dir=getRandom(4);
                if(dir==4){
                    if(getBlock(fx3+1,fy3)!=emoji[1]){
                        placePhantom(fx3+1,fy3,0);
                        placeBlock(fx3,fy3,0);
                        fx3++;
                    }
                }else if(dir==2){
                    if(getBlock(fx3-1,fy3)!=emoji[1]){
                        placePhantom(fx3-1,fy3,0);
                        placeBlock(fx3,fy3,0);
                        fx3--;
                    }
                }else{
                    if(dir==3){
                        if(getBlock(fx3,fy3+1)!=emoji[1]){
                            placePhantom(fx3,fy3+1,0);
                            placeBlock(fx3,fy3,0);
                            fy3++;
                        }
                    }else if(dir==1){
                        if(getBlock(fx3,fy3-1)!=emoji[1]){
                            placePhantom(fx3,fy3-1,0);
                            placeBlock(fx3,fy3,0);
                            fy3--;
                        }
                    }
                }
            }
            function movePhantoms(){
                movePhantom();
                movePhantom1();
                movePhantom2();
                movePhantom3();
            }
            let def=l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n"+`**\`\`\`\nCoins :${coin}\`\`\`**`;
            let embed=new MessageEmbed()
            .setColor(tools.color(message))
            .setTitle("**<:pacman:747733530188185642> PACMAN :**")
            .setDescription(def)
            .setThumbnail(tools.icon(message))
            .setThumbnail();
            message.channel.send(embed).then(msg=>{
                msg.react("717401718417129494").then(r=>{
                    msg.react("717401719696392202").then
                    msg.react("717401719142744195").then
                    msg.react("747821958355222548");
                    function checkCoin(){
                        if(coin>=29){
                            onWin();
                            c=[l1,l2,l3,l4,l5,l6,l7,l8,l9];
                            def=l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n"+`**\`\`\`\nCoins :30\`\`\``
                            embed.setDescription(def);
                            msg.edit(embed);
                            tools.newWin(message,"pacman")
                        };
                    };
                    const backwardsFilter=(reaction,user)=>reaction.emoji.id=="717401718417129494"&&user.id==message.author.id;
                    const forwardsFilter=(reaction,user)=>reaction.emoji.id=="717401719696392202"&&user.id==message.author.id;
                    const upFilter=(reaction,user)=>reaction.emoji.id=="717401719142744195"&&user.id==message.author.id;
                    const downFilter=(reaction,user)=>reaction.emoji.id=="747821958355222548"&&user.id==message.author.id;
                    const backwards=msg.createReactionCollector(backwardsFilter,{time:60000});
                    const forwards=msg.createReactionCollector(forwardsFilter,{time:60000});
                    const up=msg.createReactionCollector(upFilter,{time:60000});
                    const down=msg.createReactionCollector(downFilter,{time:60000});
                    backwards.on("collect",async r=>{
                        const userReactions=msg.reactions.cache.filter(reaction=>reaction.users.cache.has(message.author.id));
                        try{
                            for(const reaction of userReactions.values()){
                                await reaction.users.remove(message.author.id);
                            }
                        }catch(e){
                            console.error("Failed to remove reactions.");
                        }
                        if(getBlock(px-1,py)!=emoji[1]){
                            if(getBlock(px-1,py)==emoji[0]){
                                coin++;
                            }
                            placeBlock(px-1,py,2);
                            placeBlock(px,py,3);
                            movePhantoms();
                            px--;
                            c=[l1,l2,l3,l4,l5,l6,l7,l8,l9];
                            def=l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n"+`**\`\`\`\nCoins :${coin}\`\`\`**`
                            embed.setDescription(def);
                            msg.edit(embed);
                        }
                        checkCoin();
                        checkDeath();
                    });
                    forwards.on("collect",async r=>{
                        const userReactions=msg.reactions.cache.filter(reaction=>reaction.users.cache.has(message.author.id));
                        try{
                            for(const reaction of userReactions.values()){
                                await reaction.users.remove(message.author.id);
                            }
                        }catch(e){
                            console.error("Failed to remove reactions.");
                        }
                        var patch=1;
                        if(getBlock(px+1,py)!=emoji[1]){
                            if(getBlock(px+1,py)==emoji[0]){
                                coin++;
                            }
                            if(getBlock(px+1,py-1)==emoji[1]){
                                var patch=0;
                            }
                            placeBlock(px+1,py,2);
                            placeBlock(px,py,3);
                            movePhantoms();
                            px++;
                            if(!patch){
                                placeBlock(px,py-1,1);
                                let c=[l1,l2,l3,l4,l5,l6,l7,l8,l9];
                                let def=l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n"+`**\`\`\`\nCoins :${coin}\`\`\`**`
                                embed.setDescription(def);
                                msg.edit(embed);
                                patch=1
                            }
                            let c=[l1,l2,l3,l4,l5,l6,l7,l8,l9];
                            let def=l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n"+`**\`\`\`\nCoins :${coin}\`\`\`**`
                            embed.setDescription(def);
                            msg.edit(embed);
                        }
                        checkCoin();
                        checkDeath();
                    });
                    up.on("collect",async r=>{
                        const userReactions=msg.reactions.cache.filter(reaction=>reaction.users.cache.has(message.author.id));
                        try{
                            for(const reaction of userReactions.values()){
                                await reaction.users.remove(message.author.id);
                            }
                        }catch(e){
                            console.error("Failed to remove reactions.");
                        }
                        if(getBlock(px,py-1)!=emoji[1]){
                            if(getBlock(px,py-1)==emoji[0]){
                                coin++;
                            }
                            placeBlock(px,py-1,2);
                            placeBlock(px,py,3);
                            movePhantoms();
                            py--;
                            let c=[l1,l2,l3,l4,l5,l6,l7,l8,l9];
                            let def=l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n"+`**\`\`\`\nCoins :${coin}\`\`\`**`
                            embed.setDescription(def);
                            msg.edit(embed);
                        }
                        checkCoin();
                        checkDeath();
                    });
                    down.on("collect",async r=>{
                        const userReactions=msg.reactions.cache.filter(reaction=>reaction.users.cache.has(message.author.id));
                        try{
                            for(const reaction of userReactions.values()){
                                await reaction.users.remove(message.author.id);
                            }
                        }catch(e){
                            console.error("Failed to remove reactions.");
                        }
                        if(getBlock(px,py+1)!=emoji[1]){
                            if(getBlock(px,py+1)==emoji[0]){
                                coin++;
                            }
                            placeBlock(px,py+1,2);
                            placeBlock(px,py,3);
                            movePhantoms();
                            fx++;
                            py++;
                            let c=[l1,l2,l3,l4,l5,l6,l7,l8,l9];
                            let def=l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n"+`**\`\`\`\nCoins :${coin}\`\`\`**`
                            embed.setDescription(def);
                            msg.edit(embed);
                        }
                        checkCoin();
                        checkDeath();
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