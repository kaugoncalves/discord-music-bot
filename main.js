const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config()

global.client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent
  ],
  disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

/* client.on('debug', (a) => {
  if (a.startsWith(`Hit a 429`)) {
    process.kill(1)
  }
});

client.on("rateLimit", data => {
  process.kill(1)
})

client.on('rateLimited', () => {
  process.kill(1);
}); */

require('./src/loader');
require('./src/events');
const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Odd is better.'))

app.listen(port, () =>
  console.log(`Your app is listening a http://localhost:${port}`)
);
client.login(process.env.token);