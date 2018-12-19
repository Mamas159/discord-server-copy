function autoforward(client, discord,channelfrom, channelto, serverto){

      client.on('message', message => {
        var server = client.guilds.find(guilds => guilds.id === serverto)  
        var chan = new discord.TextChannel(server,{"id":channelto});
      
         // if (message.channel.type == 'dm') return;
          if (message.channel.id == channelfrom) {
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
              if(message.content){chan.send(message.author.username+":"+message.content)}
              if (message.attachments.size > 0) {
                  
                  var Attachment = (message.attachments).array();
                  chan.send(message.author.username+"发送了图片"+
                      Attachment[0].url // Or replace with FileOptions object
                  );
                 //outputs array
      
              }
              else {
              embedmsg=message.embeds
              if (embedmsg[0])
              {
                var filtered = embedmsg[0].fields.filter(function (el) {
                return el.value != '';
              });
              embedmsg[0].fields=filtered 
              chan.send(embedmsg[0].message.author.username+"发送了嵌入消息",{embed:
                  embedmsg[0]})
                }
            }
        }
      
      })

}

module.exports=autoforward