import { runQuery } from '../mysql_db';

interface Restaurant {
    idRestaurants: number;
    name: string
    openingTimes: string;
    chefName: string;
    address: string;
  }

export const getRestaurants = async () => {
    const result = await runQuery(`SELECT * FROM Restaurants`);
    console.log(result);
    return result;
}
export const getRestaurant = async (idRequest: number) => { 
    const result = await runQuery(`SELECT name FROM Restaurants WHERE idRestaurants = ${idRequest}`);
    return result;
}
export const addRestaurant = async (newRestaurant: Restaurant) => {
    const addRestaurantQuery = `INSERT INTO Restaurants (name, openingTimes, chefName, address) VALUES ("${newRestaurant.name}", "${newRestaurant.openingTimes}", "${newRestaurant.chefName}", "${newRestaurant.address}")`;
    const result = await runQuery(addRestaurantQuery);
    console.log(result);
    return result;
}

export const deleteRestaurant = async (idRequest: number) => {
    const deleteRestaurantQuery = `DELETE FROM Restaurants WHERE idRestaurants = ${idRequest}`;
    await runQuery(deleteRestaurantQuery);
}