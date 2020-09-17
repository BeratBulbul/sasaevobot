const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Pirate Kayıt Menüsü`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<a:hypesquad1:750076071721828452> Pirate botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Kayıt Rol__`,`<a:hypesquad1:750076071721828452> \`${prefix}kayıt-rol\` Kayıt İçin Rol Belirlersiniz`,true)
.addField(`__Kayıt Log__`,`<a:hypesquad1:750076071721828452> \`${prefix}kayıt-log\` Kayıt Logu Belirlersiniz`,true)
.addField(`__Kayıt Kanal__`,`<a:hypesquad1:750076071721828452> \`${prefix}kayıt-kanal\` Kayıt İçin Kanal Seçersiniz`,true)
.addField(`__Kayıt Ol__`,`<a:hypesquad1:750076071721828452> \`${prefix}kayıt\` kayıt isim yaş şeklinde kayıt olun`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:750076071721828452> \`${prefix}davet\` | Pirate'yi Sunucunuza Davet Edersiniz\n<a:hypesquad1:750076071721828452> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://i.hizliresim.com/Y7jFCB.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["kayıt"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardımkayıt'
  }; 
  