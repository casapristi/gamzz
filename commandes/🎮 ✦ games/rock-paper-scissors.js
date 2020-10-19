const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
module.exports={
    name:"rock-paper-scissors",aliases:["rps"],category:"🎮 ✦ games",
    description:"To play to rock paper scissors",usage:"<prefix>rock-paper-scissors",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"games")){
            if(tools.language(message)==0){
                var t=new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setTitle("**<:rock:716601680057204757> ROCK PAPER SCISSORS**").setDescription("**Click on a reaction**")
            }else{
                var t=new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setTitle("**<:rock:716601680057204757> PIERRE FEUILLE CISEAUX**").setDescription("**Clique sur une réaction**")
            };
            message.channel.send(t).then(msg=>{
                msg.react("716601680057204757").then(r=>{
                    msg.react("🍃").then(r=>{
                        msg.react("✂");
                        const filterRock=(reaction,user)=>reaction.emoji.id=="716601680057204757"&&user.id==message.author.id;
                        const filterPaper=(reaction,user)=>reaction.emoji.name=="🍃"&&user.id==message.author.id;
                        const filterScissors=(reaction,user)=>reaction.emoji.name=="✂"&&user.id==message.author.id;
                        const rock=msg.createReactionCollector(filterRock,{time:20000});
                        const paper=msg.createReactionCollector(filterPaper,{time:20000});
                        const scissors=msg.createReactionCollector(filterScissors,{time:20000});
                        var result;var choice;
                        rock.on("collect",r=>{
                            if(tools.language(message)==0){
                                const l=["fix\nrock","diff\n+ paper","diff\n- scissors"];
                                const rl=l[Math.floor(Math.random()*l.length)];
                                if(rl==l[0])result="It's a tie",choice="fix\nrock";
                                if(rl==l[1])result="You lose",choice="diff\n- rock",tools.newDefeat(message,"rps");
                                if(rl==l[2])result="You win",choice="diff\n+ rock",tools.newWin(message,"rps");
                                t.setDescription(`__**${result.toUpperCase()}**__`).addField("Your choice","**```"+choice+"```**",true).addField("My choice","**```"+rl+"```**",true);
                                msg.edit(t);
                            }else{
                                const l=["fix\npierre","diff\n+ feuille","diff\n- ciseaux"];
                                const rl=l[Math.floor(Math.random()*l.length)];
                                if(rl==l[0])result="Égalité",choice="fix\npierre";
                                if(rl==l[1])result="Vous avez perdu",choice="diff\n- pierre",tools.newDefeat(message,"rps");
                                if(rl==l[2])result="Vous avez gagné",choice="diff\n+ pierre",tools.newWin(message,"rps");
                                t.setDescription(`__**${result.toUpperCase()}**__`).addField("Vôtre choix","**```"+choice+"```**",true).addField("Mon choix","**```"+rl+"```**",true);
                                msg.edit(t);
                            };
                            msg.reactions.removeAll();
                        });
                        paper.on("collect",r=>{
                            if(tools.language(message)==0){
                                const l=["diff\n- rock","fix\npaper","diff\n+ scissors"];
                                const rl=l[Math.floor(Math.random()*l.length)];
                                if(rl==l[0])result="You win",choice="diff\n+ paper",tools.newWin(message,"rps");
                                if(rl==l[1])result="It's a tie",choice="fix\npaper";
                                if(rl==l[2])result="You lose",choice="diff\n- paper",tools.newDefeat(message,"rps");
                                t.setDescription(`__**${result.toUpperCase()}**__`).addField("Your choice","**```"+choice+"```**",true).addField("My choice","**```"+rl+"```**",true);
                                msg.edit(t);
                            }else{
                                const l=["diff\n- pierre","fix\nfeuille","diff\n+ ciseaux"];
                                const rl=l[Math.floor(Math.random()*l.length)];
                                if(rl==l[0])result="Vous avez gagné",choice="diff\n+ feuille",tools.newWin(message,"rps");
                                if(rl==l[1])result="Égalité",choice="fix\nfeuille";
                                if(rl==l[2])result="Vous avez perdu",choice="diff\n- feuille",tools.newDefeat(message,"rps");
                                t.setDescription(`__**${result.toUpperCase()}**__`).addField("Vôtre choix","**```"+choice+"```**",true).addField("Mon choix","**```"+rl+"```**",true);
                                msg.edit(t);
                            };
                            msg.reactions.removeAll();
                        });
                        scissors.on("collect",r=>{
                            if(tools.language(message)==0){
                                const l=["diff\n+ rock","diff\n- paper","fix\nscissors"];
                                const rl=l[Math.floor(Math.random()*l.length)];
                                if(rl==l[0])result="You lose",choice="diff\n- scissors",tools.newDefeat(message,"rps");
                                if(rl==l[1])result="You win",choice="diff\n+ scissors",tools.newWin(message,"rps");
                                if(rl==l[2])result="It's a tie",choice="fix\nscissors";
                                t.setDescription(`__**${result.toUpperCase()}**__`).addField("Your choice","**```"+choice+"```**",true).addField("My choice","**```"+rl+"```**",true);
                                msg.edit(t);
                            }else{
                                const l=["diff\n+ pierre","diff\n- feuille","fix\nciseaux"];
                                const rl=l[Math.floor(Math.random()*l.length)];
                                if(rl==l[0])result="Vous avez perdu",choice="diff\n- ciseaux",tools.newDefeat(message,"rps");
                                if(rl==l[1])result="Vous avez gagné",choice="diff\n+ ciseaux",tools.newWin(message,"rps");
                                if(rl==l[2])result="Égalité",choice="fix\nciseaux";
                                t.setDescription(`__**${result.toUpperCase()}**__`).addField("Vôtre choix","**```"+choice+"```**",true).addField("Mon choix","**```"+rl+"```**",true);
                                msg.edit(t);
                            };
                            msg.reactions.removeAll();
                        });
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