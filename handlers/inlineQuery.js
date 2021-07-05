const { phrases } = require('../config/phrases.json');

module.exports = async ctx => {
  const randomIndex = Math.floor(Math.random() * (phrases.length + 1));
  const randomPhrase = phrases[randomIndex];
  await ctx.answerInlineQuery(randomPhrase);
};
