const{Client,Collection}=require("discord.js");
const{randomLetter,randomNumber}=require("./functions.js");
const client=new Client({disableEveryone:true});
const config=require("./json/u/config.json");
const fs=require("fs");
const user=require("./json/d/user.json");
const botclient=require("./json/d/client.json");
client.commands=new Collection();
client.aliases=new Collection();
client.categories=fs.readdirSync("./commandes/");
["command"].forEach(handler=>require(`./handlers/${handler}`)(client));
client.on("message",async (message)=>{
    require("./on/message.js")(client,message);
});
client.login(process.env.TOKEN);
let userApplications={};
client.on("message",function(message){
    if(!user[message.author.id]){
        user[message.author.id]={
            isreg:false,
            token:randomLetter()+randomNumber()+randomNumber()+randomLetter(true)+"."+randomLetter()+randomLetter()+randomLetter(true)+randomNumber()+randomLetter(true)+randomNumber()+randomLetter()+randomNumber()+randomNumber()+randomLetter(true)+"."+randomLetter()+randomLetter()+randomLetter(true)+randomNumber()+randomLetter(true)+randomNumber(),
            state:"private",
            games:{
                battle:{wins:0,defeats:0},
                power4:{wins:0,defeats:0},
                findme:{wins:0,defeats:0},
                flipcoin:{wins:0,defeats:0},
                galaga:{wins:0,defeats:0},
                memory:{wins:0,defeats:0},
                minesweeper:{wins:0,defeats:0},
                pacman:{wins:0,defeats:0},
                predictdice:{wins:0,defeats:0},
                rps:{wins:0,defeats:0},
                slotmachine:{wins:0,defeats:0},
                tictactoe:{wins:0,defeats:0}
            },
            color:config.Cmain,
            icon:config.Imain,
            status:null,
            pacman:{
                border:"🟦",
                pacman:"🟡"
            },
        };
        user[user[message.author.id].token]={
            tag:message.author.tag,
            id:message.author.id
        };
        fs.writeFile("./json/d/user.json",JSON.stringify(user,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});
    };
    if(message.author.equals(client.user))return;
    let authorId=message.author.id;
    if(message.content.toLowerCase()=="register"){
        if(!message.channel.type=="dm")return;
        console.log(`[LOGS] Apply begin for id ${authorId}`);
        if(!(authorId in userApplications)){
            userApplications[authorId]={"step":1};
            message.author.send("```Lets start your register !```");
            message.author.send("```Do you already have an account ? (yes/no)```")
        };
    }else{
        if(message.channel.type=="dm"&&authorId in userApplications){
            let authorApplication=userApplications[authorId];
            if(authorApplication.step==1){
                if(message.content.toLowerCase()=="no"){
                    message.author.send("```You want to be public or private ? (public/private)```");
                    authorApplication.step++;
                }else if(message.content.toLowerCase()=="yes"){
                    message.author.send("```What was your last token ?```");
                    authorApplication.step=3;
                };
            }else if(authorApplication.step==2){
                if(message.content.toLowerCase()=="public"){
                    user[message.author.id].state==message.content.toLowerCase();
                    user[message.author.id].isreg=true;
                    message.author.send("```You have succesfully been set to public```");
                    message.author.send("```Your account token is : "+user[authorId].token+"```");
                    message.author.send("```You has been succesfully registered !```");
                    delete userApplications[authorId];
                }else if(message.content.toLowerCase()=="private"){
                    user[message.author.id].state==message.content.toLowerCase();
                    user[message.author.id].isreg=true;
                    message.author.send("```You have succesfully been set to private```");
                    message.author.send("```Your account token is : "+user[authorId].token+"```");
                    message.author.send("```You has been succesfully registered !```");
                    delete userApplications[authorId];
                }else{
                    message.author.send("```I can't understand... Can you repeat please ? (private/public)```");
                };
                fs.writeFile("./json/d/user.json",JSON.stringify(user,null,4),(err)=>{if(err)console.log("[ERROR]"+err)});
            }else if(authorApplication.step==3){
                if(user[message.content]){
                    user[message.author.id]={
                        isreg:user[user[message.content].id].isreg,
                        token:user[user[message.content].id].token,
                        name:user[user[message.content].id].name,
                        age:user[user[message.content].id].age,
                        nationality:user[user[message.content].id].nationality,
                        state:user[user[message.content].id].state,
                        description:user[user[message.content].id].description,
                        games:{
                            battle:{wins:user[user[message.content].id].games.battle.wins,defeats:user[user[message.content].id].games.battle.defeats},
                            power4:{wins:user[user[message.content].id].games.power4.wins,defeats:user[user[message.content].id].games.power4.defeats},
                            findme:{wins:user[user[message.content].id].games.findme.wins,defeats:user[user[message.content].id].games.findme.defeats},
                            flipcoin:{wins:user[user[message.content].id].games.flipcoin.wins,defeats:user[user[message.content].id].games.flipcoin.defeats},
                            galaga:{wins:user[user[message.content].id].games.galaga.wins,defeats:user[user[message.content].id].games.galaga.defeats},
                            memory:{wins:user[user[message.content].id].games.memory.wins,defeats:user[user[message.content].id].games.memory.defeats},
                            minesweeper:{wins:user[user[message.content].id].games.minesweeper.wins,defeats:user[user[message.content].id].games.minesweeper.defeats},
                            pacman:{wins:user[user[message.content].id].games.pacman.wins,defeats:user[user[message.content].id].games.pacman.defeats},
                            predictdice:{wins:user[user[message.content].id].games.predictdice.wins,defeats:user[user[message.content].id].games.predictdice.defeats},
                            rps:{wins:user[user[message.content].id].games.rps.wins,defeats:user[user[message.content].id].games.rps.defeats},
                            slotmachine:{wins:user[user[message.content].id].games.slotmachine.wins,defeats:user[user[message.content].id].games.slotmachine.defeats},
                            tictactoe:{wins:user[user[message.content].id].games.tictactoe.wins,defeats:user[user[message.content].id].games.tictactoe.defeats}
                        },
                        color:user[user[message.content].id].color,
                        icon:user[user[message.content].id].icon,
                        status:user[user[message.content].id].status
                    };
                    var u=user[message.content].tag;
                    user[user[message.content].id]=NaN;
                    user[message.content]={
                        tag:message.author.tag,
                        id:message.author.id
                    };
                    fs.writeFile("./json/d/user.json",JSON.stringify(user,null,4),(err)=>{if(err)console.log("[ERROR]"+err)});
                    message.author.send("```You are now under your old account ("+u+")```");
                    delete userApplications[authorId];
                }else{
                    message.author.send("```Sorry but i didn't find your account in my database...```");
                    delete userApplications[authorId];
                };
            };
        };
    };
});
client.on("ready",()=>{
    var t=1;
    var v=0;
    setInterval(()=>{
        v=0;
        if(t==1&&v==0)client.user.setActivity("-help with "+client.users.cache.size+" users",{type:"PLAYING"}),t=2,v=1;
        if(t==2&&v==0)client.user.setActivity("-help on "+client.guilds.cache.size+" servers",{type:"PLAYING"}),t=3;v=1
        if(t==3&&v==0)client.user.setActivity("NEW V2 !",{type:"WATCHING"}),t=1;v=1;
    },30000);
    console.log("[LOGS] The bot is ready");
    const gl=["find-me","flip-coin","galaga","memory","minesweeper","pacman","power4","rock-paper-scissors","slot-machine","tic-tac-toe"];
    setInterval(()=>{
        var rgl=gl[Math.floor(Math.random()*gl.length)];
        console.log("[LOGS] The game of the day is "+rgl);
        botclient.dailygame=rgl;
        fs.writeFile("./json/d/client.json",JSON.stringify(botclient,null,4),(err)=>{if(err)console.log("[ERROR]"+err)});
    },86400000);
});
