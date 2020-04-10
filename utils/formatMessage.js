const moment = require("moment")

function formatMessage(authorId, author, text) {
  return {
    authorId,
    author,
    text,
    time: moment().format("HH:mm"),
  }
}

module.exports = formatMessage
