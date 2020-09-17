const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Pirate Eklenti Menüsü`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<a:hypesquad1:750076071721828452> Pirate botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Davet Kanal__`,`<a:hypesquad1:750076071721828452> \`${prefix}davet-kanal\` Davet Kanalı Belirlersin`,true)
.addField(`__Davet Ekle__`,`<a:hypesquad1:750076071721828452> \`${prefix}davet-ekle\` Seçilen Kullanıcıya Davet Ekler`,true)
.addField(`__Davet Sil__`,`<a:hypesquad1:750076071721828452> \`${prefix}davet-sil\` Seçilen Kullanıcının Davetlerini Silersiniz`,true)
.addField(`__Davet Sıfırla__`,`<a:hypesquad1:750076071721828452> \`${prefix}davet-sıfırla\` Herkesin Davetini Sıfırlarsınız`,true)
.addField(`__Davet Kanal Sıfırla__`,`<a:hypesquad1:750076071721828452> \`${prefix}davet-kanal-sıfırla\` Davet Kanalını Sıfırlarsınız`,true)
.addField(`__Davetler__`,`<a:hypesquad1:750076071721828452> \`${prefix}davetler\` Davetlerinizi Görürsünüz`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:750076071721828452> \`${prefix}davet\` | Pirate'yi Sunucunuza Davet Edersiniz\n<a:hypesquad1:750076071721828452> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://i.hizliresim.com/Y7jFCB.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["invite"], 
    permLevel: 0
  };
  exports.help = {
    name: 'invite'
  }; 
  