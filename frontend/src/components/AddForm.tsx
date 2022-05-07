import { useState, FunctionComponent, useEffect } from "react";
import { Menu } from "./MenuCard";
import axios from "axios";
import { Restaurant } from "./restaurantCard";
import { MenuItem } from "./MenuItemCard";
import "../styles/AddForm.css";

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
    photo: "",
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

  const restaurantForm = [
    { label: "Enter a restaurant name: ", input: "name" },
    { label: "Enter open times: ", input: "openingTimes" },
    { label: "Enter chef name: ", input: "chefName" },
    { label: "Enter address: ", input: "address" },
    { label: "Enter photo: ", input: "photo" },
  ];

  return (
    <div className="add-form">
      <form
        data-testid="restaurant-form"
        onSubmit={handleSubmitRestaurant}
        className="add-form-unit"
      >
        <h1>Add a restaurant</h1>
        <div className="add-form-all-fields">
          {restaurantForm.map((restaurantFormField) => (
            <div className="add-form-field">
              <label>{restaurantFormField.label}</label>
              <input
                type="text"
                value={newRestaurant[restaurantFormField.input as keyof Restaurant]}
                onChange={(e) =>
                  setNewRestaurant({
                    ...newRestaurant,
                    [restaurantFormField.input]: e.target.value,
                  })
                }
                required
              ></input>
            </div>
          ))}
        </div>
        <input className="submit-button" type="submit" />
      </form>

      <form data-testid="restaurant-form" onSubmit={handleSubmitMenu} className="add-form-unit">
        <h1>Add a menu</h1>
        <div className="add-form-all-fields ">
          <div className="add-form-field">
            <label>New menu's restaurant: </label>
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
          </div>
          <div className="add-form-field">
            <label>Enter a menu name: </label>
            <input
              type="text"
              value={newMenu.name}
              onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
              required
            />
          </div>
        </div>
        <input className="submit-button" type="submit" />
      </form>

      <form data-testid="restaurant-form" onSubmit={handleSubmitMenuItem} className="add-form-unit">
        <h1>Add a menu item</h1>
        <div className="add-form-all-fields">
          <div className="add-form-field">
            <label>New menu-item's restaurant: </label>
            <select required onChange={(e) => setIdRestaurantSelected(parseInt(e.target.value))}>
              <option disabled selected>
                {" "}
                -- select an option --{" "}
              </option>
              {restaurants.map((restaurant) => (
                <option value={restaurant.idRestaurant}>{restaurant.name}</option>
              ))}
            </select>
          </div>
          <div className="add-form-field">
            <label>New menu-item's menu: </label>
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
                  <option value={selectedRestaurantMenu.idMenu}>
                    {selectedRestaurantMenu.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="add-form-field">
            <label>Enter a menu-item name: </label>
            <input
              value={newMenuItem.name}
              type="text"
              onChange={(e) => setNewMenuItem({ ...newMenuItem, name: e.target.value })}
              required
            />
          </div>
          <div className="add-form-field">
            <label>Enter price: </label>
            <input
              value={newMenuItem.price}
              type="text"
              onChange={(e) => setNewMenuItem({ ...newMenuItem, price: e.target.value })}
              required
            />
          </div>
        </div>
        <input className="submit-button" type="submit" />
      </form>
    </div>
  );
};
