// First, import the sqlite3 module:
import sqlite3 from "sqlite3";

//The sqlite3.Database() returns a Database object and opens the database connection automatically.
let db = new sqlite3.Database(
  "./db/catalogue.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the catalogue database.");
  }
);

//It is a good practice to close a database connection when you are done with it.
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
