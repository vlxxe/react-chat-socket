const moment = require("moment")

function formatMessage(author, text) {
  return {
    author,
    text,
    time: moment().format("HH:mm"),
  }
}

module.exports = formatMessage
