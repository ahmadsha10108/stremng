const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

// ئەو ناوانەی کە دەتەوێت بگۆڕێن
const statuses = [
  '𝐊𝐔𝐑𝐀𝐊𝐀𝐈 𝐉𝐀𝐑𝐀𝐍𝐌 𖤍',
  '𝐋𝐚𝐬𝐡𝐤𝐫𝐢 𝐦𝐚𝐥𝐢𝐤',
  '𝐖𝐡𝐨𝐞𝐯𝐞𝐫 𝐋𝐞𝐟𝐭 𝐈𝐬 𝐃𝐞𝐚𝐝'
];

let i = 0;

client.on('ready', async () => {
  console.log(`${client.user.tag} ئامادەیە!`);

  // گۆڕینی ناوەکان هەموو 2 چرکە جارێک
  setInterval(() => {
    const currentStatus = statuses[i];
    
    client.user.setPresence({
      activities: [{
        name: currentStatus,
        type: 'STREAMING',
        url: 'https://www.twitch.tv/rainbow6'
      }]
    });

    i = (i + 1) % statuses.length;
  }, 2000); 
});

client.login('MTQzODI4MDYwODIxOTY2NDQ4NQ.GbV0Yq.hMPhN_0ifuw_u7eB0UHjxJEqS6r9RczhYV5yGM');
