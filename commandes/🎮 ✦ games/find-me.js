const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
module.exports={
    name:"find-me",aliases:["fm","findme"],
    category:"🎮 ✦ games",description:"To play to the find me game",usage:"<prefix>find-me",
    run:async (client,message,args,tools)=>{
        if(tools.category(message,"games")){
            let reacts=["1️⃣","2️⃣","3️⃣"]
            let randomreacts=reacts[Math.floor(Math.random() * reacts.length)];
            let stop=false;
            if(tools.language(message)==0){
                let frquestion=new MessageEmbed().setColor(tools.color(message)).setTitle("**🔎 FIND ME**").setDescription("Find the correct emoji by **clicking on it**.").setThumbnail(tools.icon(message)).setTimestamp();
                message.channel.send(frquestion).then(msg=>{
                    msg.react("1️⃣").then(r=>{
                        msg.react("2️⃣").then(r=>{
                            msg.react("3️⃣");
                            const filter1=(reaction,user)=>reaction.emoji.name=="1️⃣"&&user.id==message.author.id;
                            const filter2=(reaction,user)=>reaction.emoji.name=="2️⃣"&&user.id==message.author.id;
                            const filter3=(reaction,user)=>reaction.emoji.name=="3️⃣"&&user.id==message.author.id;
                            const one=msg.createReactionCollector(filter1,{time:60000});
                            const two=msg.createReactionCollector(filter2,{time:60000});
                            const three=msg.createReactionCollector(filter3,{time:60000});
                            if(stop==false){
                                one.on("collect",r=>{
                                    stop=true;
                                    if(randomreacts=="1️⃣"){
                                        frquestion.setDescription("You found the correct emoji ! :)\n\nThe correct emoji was the number "+randomreacts+" !");
                                        tools.newWin(message,"findme");
                                    }else{
                                        frquestion.setDescription("You lost !\n\nThe correct emoji was the number "+randomreacts+" !\nYou chose the number 1️⃣");
                                        tools.newDefeat(message,"findme");
                                    };
                                    msg.edit(frquestion);
                                    msg.reactions.removeAll();
                                });
                                two.on("collect",r=>{
                                    stop=true;
                                    if(randomreacts=="2️⃣"){
                                        frquestion.setDescription("You found the correct emoji ! :)\n\nThe correct emoji was the number "+randomreacts+" !");
                                        tools.newWin(message,"findme");
                                    }else{
                                        
                                        frquestion.setDescription("You lost !\n\nThe correct emoji was the number "+randomreacts+" !\nYou chose the number 2️⃣");
                                        tools.newDefeat(message,"findme");
                                    };
                                    msg.edit(frquestion);
                                    msg.reactions.removeAll();
                                });
                                three.on("collect",r=>{
                                    stop=true;
                                    if(randomreacts=="3️⃣"){
                                        frquestion.setDescription("You found the correct emoji ! :)\n\nThe correct emoji was the number "+randomreacts+" !");
                                        tools.newWin(message,"findme");
                                    }else{
                                        
                                        frquestion.setDescription("You lost !\n\nThe correct emoji was the number "+randomreacts+" !\nYou chose the number 3️⃣");
                                        tools.newDefeat(message,"findme");
                                    };
                                    msg.edit(frquestion);
                                    msg.reactions.removeAll();
                                });
                            };
                        });
                    });
                });
            }else if(language[message.guild.id].language=="french"){
                let frquestion=new MessageEmbed().setColor(tools.color(message)).setTitle("**🔎 FIND ME**").setDescription("Trouve le bon emoji en **cliquant dessus**.").setThumbnail(tools.icon(message)).setTimestamp();
                message.channel.send(frquestion).then(msg=>{
                    msg.react("1️⃣").then(r=>{
                        msg.react("2️⃣").then(r=>{
                            msg.react("3️⃣")
                            const filter1=(reaction,user)=>reaction.emoji.name=="1️⃣"&&user.id==message.author.id;
                            const filter2=(reaction,user)=>reaction.emoji.name=="2️⃣"&&user.id==message.author.id;
                            const filter3=(reaction,user)=>reaction.emoji.name=="3️⃣"&&user.id==message.author.id;
                            const one=msg.createReactionCollector(filter1,{ time:60000 });
                            const two=msg.createReactionCollector(filter2,{ time:60000 });
                            const three=msg.createReactionCollector(filter3,{ time:60000 });
                            if(stop==false){
                                one.on("collect",r=>{
                                    stop=true;
                                    if(randomreacts=="1️⃣"){
                                        frquestion.setDescription("Tu as trouvé le bon emoji ! :)\n\nLe bon emoji était bien le numéro "+randomreacts+" !")
                                        tools.newWin(message,"findme");
                                    }else{
                                        frquestion.setDescription("Tu as perdu !\n\nLe bon emoji était le numéro "+randomreacts+" !\nVous aviez choisi le numéro 1️⃣")
                                        tools.newDefeat(message,"findme");
                                    };
                                    msg.edit(frquestion);
                                    msg.reactions.removeAll()
                                });
                                two.on("collect",r=>{
                                    stop=true;
                                    if(randomreacts=="2️⃣"){
                                        frquestion.setDescription("Tu as trouvé le bon emoji ! :)\n\nLe bon emoji était bien le numéro "+randomreacts+" !")
                                        tools.newWin(message,"findme");
                                    }else{
                                        frquestion.setDescription("Tu as perdu !\n\nLe bon emoji était le numéro "+randomreacts+" !\nVous aviez choisi le numéro 2️⃣")
                                        tools.newDefeat(message,"findme");
                                    };
                                    msg.edit(frquestion);
                                    msg.reactions.removeAll()
                                });
                                three.on("collect",r=>{
                                    stop=true;
                                    if(randomreacts=="3️⃣"){
                                        
                                        frquestion.setDescription("Tu as trouvé le bon emoji ! :)\n\nLe bon emoji était bien le numéro "+randomreacts+" !")
                                        tools.newWin(message,"findme");
                                    }else{
                                        frquestion.setDescription("Tu as perdu !\n\nLe bon emoji était le numéro "+randomreacts+" !\nVous aviez choisi le numéro 3️⃣")
                                        tools.newDefeat(message,"findme");
                                    };
                                    msg.edit(frquestion);
                                    msg.reactions.removeAll()
                                });
                            };
                        });
                    });
                });
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