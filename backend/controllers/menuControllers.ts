import { runQuery } from "../mysql_db";

interface Menu {
  idMenu: number;
  name: string;
  idRestaurant: number;
}

export const getMenus = async () => {
  const result = await runQuery(`SELECT * FROM menus`);
  console.log(result);
  return result;
};

// export const getRestaurant = async (idRequest: number) => {
//   const result = await runQuery(`SELECT name FROM Restaurants WHERE idRestaurant = ${idRequest}`);
//   return result;
// };
export const addMenu = async (newMenu: Menu) => {
  const addMenuQuery = `INSERT INTO menus (name, idRestaurant) VALUES ("${newMenu.name}", "${newMenu.idRestaurant}")`;
  const result = await runQuery(addMenuQuery);
  console.log("added menu", result);
  return result;
};

export const deleteMenu = async (idRequest: number) => {
  const deleteMenuQuery = `DELETE FROM menus WHERE idMenu = ${idRequest}`;
  await runQuery(deleteMenuQuery);
};

// export const getRestaurantMenus = async (idRequest: number) => {
//   const getRestaurantMenusQuery = `SELECT * FROM menus WHERE idRestaurant = ${idRequest}`;
//   const result = await runQuery(getRestaurantMenusQuery);
//   console.log(result);
//   return result;
// };
