const{MessageEmbed,MessageAttachment}=require("discord.js");
const config=require("../../json/u/config.json");
const tempy=require("tempy");
const qrcode=require("qrcode");
const name=Math.random().toString(36).substring(2,9);
module.exports={
    name:"qrcode",category:"🚨 ✦ utilities",
    description:"To change your text to a QRcode",usage:"<prefix>qrcode <link/text>",exemple:"qrcode https://discord.com/api/oauth2/authorize?client_id=746402751621234769&permissions=1812327649&scope=bot",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"utilities")){
            const qrOutput=tempy.file({extension:"png"});
            if(args.length>0){
                qrcode.toFile(qrOutput,args.join(" "),{margin:1},(error)=>{
                    if(error)throw new Error(error);
                });
                const attachment=new MessageAttachment(qrOutput,name+".png");
                if(tools.language(message)==0){
                    message.channel.send(new MessageEmbed().setTimestamp().setThumbnail(tools.icon(message)).setColor(tools.color(message)).attachFiles(attachment).setImage("attachment://"+name+".png").setTitle("**📷 QRCODE**").setDescription(`**This is the QR Code under the link : \`\`\`\n${args.join(" ")}\`\`\`**`));
                }else{
                    message.channel.send(new MessageEmbed().setTimestamp().setThumbnail(tools.icon(message)).setColor(tools.color(message)).attachFiles(attachment).setImage("attachment://"+name+".png").setTitle("**📷 QRCODE**").setDescription(`**Voici votre QR Code sous le lien de : \`\`\`\n${args.join(" ")}\`\`\`**`));
                };
            }else if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nYou must write arguments**\nTry that :\n```"+tools.prefix(message)+module.exports.exemple+"```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nVous devez écrire des arguments**\nEssaye ça :\n```"+tools.prefix(message)+module.exports.exemple+"```"));
            };
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"utilities\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category utilities enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"utilities\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category utilities enable```"));
            };
        };
    }
};