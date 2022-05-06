import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  database: "restaurant_catalogue",
  user: "root",
  password: "RflMSQL21.",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});

interface Restaurant {
  idRestaurant: number;
  name: string;
  openingTimes: string;
  chefName: string;
  address: string;
}

export const runQuery = (query: string) => {
  return new Promise<Restaurant[]>((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        const stringResult = JSON.stringify(result); // first transform the return value(RowDataPacket object) into string
        const jsonResult = JSON.parse(stringResult); //then convert this string into the json object
        resolve(jsonResult);
      }
    });
  });
};
