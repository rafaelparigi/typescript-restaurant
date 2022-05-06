import { useState, FunctionComponent, useEffect } from "react";
import { Menu } from "./MenuCard";
import axios from "axios";
import { Restaurant } from "./restaurantCard";
import { MenuItem } from "./MenuItemCard";

interface MenuFormProps {
  addMenu: (newMenu: Menu) => void;
  addMenuItem: (newMenuItem: MenuItem) => void;
  addRestaurant: (newRestaurant: Restaurant) => void;
  restaurantMenus: Menu[];
  restaurants: Restaurant[];
}

export const MenuForm: FunctionComponent<MenuFormProps> = ({
  addRestaurant,
  addMenu,
  addMenuItem,
  restaurantMenus,
  restaurants,
}) => {
  //newRestaurant state is only used in the frontend, thus actual value of idRestaurant does not matter here, and can be set to whatevah
  const emptyRestaurantForm = {
    idRestaurant: 0,
    name: "",
    openingTimes: "",
    chefName: "",
    address: "",
  };

  //newMenu state is only used in the frontend, thus actual value of idMenu/idRestaurant does not matter here, and can be set to whatevah
  const emptyNewMenuForm = { idMenu: 0, name: "", idRestaurant: 0 };
  const emptyNewMenuItemForm = { idMenuItem: 0, name: "", idMenu: 0, price: "" };

  const [newRestaurant, setNewRestaurant] = useState<Restaurant>(emptyRestaurantForm);
  const [newMenu, setNewMenu] = useState<Menu>(emptyNewMenuForm);
  const [newMenuItem, setNewMenuItem] = useState<MenuItem>(emptyNewMenuItemForm);
  const [idRestaurantSelected, setIdRestaurantSelected] = useState<number>(0);
  useEffect(() => console.log("id", idRestaurantSelected), [idRestaurantSelected]);

  const handleSubmitRestaurant = async (event: any) => {
    event.preventDefault();
    const result = await axios.post("http://localhost:8000/restaurants", { ...newRestaurant });
    console.log("result", result);
    //adds the restaurant to our frontend and updates idRestaurant with its actual value from the database
    addRestaurant({ ...newRestaurant, idRestaurant: result.data.insertId });
    setNewRestaurant(emptyRestaurantForm);
  };

  const handleSubmitMenu = async (event: any) => {
    event.preventDefault();
    const result = await axios.post("http://localhost:8000/menus", { ...newMenu });
    console.log("result", result);
    //adds the menu to our frontend and updates idMenu with its actual value from the database
    addMenu({ ...newMenu, idMenu: result.data.insertId });
    setNewMenu(emptyNewMenuForm);
  };

  const handleSubmitMenuItem = async (event: any) => {
    event.preventDefault();
    const result = await axios.post("http://localhost:8000/menu-items", { ...newMenuItem });
    //adds the menu-item to our frontend and updates idMenuItem with its actual value from the database
    addMenuItem({ ...newMenuItem, idMenuItem: result.data.insertId });
    setNewMenuItem(emptyNewMenuItemForm);
  };

  return (
    <div>
      <form data-testid="restaurant-form" onSubmit={handleSubmitRestaurant}>
        <label>Enter a restaurant name: </label>
        <input
          type="text"
          value={newRestaurant.name}
          onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
          required
        />
        <br />
        <label>Enter opening times: </label>
        <input
          type="text"
          value={newRestaurant.openingTimes}
          onChange={(e) => setNewRestaurant({ ...newRestaurant, openingTimes: e.target.value })}
          required
        />
        <br />
        <label>Enter chef name: </label>
        <input
          type="text"
          value={newRestaurant.chefName}
          onChange={(e) => setNewRestaurant({ ...newRestaurant, chefName: e.target.value })}
          required
        />
        <br />
        <label>Enter address: </label>
        <input
          type="text"
          value={newRestaurant.address}
          onChange={(e) => setNewRestaurant({ ...newRestaurant, address: e.target.value })}
          required
        />
        <br />
        <input type="submit" />
      </form>

      <form data-testid="restaurant-form" onSubmit={handleSubmitMenu}>
        <label>Enter a menu name: </label>
        <input
          type="text"
          value={newMenu.name}
          onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
          required
        />
        <br />
        <br />
        <label>Select restaurant for the new restaurant: </label>
        <select
          required
          onChange={(e) => setNewMenu({ ...newMenu, idRestaurant: parseInt(e.target.value) })}
        >
          <option disabled selected>
            {" "}
            -- select an option --{" "}
          </option>
          {restaurants.map((restaurant) => (
            <option value={restaurant.idRestaurant}>{restaurant.name}</option>
          ))}
        </select>
        <input type="submit" />
      </form>

      <form data-testid="restaurant-form" onSubmit={handleSubmitMenuItem}>
        <label>Enter a menu item name: </label>
        <input
          value={newMenuItem.name}
          type="text"
          onChange={(e) => setNewMenuItem({ ...newMenuItem, name: e.target.value })}
          required
        />
        <br />
        <br />
        <label>Select rest for the new menu item: </label>
        <select required onChange={(e) => setIdRestaurantSelected(parseInt(e.target.value))}>
          <option disabled selected>
            {" "}
            -- select an option --{" "}
          </option>
          {restaurants.map((restaurant) => (
            <option value={restaurant.idRestaurant}>{restaurant.name}</option>
          ))}
        </select>
        <select
          required
          onChange={(e) => setNewMenuItem({ ...newMenuItem, idMenu: parseInt(e.target.value) })}
        >
          <option disabled selected>
            {" "}
            -- select an option --{" "}
          </option>
          {restaurantMenus
            .filter((restaurantMenu) => restaurantMenu.idRestaurant === idRestaurantSelected)
            .map((selectedRestaurantMenu) => (
              <option value={selectedRestaurantMenu.idMenu}>{selectedRestaurantMenu.name}</option>
            ))}
        </select>
        <label>Price: </label>
        <input
          value={newMenuItem.price}
          type="text"
          onChange={(e) => setNewMenuItem({ ...newMenuItem, price: e.target.value })}
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
