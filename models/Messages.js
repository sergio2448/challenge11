const { sqlite } = require("../db/config");
const knex = require("knex")(sqlite);

class Messages {
  constructor(fileName) {
    this.fileName = fileName;
  }

  save = async (message) => {
    try {
      await knex("messages").insert(message);
    } catch (err) {
      console.log(err.message);
    }
  };

  getAll = async () => {
    try {
      const messages = await knex("messages");

      if (messages.length > 0) {
        return messages;
      }
      return [];
    } catch (err) {
      console.log(err.message);
      return [];
    }
  };
}

module.exports = Messages;
