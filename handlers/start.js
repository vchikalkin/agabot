const { greeting } = require('../config/phrases.json');

module.exports = ctx => {
  ctx.reply(greeting);
};
