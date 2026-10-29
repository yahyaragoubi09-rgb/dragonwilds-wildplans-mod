// build f3de96c956
// (bot) 018e23
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once('ready', () => console.log('ready'));
client.login(process.env.DISCORD_TOKEN);
