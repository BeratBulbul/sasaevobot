const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`EvoBot Koruma Menüsü`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<a:hypesquad1:750076071721828452> EvoBot botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Rol Koruma__`,`<a:setting:750076062716788807> \`${prefix}rol-koruma\` Sunucunuzda Rol Silinirse Rölü Tekrar Açar`,true)
.addField(`__Bot Koruma__`,`<a:setting:750076062716788807> \`${prefix}bot-koruma\` Sunucunuza Sizden Başka Birisi Bot Ekleyemez`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:750076071721828452> \`${prefix}davet\` | EvoBot'yi Sunucunuza Davet Edersiniz\n<a:hypesquad1:750076071721828452> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://i.hizliresim.com/uWdIiT.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["guard","koruma"], 
    permLevel: 0
  };
  exports.help = {
    name: 'koruma'
  }; 
  