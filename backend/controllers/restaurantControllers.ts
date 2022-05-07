import { runQuery } from "../mysql_db";

interface Restaurant {
  idRestaurant: number;
  name: string;
  openingTimes: string;
  chefName: string;
  address: string;
  photo: string;
}

export const getRestaurants = async () => {
  const result = await runQuery(`SELECT * FROM Restaurants`);
  console.log(result);
  return result;
};
export const getRestaurant = async (idRequest: number) => {
  const result = await runQuery(`SELECT name FROM Restaurants WHERE idRestaurant = ${idRequest}`);
  return result;
};
export const addRestaurant = async (newRestaurant: Restaurant) => {
  const addRestaurantQuery = `INSERT INTO Restaurants (name, openingTimes, chefName, address, photo) VALUES ("${newRestaurant.name}", "${newRestaurant.openingTimes}", "${newRestaurant.chefName}", "${newRestaurant.address}", "${newRestaurant.photo}")`;
  const result = await runQuery(addRestaurantQuery);
  console.log(result);
  return result;
};

export const deleteRestaurant = async (idRequest: number) => {
  const deleteRestaurantQuery = `DELETE FROM Restaurants WHERE idRestaurant = ${idRequest}`;
  await runQuery(deleteRestaurantQuery);
};

export const getRestaurantMenus = async (idRequest: number) => {
  const getRestaurantMenusQuery = `SELECT * FROM menus WHERE idRestaurant = ${idRequest}`;
  const result = await runQuery(getRestaurantMenusQuery);
  console.log(result);
  return result;
};
