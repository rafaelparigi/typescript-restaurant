import { runQuery } from "../mysql_db";

interface MenuItem {
  idMenuItem: number;
  name: string;
  idMenu: number;
  price: string;
}

export const getMenuItems = async () => {
  const result = await runQuery(`SELECT * FROM menuItems`);
  return result;
};

// export const getRestaurant = async (idRequest: number) => {
//   const result = await runQuery(`SELECT name FROM Restaurants WHERE idRestaurant = ${idRequest}`);
//   return result;
// };
export const addMenuItem = async (newMenuItem: MenuItem) => {
  const addMenuItemQuery = `INSERT INTO menuItems (name, idMenu, price) VALUES ("${newMenuItem.name}", "${newMenuItem.idMenu}", "${newMenuItem.price}")`;
  const result = await runQuery(addMenuItemQuery);
  console.log(result);
  return result;
};

export const deleteMenuItem = async (idRequest: number) => {
  const deleteMenuItemQuery = `DELETE FROM menuItems WHERE idMenuItem = ${idRequest}`;
  await runQuery(deleteMenuItemQuery);
};

// export const getRestaurantMenus = async (idRequest: number) => {
//   const getRestaurantMenusQuery = `SELECT * FROM menus WHERE idRestaurant = ${idRequest}`;
//   const result = await runQuery(getRestaurantMenusQuery);
//   console.log(result);
//   return result;
// };
