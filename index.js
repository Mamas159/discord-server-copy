const autoforward = require ("./autoforwarding")
const autofetch = require ("./autofetch")
//var parallel = require('run-parallel')
const autosend = require ("./autosend")
const autodm = require ("./autodm")
const discord = require("discord.js");
const TOKEN = ".";
const client = new discord.Client();
let serverfrom= '501255592589918238'
let serverto = "516329434878443561"



let channelfrom1 = "501451666239782912"
let channelto1 = "516329434878443569"

let channelfrom3 = "501440992843530250"
let channelto3 = "524560689088692224"

let channelfrom4 = "501442485797650433"
let channelto4 = "524560777995354113"

let channelfrom5 = "508483597905428510"
let channelto5 = "524560858232389642"

let channelfrom6 = "501445508506583070"
let channelto6 = "524560922182680576"

let channelfrom7 = "524059854780891145"
let channelto7 = "524561024679149578"

let channelfrom8 = "504490849925857298"
let channelto8 = "524724363908349954"
let userid = "454918320471146507"
client.login(TOKEN);
client.on("ready",()=>{
    console.log("Ready!");
    guild = client.guilds.get(serverto);
    servername=guild.name
    console.log(servername)
  })
//autoforward(client, discord, channelfrom, channelto, serverto)
//autosend(client, discord, channelto, serverto)
//autodm(client, discord,userid)
//autofetch(client, discord, channelfrom1, serverfrom, channelto1, serverto)
// autofetch(client, discord, channelfrom2, serverfrom, channelto2, serverto)
// autofetch(client, discord, channelfrom3, serverfrom, channelto3, serverto)
// autofetch(client, discord, channelfrom4, serverfrom, channelto4, serverto)
// autofetch(client, discord, channelfrom5, serverfrom, channelto5, serverto)
// autofetch(client, discord, channelfrom6, serverfrom, channelto6, serverto)
// autofetch(client, discord, channelfrom7, serverfrom, channelto7, serverto)
// autofetch(client, discord, channelfrom8, serverfrom, channelto8, serverto)


 autoforward(client, discord, channelfrom1, channelto1, serverto)
// autoforward(client, discord, channelfrom3, channelto3, serverto)
// autoforward(client, discord, channelfrom4, channelto4, serverto)
// autoforward(client, discord, channelfrom5, channelto5, serverto)
// autoforward(client, discord, channelfrom6, channelto6, serverto)
// autoforward(client, discord, channelfrom7, channelto7, serverto)
// autoforward(client, discord, channelfrom8, channelto8, serverto)
// You can run the program by typing node index in cmd
// The program starts after the time interval is once over
// That's all
// You can press CTRL + C in command prompt to stop the program
// Mine won't stop cause I used a host to keep it alive 24/7
// You can search how to host a node.js app on YouTube.
