// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      port: 3307,
      user: "root",
      password: "",
      database: "coder_challenge",
    },
    migrations: {
      directory: "./db/migrations",
    },
  },
};
