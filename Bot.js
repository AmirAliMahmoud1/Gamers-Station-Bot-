const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('-help / Ramadan Kareem');
  
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hello') {
    msg.reply('Hello');
  }
});
client.on('message', msg => {
    if (msg.content === '-Owner') {
      msg.reply('@Ameerjoker#1105 ');
    }
  });
  
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'main-chat');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("**Server**")
        .setTimestamp()
   
      channel.sendEmbed(embed);
        });
		client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "Ameerjoker"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
client.on('message', message => {
    if(message.content == '-member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info
اونلاين:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
ممنوع الازعاج:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
اصفر:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
قافلين:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
الجميع:  ${message.guild.memberCount}**`)   
         message.channel.send({embed});
    }
});
client.on("message", message => {
    const prefix = "-"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  client.on('message', message => {
  if (true) {
if (message.content === '-invite') {
      message.author.send('  https://discordapp.com/oauth2/authorize?scope=bot&client_id=422090679259496448     ').catch(e => console.log(e.stack));

    }
   } 
  });


client.on('message', message => {
     if (message.content === "-invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" https://discordapp.com/oauth2/authorize?scope=bot&client_id=422090679259496448")
     
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
     if (message.content === "-help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField("═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════","االاومر:")
.addField('     **-invite**  ' ,' **دعوت البوت** ')
.addField('     **-bc**  ' ,' **برود كاستينج** ')
.addField(' **-member**  ',' معلومات عن الاعضاء ')
.addField(' **-privatehelp**  ',' المساعدات عالخاص ')
.addField('**-clear**','مسح الشات')
.addField('**-image**','عرض صورة السيرفر')
.addField('**-v2min**','عمل غرفة مدتها دقيقتان')
.addField('**-date**','التاريخ')
.addField('**-say**','  رسالة الي الونلاين اكونتس فقط')
.addField('**-delete**','مسح الرومات')
.addField('**-call**','  التواصل مع صاحب اليوت')
.addField('**-bc2**','  رسالة الي الونلاين اكونتس فقط')
.addField('جارى اضافة بعض الاشياء',"═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════")
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
var prefix = "-";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**-bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
client.on('message', message => {
     if (message.content === '-privatehelp') {
message.author.send('.Best Commands' + `  **
 
'.Server Commands' 
🔧               -help |المساعدة
🔧               -bc | برودكاستينج
🔧               -member | معلومات عن الاعضاء
🔧               -v2min joker |عمل غرفة لمدة دقيقتان
🔧               -image |  عرض صورة السيرفر
🔧               -clear | حذف الرسائل 
🔧               -date  | التاريخ
🔧               -delete | مسح الرومات
🔧               -bc2    | رسالة الي الونلاين اكونتس فقط
🔧               -say   | كود يكرر كلامك ويحذف رسالتك الاصليه محد يعرف مين كتبها
🔧               -invite   | دعوت البوت
)

© Ameerjoker.
**`);
    }
});
var prefix= "-";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'v2min')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
    }
    });
	client.on('message', message => {
    var prefix = "-"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }

});
client.on('message' , message => {
    var prefix = "-"
    
    if (message.content.startsWith(prefix + "call")) {
    if (!message.channel.guild) return;
    
    
    
    let args = message.content.split(" ").slice(1).join(' ');
    
    
    
    client.users.get("278385035126767618").send(
        "\n" + "**" + "● السيرفر :" + "**" +
        "\n" + "**" + "» " + message.guild.name + "**" +
        "\n" + "**" + " ● المرسل : " + "**" +
        "\n" + "**" + "» " + message.author.tag + "**" +
        "\n" + "**" + " ● الرسالة : " + "**" +
        "\n" + "**" + args + "**")
    
    let embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username, message.author.avatarURL)
                                                    .setDescription(':ِAmeerJoker: تم ارسال الرسالة الى صاحب البوت بنجاح')
                                                    .setThumbnail(message.author.avatarURL)
                                                    .setFooter(message.author.username, message.author.avatarURL)
                                                    message.channel.sendEmbed(embed);
    
    
    }
        
    });
	client.on("message", (message) => {
    if (message.content.startsWith('-delete')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**لا يوجد روم بهذا الاسم**').catch(console.error);
        channel.delete()
    }
});
client.on("message", message => {

     var prefix = "-"

            if (message.content.startsWith(prefix + "bc2")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : Number of receiving members `);
 message.delete();
};
});
var prefix = "-";
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
       message.delete()

  }
});
  client.on('guildMemberAdd', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`يا هلا بك :raised_hand::skin-tone-1: :smiley:`)
        .setDescription(`اهلاً بك في سيرفرنا :blush:`)
        .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('GREEN')
        .setFooter('======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======', 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'join')
    if (!channel) return;
    channel.send({embed : embed});
    });
    
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'join')
    if (!channel) return;
    channel.send({embed : embed});
    }) 

      client.on('guildMemberAdd', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`يا هلا بك :raised_hand::skin-tone-1: :smiley:`)
        .setDescription(`اهلاً بك في سيرفرنا :blush:`)
        .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('GREEN')
        .setFooter('======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======', 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    });
    
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'new-gamers')
    if (!channel) return;
    channel.send({embed : embed});
    }) 
      client.on('guildMemberAdd', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`يا هلا بك :raised_hand::skin-tone-1: :smiley:`)
        .setDescription(`اهلاً بك في سيرفرنا :blush:`)
        .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('GREEN')
        .setFooter('======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======', 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'new-gamers')
    if (!channel) return;
    channel.send({embed : embed});
    });
    
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'new-gamers')
    if (!channel) return;
    channel.send({embed : embed});
    }); 
	
  
client.login("NDIyMDkwNjc5MjU5NDk2NDQ4.DeGMaA.fGobYmjnq0G9y0SmOn9oB0kaoDE");

//https://discordapp.com/oauth2/authorize?client_id=423545843979780106&permissions=0&scope=bot
