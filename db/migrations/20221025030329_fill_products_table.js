const knex = require("knex");

const products = [
  {
    title: "Board",
    price: 135.36,
    thumbnail:
      "https://www.suescun.com.co/wp-content/uploads/2021/06/14655.jpg",
  },
  {
    title: "marker",
    price: 12.5,
    thumbnail:
      "http://d3ugyf2ht6aenh.cloudfront.net/stores/399/204/products/marcador-pelikan-418-negro-permanente1-a40ca80bd34d642c9d15934554800912-640-0.jpg",
  },
];

const productsToDelete = ["Board", "marker"];

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.up = async function (knex) {
  const exists = await knex.schema.hasTable("products");
  if (exists) {
    await knex("products").insert(products);
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.down = async function (knex) {
  const exists = await knex.schema.hasTable("products");
  if (exists) {
    await knex("products").whereIn("title", productsToDelete).del();
  }
};
