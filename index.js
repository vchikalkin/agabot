const bot = require('./bot');
const handleRandom = require('./handlers/random');
const start = require('./handlers/start');
const { greeting: greetingTriggers } = require('./config/triggers');
const handleMessage = require('./handlers/message');

bot.start(start);

bot.hears(greetingTriggers, start);

bot.hears(new RegExp(process.env.BOT_NAME, 'gi'), handleRandom);

bot.on('message', handleMessage);

bot.catch(err => {
  console.log(err);
});
bot.launch();
