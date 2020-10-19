const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
module.exports={
    name:"slot-machine",aliases:["sm","slot","slotmachine"],category:"🎮 ✦ games",
    description:"To play to the slot machine",usage:"<prefix>slot-machine",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"games")){
            let slots=["735441345883406346","735441345870823494","735441345954578512"];
            let slot1=slots[Math.floor(Math.random()*slots.length)];
            let slot2=slots[Math.floor(Math.random()*slots.length)];
            let slot3=slots[Math.floor(Math.random()*slots.length)];
            let isvalid="❌";
            if(slot1==slot2&&slot2==slot3){
                tools.newWin(message,"slotmachine");
                isvalid="✅";
            }else{
                tools.newDefeat(message,"slotmachine");
            };
            var embed=new MessageEmbed().setTitle("**🎰 SLOT MACHINE**").setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setDescription("**|** "+tools.emoji(client,"735441761882734623")+" **|** "+tools.emoji(client,"735441762176467014")+" **|** "+tools.emoji(client,"735441762256027668")+" **|**");
            let msg=await message.channel.send(embed);
            setTimeout(()=>{
                embed.setDescription("**|** "+tools.emoji(client,slot1)+" **|** "+tools.emoji(client,"735441762176467014")+" **|** "+tools.emoji(client,"735441762256027668")+" **|**");
                msg.edit(embed);
                setTimeout(()=>{
                    embed.setDescription("**|** "+tools.emoji(client,slot1)+" **|** "+tools.emoji(client,slot2)+" **|** "+tools.emoji(client,"735441762256027668")+" **|**");
                    msg.edit(embed);
                    setTimeout(()=>{
                        if(tools.language(message)==0){
                            embed.setDescription("**|** "+tools.emoji(client,slot1)+" **|** "+tools.emoji(client,slot2)+" **|** "+tools.emoji(client,slot3)+" **|**\n\nResult : "+isvalid);
                        }else{
                            embed.setDescription("**|** "+tools.emoji(client,slot1)+" **|** "+tools.emoji(client,slot2)+" **|** "+tools.emoji(client,slot3)+" **|**\n\nRésultat : "+isvalid);
                        };
                        msg.edit(embed);
                    },1000);
                },1000);
            },1000);
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"games\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category games enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"games\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category games enable```"));
            };
        };
    }
};