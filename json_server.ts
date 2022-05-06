//this is now on an MySQL database
export const myDatabase = {
  restaurants: [
    { idRestaurant: 1, name: "Mexican" },
    { idRestaurant: 2, name: "Brasilian" },
    { idRestaurant: 3, name: "Italian" },
  ],
  menus: [
    { idMenu: 1, name: "Tapas", idRestaurant: 1 },
    { idMenu: 2, name: "Burritos", idRestaurant: 1 },
    { idMenu: 3, name: "Meats", idRestaurant: 2 },
    { idMenu: 4, name: "Caipirinhas", idRestaurant: 2 },
    { idMenu: 5, name: "Pasta", idRestaurant: 3 },
    { idMenu: 6, name: "Wines", idRestaurant: 3 },
  ],
  menu_items: [
    { idMenuItem: 1, name: "Nachos", idMenu: 1 },
    { idMenuItem: 2, name: "Polenta", idMenu: 1 },
    { idMenuItem: 3, name: "Veggie burrito", idMenu: 2 },
    { idMenuItem: 4, name: "Beef burrito", idMenu: 2 },
    { idMenuItem: 5, name: "Picanha", idMenu: 3 },
    { idMenuItem: 6, name: "Strawberry caipirinha", idMenu: 4 },
    { idMenuItem: 7, name: "Bolognese", idMenu: 5 },
    { idMenuItem: 8, name: "White wine", idMenu: 6 },
    { idMenuItem: 9, name: "Red wine", idMenu: 6 },
  ],
};
