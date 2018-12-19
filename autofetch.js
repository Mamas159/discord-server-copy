function autofetch(client, discord,channelfrom, serverfrom,channelto, serverto){
//fetch old message from a server to another



    client.on('ready', () => {
        var serto = client.guilds.find(guilds => guilds.id === serverto)
        var chanto = new discord.TextChannel(serto,{"id":channelto})
        var serfrom = client.guilds.find(guilds => guilds.id === serverfrom)
        var chanfrom = new discord.TextChannel(serfrom,{"id":channelfrom})
        chanfrom.fetchMessages({limit:20}).then( m=>{
            var test=m.values()
            for (let message of Array.from(test).reverse()){

            if (!message.author.bot)
                {user = message.member;
                user = user.toString();}
            else
                {user = message.author.id;}

            if (user.includes("!")) {
                user = user.split("!")[1].split(">")[0];
            } else if (user.includes("@")){
                user = user.split("@")[1].split(">")[0];
            }

            if(message.content){


                chanto.send(message.author.username+":"+message.content)
            }
            if (message.attachments.size > 0) {

                var Attachment = (message.attachments).array();

                chanto.send(message.author.username+"send an attachment"+
                   Attachment[0].url // Or replace with FileOptions object
                );

               //outputs array

            }

            else {
            embedmsg=message.embeds


            if (embedmsg[0]){
                var filtered = embedmsg[0].fields.filter(function (el) {
                    return el.value != '' && el.length< 2000;
                  });
                  embedmsg[0].fields=filtered
                chanto.send(embedmsg[0].message.author.username+"send an embed",{embed:embedmsg[0]}
                )
                            }
            }
            }

      })
    })}
    module.exports=autofetch
