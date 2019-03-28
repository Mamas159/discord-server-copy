const autoforward = require ("./autoforwarding")
const autofetch = require ("./autofetch")
const discord = require("discord.js");
const TOKEN = "NTYwODA5ODg3OTI4NTQ5Mzg2.D35Wfw.lXvQdBEbFz04lqsBhyMvQbSRuTY"; // Your login token
const client = new discord.Client();
let serverfrom= '482712049621925908'// the server id you need to copy
let serverto = "560810634938286091" //the server id  you send message to



let channelfrom1 = "."// the channel id  you need to copy
let channelto1 = "."// the channel id  you send message to

let channelfrom2 = "." //support multiple channel id
let channelto2 = "."


let userid = "560809887928549386"
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
