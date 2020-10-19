const user=require("./json/d/user.json");
const server=require("./json/d/server.json");
const fs=require("fs");
module.exports={
    color:function(message){
        return user[message.author.id].color;
    },
    icon:function(message){
        return user[message.author.id].icon;
    },
    prefix:function(message){
        return server[message.guild.id].server.prefix;
    },
    language:function(message){
        return server[message.guild.id].server.language;
    },
    category:function(message,cat){
        return server[message.guild.id].server.categories[cat];
    },
    pages:function(arr,itemsPerPage,page=1){
        const maxPages=Math.ceil(arr.length/itemsPerPage);
        if(page<1||page>maxPages)return null;
        return arr.slice((page-1)*itemsPerPage,page*itemsPerPage);
    },
    randomLetter:function(UpperCase){
        const l=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        if(UpperCase==true){
            return l[Math.floor(Math.random()*l.length)].toUpperCase();
        }else{
            return l[Math.floor(Math.random()*l.length)];
        };
    },
    randomNumber:function(){
        const l=["1","2","3","4","5","6","7","8","9","0"];
        return l[Math.floor(Math.random()*l.length)];
    },
    randomHex:function(){
        const l=["a","b","c","d","e","f","1","2","3","4","5","6","7","8","9","0"];
        return l[Math.floor(Math.random()*l.length)].toUpperCase();
    },
    user:function(message,a,forced){
        try{
            var i=true;
            if(forced==true){var search=a?a.toLowerCase():i=false}else{var search=a?a.toLowerCase():message.author.id};
            const userID=message.guild.members.cache.get(search);
            const userUsername=message.guild.members.cache.filter(e=>e.user.username.toLowerCase().includes(search)).first();
            const userNickname=message.guild.members.cache.filter(e=>e.displayName.toLowerCase().includes(search)).first();
            const userDiscrim=message.guild.members.cache.filter(e=>e.user.discriminator.toLowerCase().includes(search)).first();
            const userTag=message.guild.members.cache.filter(e=>e.user.tag.toLowerCase().includes(search)).first();
            try{var userMention=message.guild.members.cache.get(search.replace(/\D/g,""));}catch(e){};
            if(i==true){return userID||userUsername||userNickname||userDiscrim||userTag||userMention}else{return};
        }catch(e){
            if(tools.language(message)==0){
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Error\nCannot find the user "+a+".**"));
            }else{
                message.channel.send(new MessageEmbed().setColor(config.Cerr).setThumbnail(config.Ierr).setTimestamp().setDescription("**💢 Erreur\nje ne vois pas qui est "+a+".**"));
            };
        };
    },
    randomUsername:function(message){
        return this.user(message,this.randomNumber(),true).user.username;
    },
    emoji:function(client,id){
        return client.emojis.cache.get(id).toString();
    },
    rServer:function(message,who,choice){
        if(choice!=1){
            return server[message.guild.id].users[who].games.battle.wins+server[message.guild.id].users[who].games.power4.wins+server[message.guild.id].users[who].games.findme.wins+server[message.guild.id].users[who].games.flipcoin.wins+server[message.guild.id].users[who].games.memory.wins+server[message.guild.id].users[who].games.pacman.wins+server[message.guild.id].users[who].games.predictdice.wins+server[message.guild.id].users[who].games.rps.wins+server[message.guild.id].users[who].games.slotmachine.wins+server[message.guild.id].users[who].games.tictactoe.wins;
        }else{
            return server[message.guild.id].users[who].games.battle.defeats+server[message.guild.id].users[who].games.power4.defeats+server[message.guild.id].users[who].games.findme.defeats+server[message.guild.id].users[who].games.flipcoin.defeats+server[message.guild.id]+server[message.guild.id].users[who].games.memory.defeats+server[message.guild.id].users[who].games.pacman.defeats+server[message.guild.id].users[who].games.predictdice.defeats+server[message.guild.id].users[who].games.rps.defeats+server[message.guild.id].users[who].games.slotmachine.defeats+server[message.guild.id].users[who].games.tictactoe.defeats;
        };
    },
    rUser:function(message,who,choice){
        if(choice!=1){
            return user[who].games.battle.wins+user[who].games.power4.wins+user[who].games.findme.wins+user[who].games.flipcoin.wins+user[who].games.memory.wins+user[who].games.pacman.wins+user[who].games.predictdice.wins+user[who].games.rps.wins+user[who].games.slotmachine.wins+user[who].games.tictactoe.wins;
        }else{
            return user[who].games.battle.defeats+user[who].games.power4.defeats+user[who].games.findme.defeats+user[who].games.flipcoin.defeats+user[who].games.memory.defeats+user[who].games.pacman.defeats+user[who].games.predictdice.defeats+user[who].games.rps.defeats+user[who].games.slotmachine.defeats+user[who].games.tictactoe.defeats;
        };
    },
    newWin:function(message,game){
        user[message.author.id].games[game].wins++;
        server[message.guild.id].users[message.author.id].games[game].wins++;
        server[message.guild.id].server.gWins++;
        fs.writeFile("./json/d/user.json",JSON.stringify(user,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});
        fs.writeFile("./json/d/server.json",JSON.stringify(server,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});
    },
    newDefeat:function(message,game){
        user[message.author.id].games[game].defeats++;
        server[message.guild.id].users[message.author.id].games[game].defeats++;
        server[message.guild.id].server.gDefeats++;
        fs.writeFile("./json/d/user.json",JSON.stringify(user,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});
        fs.writeFile("./json/d/server.json",JSON.stringify(server,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});
    }
}