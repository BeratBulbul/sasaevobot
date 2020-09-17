const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} Davet Menüsü `)
        .setDescription(`<a:hypesquad1:750076071721828452> **Botun Davet Linki İçin** [TIKLA](https://discord.com/oauth2/authorize?client_id=755317672832663632&scope=bot&permissions=805314622) \n <a:hypesquad1:750076071721828452> **Destek Sunucusu İçin** [TIKLA](https://discord.gg/TaT633) \n <a:hypesquad1:750076071721828452> **Website** [TIKLA](https://evobt.glitch.me)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix} Davet Sistemi Kullandı`, message.author.avatarURL)
    .setColor(`#ffd100`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};