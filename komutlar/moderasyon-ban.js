const Discord = require('discord.js');
const fs = require('fs');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix 

  const db = require('quick.db');
  

    
  if (!message.guild.members.get(client.user.id).hasPermission("BAN_MEMBERS")) return message.reply('**Gerekli Yetkin Yok Dostum**  ')
 
  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  
  if (db.has(`log_${message.guild.id}`) === false) return message.reply(`Mod Log Kanalı Ayarlanmamış Ayarlamak İçin |${prefix}modlog #kanal`);
  let modlog = message.guild.channels.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.reply('**Lütfen Banlamak İstediğiniz Üyeyi Etiketleyin**');
  if (reason.length < 1) return message.reply('**Lütfen Sebep Giriniz**');
  if (user.id === message.author.id) return message.reply('**Dostum Kendini Banlıyamasın**');

  const embed = new Discord.RichEmbed()
  .setColor("#ffd100")
  .addField('İşlem', 'Sunucudan Banlama')
  .addField('Banlanan Üye', `${user.tag} (${user.id})`)
  .addField('Banlayan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('Ban Sebebi', "```" + reason + "```")
  modlog.send(embed);
  user.send(`\`${message.guild.name}\` **Adlı Sunucuda Yaptığınız Olumsuz Davranışlardan Dolayı Yasaklandınız** \nYetkilinin girdiği sebep: \`${reason}\``)
  

  message.guild.ban(user, 2);
  
  const embed2 = new Discord.RichEmbed()
  .setColor("#ffd100")
  .setDescription(`Başarıyla banlandı`)
  message.channel.send(embed2)

  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban','yasakla','banla'],
  permLevel: 3,
  kategori: "moderasyon",
};

exports.help = {
  name: 'yasakla',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'yasakla <@kullanıcı> <sebep>',
 
};