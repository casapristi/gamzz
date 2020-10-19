const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
module.exports={
    name:"pseudo-generator",aliases:["ps","pseudo","pseudogenerator","pg"],
    category:"🚨 ✦ utilities",description:"To generate a pseudonyme",usage:"<prefix>pseudo",
    run:async(client,message,args,tools)=>{
        const consone=["z","r","t","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n",""];
        const voyelle=["a","e","i","o","u","y","ou","on","un","in","en","an",""];
        let letter1=consone[Math.floor(Math.random()*consone.length)];
        let letter2=voyelle[Math.floor(Math.random()*voyelle.length)];
        let letter3=consone[Math.floor(Math.random()*consone.length)];
        let letter4=voyelle[Math.floor(Math.random()*voyelle.length)];
        let letter5=consone[Math.floor(Math.random()*consone.length)];
        let letter6=voyelle[Math.floor(Math.random()*voyelle.length)];
        if(tools.category(message,"utilities")){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setTitle("**🆎 PSEUDO GENERATOR**").setDescription("**Your new pseudo :**\n``"+letter1+letter2+letter3+letter4+letter5+letter6+"``"));
            }else{
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setTitle("**🆎 GENERATEUR DE PSEUDO**").setDescription("**Vôtre nouveau pseudo :**\n``"+letter1+letter2+letter3+letter4+letter5+letter6+"``"));
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