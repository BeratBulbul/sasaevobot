const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if(!args[0]) return message.reply('Corona Virüs Anlık İstatisik Rehberi```Güncel Covid-19 Vaka İstatistiklerini Buradan Görebilirsin. Kulanım -korona tr```')

  let a = args[0].toLowerCase()
  .replace('türkiye', 'TR')
  .replace('çin', 'CN')
  .replace('amerika', 'US')
  .replace('japonya', 'JP')
  .replace('fransa', 'FR')
  .replace('norveç', 'NE')
  .replace('isveç',  'SN')
  
    const text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=${a}`);
    const body = text.body;
  let ülk = body.countrydata[0].info.title

    let embed = new Discord.RichEmbed()
    .setColor('#ffd100')
    .setTitle('EvoBot')
    .setDescription(`Korona Bilgi **${ülk}**`)
    .addField('*Toplam Vaka*',`\`\`〘 → ${body.countrydata[0].total_cases} ← 〙\`\` `, true)
    .addField('*Toplam İyileşen*',`\`\`〘 → ${body.countrydata[0].total_recovered} ← 〙\`\` `, true)
    .addField('*Toplam Enfekte*',`\`\`〘 → ${body.countrydata[0].total_active_cases} ← 〙\`\` `, true)
    .addField('*Toplam Ölümler*',`\`\`〘 → ${body.countrydata[0].total_deaths} ← 〙\`\` `, true)
    .addField('*Bugünki Vakalar*',`\`\`〘 → ${body.countrydata[0].total_new_cases_today} ← 〙\`\` `, true)
    .addField('*Bugünki Ölümler*',`\`\`〘 → ${body.countrydata[0].total_new_deaths_today} ← 〙\`\` `, true)
    .addField('*Ciddi Vakalar*',`\`\`〘 → ${body.countrydata[0].total_serious_cases} ← 〙\`\` `, true)
    .addField('*Ülke:*',`\`\`〘 → ${ülk} ← 〙\`\` `, true)
    .setTimestamp()
    .setFooter('COVID-19', client.user.avatarURL);
    
    message.channel.send(embed);
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['corona', 'coronabilgi', 'corona-bilgi', 'korona', 'koronabilgi', 'korona-bilgi', 'virüs'],
  permLevel: 0 
};

exports.help = {
  name: 'korona',
  description: 's',
  usage: 's'
};
