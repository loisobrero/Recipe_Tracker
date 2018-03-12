// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JawsDB_URL) {
  connection = mysql.createConnection(process.env.JawsDB_URL);
}

else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "recipe_db"
  })
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected to MySQL as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
