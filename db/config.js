module.exports = {
  mariaDB: {
    client: "mysql",
    connection: {
      host: "localhost",
      port: 3307,
      user: "root",
      password: "",
      database: "coder_challenge",
    },
  },
  sqlite: {
    client: "sqlite3",
    connection: {
      filename: "./db/data.sqlite",
    },
    useNullAsDefault: true,
  },
};
