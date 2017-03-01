const settings = require("../settings.json");

module.exports = require('knex')({
  client: 'pg',
  connection: settings
});
