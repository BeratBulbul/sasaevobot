const Discord = require('discord.js');
const fs = require('fs');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {

  let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix 
  const db = require('quick.db');
  

  
  if (!message.guild.members.get(client.user.id).hasPermission("KICK_MEMBERS")) return message.reply('Gerekli izniniz bulunmuyor')

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
 if (db.has(`log_${message.guild.id}`) === false) return message.reply(`Mod Log Kanalı Ayarlanmamış Ayarlamak için  | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.reply('**Lütfen Kicklemek İstediğiniz Kullanıcıyı Etiketleyin**');
  if (reason.length < 1) return message.reply('**Kickleme Sebebinizi Giriniz**');
  if (user.id === message.author.id) return message.reply('**Kendini Kickleyeceğine Kendin Çıksana ?**');

  const embed = new Discord.RichEmbed()
  .setColor("#ffd100")
  .addField('İşlem', 'Sunucudan Kickleme')
  .addField('Kicklenen Üye', `${user.tag} (${user.id})`)
  .addField('Kickleyen Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('Kick Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.member(user).kick();
  
  const embed2 = new Discord.RichEmbed()
  .setColor("#ffd100")
  .setDescription(`Üye Başarıyla Kicklendi`)
  message.channel.send(embed2)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kick'],
  permLevel: 2,
    kategori: "moderasyon",
 
};

exports.help = {
  name: 'at',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'at <@kullanıcı> <sebep>',
 
};