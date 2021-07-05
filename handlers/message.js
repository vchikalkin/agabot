const { ok } = require('../config/phrases.json');

module.exports = ctx => {
  if (ctx?.message?.reply_to_message?.from.is_bot) {
    ctx.reply(ok);
  }
};
