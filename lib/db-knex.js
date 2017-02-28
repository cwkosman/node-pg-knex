const settings = require("../settings-knex.json");
const knex = require('knex')({
  client: 'pg',
  connection: settings
});

exports.knex = knex;
