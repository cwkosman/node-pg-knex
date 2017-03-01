const db = require("./lib/db-knex.js");

function queryName(query, callback) {
  console.log(`Searching for "${query}"...`);
  db.select()
  .from('famous_people')
  .where('first_name', 'LIKE', `%${query}%`)
  .orWhere('last_name', 'LIKE', `%${query}%`)
  .then(result => callback(result));
  db.destroy();
}

queryName(process.argv[2], ((result) => {
  if (!result.length) {
    return console.log("No results found.");
  }
  console.log(`Found ${result.length} person(s) by the name '${process.argv[2]}'`);
  result.forEach((match) => {
    console.log(` - ${match.id}: ${match.first_name} ${match.last_name}, born ${match.birthdate.getFullYear()}-${match.birthdate.getMonth()}-${match.birthdate.getDate()}`);
  });
}));
