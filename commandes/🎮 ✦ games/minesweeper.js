const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
function getRandom(max){return Math.floor(Math.random()*Math.floor(max))};
module.exports={
    name:"minesweeper",aliases:["mw"],category:"🎮 ✦ games",
    description:"To play to the minesweeper",usage:"<prefix>minesweeper [mine-number]",
    run:async(client,message,args,tools)=>{
        const num=(Math.floor(Math.random()*20-1))+3;
        const l=[num,""];
        const r=l[Math.floor(Math.random()*l.length)];
        if(tools.category(message,"games")){
            if(parseInt(args[0])>25){
                if(tools.language(message)==0){
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou can't reach more than 25 bombs.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+r+"```"));
                }else{
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous ne pouvez pas atteindre plus de 25 bombes.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+r+"```"));
                };
                return;
            };
            if(parseInt(args[0])<3){
                if(tools.language(message)==0){
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou can't reach less than 3 bombs.**\nTry this :\n```"+tools.prefix(message)+module.exports.name+" "+r+"```"));
                }else{
                    message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nVous ne pouvez pas atteindre moins de 3 bombes.**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.name+" "+r+"```"));
                };
                return;
            };
            var b=parseInt(args[0])+1;
            if(!args[0])b=9
            let emoji=["||🟦||","||:one:||","||:two:||","||:three:||","||:four:||","||:five:||","||:boom:||"];
            let l1=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l2=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l3=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l4=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l5=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l6=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l7=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l8=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let l9=[emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
            let c=[l1,l2,l3,l4,l5,l6,l7,l8,l9];
            function upBlock(x,y){
                let tier1=[emoji[0],"||:one:||","||:two:||","||:three:||","||:four:||","||:five:||","||:boom:||"];
                let tier2=["||:one:||","||:two:||","||:three:||","||:four:||","||:five:||","||:six:||","||:boom:||"];
                if(x>=0&&x<=8&&y>=0&&y<=8){for(i=0;i<7;i++){if(c[y][x]==tier1[i]){var ly=c[y][x]=tier2[i];return}}};
            };
            function placeBomb(x,y){
                if(c[y][x]!="||:bomb:||"){var ly=c[y][x]=emoji[6];
                    upBlock(x,y+1);
                    upBlock(x,y-1);
                    upBlock(x+1,y+1);
                    upBlock(x-1,y+1);
                    upBlock(x+1,y-1);
                    upBlock(x-1,y-1);
                    upBlock(x-1,y);
                    upBlock(x+1,y);
                }else{placeBomb(getRandom(8),getRandom(8))};
            };
            for(let t=0;t<b;t++){
                placeBomb(getRandom(8),getRandom(8));
            };
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTitle("**💥 MINESWEEPER**").setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n"));
            }else{
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTitle("**💥 DEMINEUR**").setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n"));
            };
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"games\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category fun enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"games\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category fun enable```"));
            };
        };
    }
};