const db = require("./lib/db-knex.js");

function insertPerson(first, last, dob) {
  console.log("Updating...");
  db.insert({ first_name: first, last_name: last, birthdate: dob })
  .into("famous_people")
  .then((result) => console.log(result));
  db.destroy();
}

insertPerson(...process.argv.slice(2));
