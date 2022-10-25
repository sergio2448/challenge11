const { sqlite } = require("../config");
const knex = require("knex")(sqlite);

const messages = [
  {
    email: "sergio@gmail.com",
    date: "10/21/2022, 8:37:53 PM",
    text: "Hello, How are you?",
  },
];

const fillMessageTable = async () => {
  try {
    const exists = await knex.schema.hasTable("messages");
    if (exists) {
      await knex("messages").insert(messages);
    }
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
};

fillMessageTable();
