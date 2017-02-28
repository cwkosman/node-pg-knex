const pg = require("pg");
const settings = require("../settings.json");

module.exports = {
  connect: (callback) => {
    const client = new pg.Client(settings);
    client.connect((err) => {
      callback(err, client);
    });
  }
};
