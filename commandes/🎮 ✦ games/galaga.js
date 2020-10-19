const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
function getRandom(max){return Math.floor(Math.random()*Math.floor(max))};
const botclient=require("../../json/d/client.json");
module.exports={
    name:"galaga",category:"🎮 ✦ games",
    description:"To play to galaga",usage:"<prefix>galaga",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"games")){
            let user=message.author.id;
            var emoji=["<:N_:718506491660992735>","<:sc:756392863805472788>","<:as:756393151979192391>","<:exp:756392977986879570>"];
            try{
                if(botclient["users"][user]["curgame"]=="Galaga" || botclient["users"][user]["curgame"]=="galaga"){
                    if(botclient["users"][user]!=undefined&&botclient["users"][user]["cur"]!="none"){
                        var emoji=["<:N_:718506491660992735>",botclient["pack"][botclient["users"][user]["cur"]]["player"],botclient["pack"][botclient["users"][user]["cur"]]["ennemy"],botclient["pack"][botclient["users"][user]["cur"]]["object"]];
                    }else{
                        var emoji=["<:N_:718506491660992735>","<:sc:756392863805472788>","<:as:756393151979192391>","<:exp:756392977986879570>"];
                    };
                };
            }catch(e){};
            const zero=emoji[0];
            const player=emoji[1];
            const l1=[zero,zero,zero,zero,zero,zero,zero,zero,zero];
            const l2=[zero,zero,zero,zero,zero,zero,zero,zero,zero];
            const l3=[zero,zero,zero,zero,zero,zero,zero,zero,zero];
            const l4=[zero,zero,zero,zero,zero,zero,zero,zero,zero];
            const l5=[zero,zero,zero,zero,zero,zero,zero,zero,zero];
            const l6=[zero,zero,zero,zero,zero,zero,zero,zero,zero];
            const l7=[zero,zero,zero,zero,zero,zero,zero,zero,zero];
            const l8=[zero,zero,zero,zero,player,zero,zero,zero,zero];
            const l9=[zero,zero,zero,zero,zero,zero,zero,zero,zero];
            const c=[l1,l2,l3,l4,l5,l6,l7,l8,l9];
            let px=4;
            let py=7;
            let shootx=px;
            let enemycount=0;
            let enemyx=[];
            let enemyy=[];
            let stop=0;
            let spawnTime=0;
            let score=0;
            function placeBlock(x,y,slot){c[y][x]=emoji[slot]};
            function addEnemy(x,y){
                placeBlock(x,y,2);
                enemyx[enemycount]=x;
                enemyy[enemycount]=y;
                enemycount++;
            };
            let embed=new MessageEmbed()
            .setColor(tools.color(message))
            .setTitle("**"+emoji[1]+" GALAGA :**")
            .setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n")
            .setThumbnail(tools.icon(message))
            .setTimestamp();
            message.channel.send(embed).then(msg=>{
                msg.react('717401718417129494').then(r=>{
                    msg.react('717401719696392202').then
                    msg.react('756392977986879570').then
                    function gameOver(){
                        stop=1;
                    }
                    function moveDown(){
                        for(i=0;i<enemycount;i++){
                            if(enemyy[i]<8){
                                if(shootx==enemyx[i]){
                                    if(enemyy[i]!=""){
                                        placeBlock(enemyx[i],enemyy[i],3);
                                    }
                                    enemyy[i]="";
                                    enemyx[i]="";
                                    shootx=0;
                                    score++;
                                }
                                if(enemyy[i]!=""){
                                    placeBlock(enemyx[i],enemyy[i]+1,2);
                                    placeBlock(enemyx[i],enemyy[i],0);
                                    enemyy[i]++;
                                }
                            }else{
                                gameOver();
                            };
                        };
                    };
                    addEnemy(getRandom(7)+1,1);
                    function actions(){
                        spawnTime++;
                        moveDown();
                        if(spawnTime==3){
                            spawnTime=0;
                            addEnemy(getRandom(7)+1,1);
                        };
                    };
                    async function autoDelete(){
                        const userReactions=msg.reactions.cache.filter(reaction=>reaction.users.cache.has(message.author.id));
                        try{
                            for(const reaction of userReactions.values()){
                                await reaction.users.remove(message.author.id);
                            };
                        }catch(e){};
                    };
                    const backwardsFilter=(reaction,user)=>reaction.emoji.id=='717401718417129494'&&user.id==message.author.id;
                    const forwardsFilter=(reaction,user)=>reaction.emoji.id=='717401719696392202'&&user.id==message.author.id;
                    const shootFilter=(reaction,user)=>reaction.emoji.id=='756392977986879570'&&user.id==message.author.id;
                    const backwards=msg.createReactionCollector(backwardsFilter,{time:180000});
                    const forwards=msg.createReactionCollector(forwardsFilter,{time:180000});
                    const shoot=msg.createReactionCollector(shootFilter,{time:180000});
                    backwards.on('collect',r=>{
                        if(!stop){
                            if(px==0){
                                
                                placeBlock(px,py,0);
                                px=8;
                                placeBlock(px,py,1);
                            }else{
                                placeBlock(px-1,py,1);
                                placeBlock(px,py,0);
                                px--;
                            }
                            actions();
                            embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n"+`\`\`\`Score : ${score}\`\`\``)
                            msg.edit(embed);
                            autoDelete();
                        }
                    });
                    forwards.on('collect',r=>{
                        if(!stop){
                            if(px==8){
                                placeBlock(px,py,0);
                                px=0;
                                placeBlock(px,py,1);
                            }else{
                                placeBlock(px+1,py,1);
                                placeBlock(px,py,0);
                                px++;
                            }
                            actions();
                            embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n"+`\`\`\`Score : ${score}\`\`\``);
                            msg.edit(embed);
                            autoDelete();
                        }
                    });
                    shoot.on('collect',r=>{
                        shootx=px;
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