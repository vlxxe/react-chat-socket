const moment = require("moment")

function formatMessage(author, text) {
  return {
    author,
    text,
    avatar: "",
    time: moment().format("HH:mm")
  }
}

module.exports = formatMessage
