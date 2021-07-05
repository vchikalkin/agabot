const { phrases } = require('../config/phrases.json');

module.exports = ctx => {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases[randomIndex];

  ctx.reply(randomPhrase);
};
