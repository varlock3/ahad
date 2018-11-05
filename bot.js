const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
   
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/skwadraa',
    name: ':paperclips::black_heart:كن لي أغُنية وأجعل حديثنا عناق.',
    application_id: '505882662666240000',
     assets: {
         large_image:   `508868583653244958`,
  
    }
  }
    });
  
});
client.login(process.env.BOT_TOKEN);
