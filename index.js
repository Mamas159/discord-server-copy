const autoforward = require ("./autoforwarding")
const autofetch = require ("./autofetch")
const discord = require("discord.js");
const TOKEN = "."; // Your login token
const client = new discord.Client();
let serverfrom= '.'// the server id you need to copy
let serverto = "." //the server id  you send message to



let channelfrom1 = "."// the channel id  you need to copy
let channelto1 = "."// the channel id  you send message to

let channelfrom2 = "." //support multiple channel id
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
