const db = require("./lib/db.js");

function queryName(query, callback) {
  db.connect((error, client) => {
    console.log(`Searching for "${query}"...`);
    client.query("SELECT * FROM famous_people WHERE first_name LIKE '%' || $1 || '%' OR last_name LIKE '%' || $1 || '%'", [query], (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
      client.end();
    });
  });
}

queryName(process.argv[2], ((result) => {
  if (!result.rows.length) {
    return console.log("No results found.");
  }
  console.log(`Found ${result.rows.length} person(s) by the name '${process.argv[2]}'`);
  result.rows.forEach((match) => {
    console.log(` - ${match.id}: ${match.first_name} ${match.last_name}, born ${match.birthdate.getFullYear()}-${match.birthdate.getMonth()}-${match.birthdate.getDate()}`);
  });
}));
