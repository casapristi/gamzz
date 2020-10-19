const server=require("../json/d/server.json");
const config=require("../json/u/config.json");
const tools=require("../functions.js");
const fs=require("fs");
module.exports=async(client,message)=>{
    if(message.channel.type=="dm")return;
    if(!server[message.guild.id]){
        server[message.guild.id]={
            server:{
                name:message.guild.name,
                token:tools.randomLetter(true)+tools.randomNumber()+tools.randomNumber()+tools.randomLetter()+"."+tools.randomLetter(true)+tools.randomLetter(true)+tools.randomLetter()+tools.randomNumber()+tools.randomLetter()+tools.randomNumber()+tools.randomLetter()+tools.randomNumber()+tools.randomNumber()+tools.randomLetter(true)+"."+tools.randomLetter()+tools.randomLetter()+tools.randomLetter(true)+tools.randomNumber()+tools.randomLetter(true)+tools.randomNumber(),
                prefix:config.prefix,
                language:0,
                count:0,
                categories:{utilities:false,games:true,fun:true,moderation:false,nsfw:true,info:true,search:false},
                gWins:0,
                gDefeats:0,
            },
            users:{
                [message.author.id]:{
                    games:{
                        battle:{wins:0,defeats:0},
                        power4:{wins:0,defeats:0},
                        findme:{wins:0,defeats:0},
                        flipcoin:{wins:0,defeats:0},
                        memory:{wins:0,defeats:0},
                        pacman:{wins:0,defeats:0},
                        predictdice:{wins:0,defeats:0},
                        rps:{wins:0,defeats:0},
                        slotmachine:{wins:0,defeats:0},
                        tictactoe:{wins:0,defeats:0}
                    },
                    life:100,
                    ready:{
                        ready:true,
                        oppenent:null
                    },
                    ship:{ship:null,propose:null,state:"single"},
                }
            }
        };
        fs.writeFile("./json/d/server.json",JSON.stringify(server,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});
    };
    if(!server[message.guild.id].users[message.author.id]){
        server[message.guild.id].users[message.author.id]={
            games:{
                battle:{wins:0,defeats:0},
                power4:{wins:0,defeats:0},
                findme:{wins:0,defeats:0},
                flipcoin:{wins:0,defeats:0},
                memory:{wins:0,defeats:0},
                pacman:{wins:0,defeats:0},
                predictdice:{wins:0,defeats:0},
                rps:{wins:0,defeats:0},
                slotmachine:{wins:0,defeats:0},
                tictactoe:{wins:0,defeats:0}
            },
            life:100,
            ready:{
                ready:true,
                oppenent:null
            },
            ship:{ship:null,propose:null,state:"single"},
        };
        fs.writeFile("./json/d/server.json",JSON.stringify(server,null,4),(err)=>{if(err)console.log("[ERROR] "+err)});
    };
    let prefix=server[message.guild.id].server.prefix;
    if(message.author.bot)return;
    if(!message.content.startsWith(prefix))return;
    if(!message.guild)return;
    if(!message.member)message.member=await message.guild.fetchMember(message);
    const args=message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd=args.shift().toLowerCase();
    if(cmd.length==0)return;
    let command=client.commands.get(cmd);
    if(!command)command=client.commands.get(client.aliases.get(cmd));
    if(command)command.run(client,message,args,tools);
};