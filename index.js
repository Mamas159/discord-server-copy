const autoforward = require ("./autoforwarding")
const autofetch = require ("./autofetch")
//var parallel = require('run-parallel')
const autosend = require ("./autosend")
const autodm = require ("./autodm")
const discord = require("discord.js");
const TOKEN = ".";
const client = new discord.Client();
let serverfrom= '.'
let serverto = "."



let channelfrom1 = "."
let channelto1 = "."

let channelfrom2 = "."
let channelto2 = "."


let userid = "."
client.login(TOKEN);
client.on("ready",()=>{
    console.log("Ready!");
    guild = client.guilds.get(serverto);
    servername=guild.name
    console.log(servername)
  })

autofetch(client, discord, channelfrom1, serverfrom, channelto1, serverto)
autofetch(client, discord, channelfrom2, serverfrom, channelto2, serverto)



autoforward(client, discord, channelfrom1, channelto1, serverto)
autoforward(client, discord, channelfrom2, channelto2, serverto)
