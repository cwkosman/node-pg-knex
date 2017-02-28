const settings = require("./settings.json");
const knex = require('knex')({
  client: 'pg',
  connection: settings
});

function queryName() {
  knex.select().from('famous_people').then(function(rows) {
    console.log(rows);
    knex.destroy();
  });
}

queryName();
