const{MessageEmbed}=require("discord.js");
const config=require("../../json/u/config.json");
module.exports={
    name:"youtube",aliases:["ytb","yt"],category:"🔍 ✦ search",
    description:"To search something on YouTube",usage:"<prefix>youtube [search]",
    run:async(client,message,args,tools)=>{
        if(tools.category(message,"search")){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setDescription("This is the link for `"+args.join(" ")+"`\n[**CLICK HERE**](https://www.youtube.com/results?search_query="+args.join("+")+")").setTitle("**🔎 YOUTUBE**"));
            }else{
                message.channel.send(new MessageEmbed().setColor(tools.color(message)).setThumbnail(tools.icon(message)).setTimestamp().setDescription("Voici le lien pour la recherche `"+args.join(" ")+"`\n[**CLIQUE ICI**](https://www.youtube.com/results?search_query="+args.join("+")+")").setTitle("**🔎 YOUTUBE**"));
            };
        }else{
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nThe category \"search\" isn't enabled.**\nTry this :\n```"+tools.prefix(message)+"category search enable```"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nLa catégorie \"search\" n'est pas activée.**\nEssaye ça :\n```"+tools.prefix(message)+"category search enable```"));
            };
        };
    }
};