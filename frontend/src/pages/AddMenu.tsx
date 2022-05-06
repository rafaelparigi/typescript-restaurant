import { MenuForm } from "../components/AddForm";
import { FunctionComponent } from "react";
import { Menu } from "../components/MenuCard";
import { Restaurant } from "../components/restaurantCard";
import { MenuItem } from "../components/MenuItemCard";

interface AddFormProps {
  restaurants: Restaurant[];
  setRestaurants: (restaurants: Restaurant[]) => void;
  restaurantMenus: Menu[];
  setRestaurantMenus: (restaurantMenus: Menu[]) => void;
  menuItems: MenuItem[];
  setMenuItems: (menuItems: MenuItem[]) => void;
}

export const AddMenu: FunctionComponent<AddFormProps> = ({
  restaurants,
  setRestaurants,
  restaurantMenus,
  setRestaurantMenus,
  menuItems,
  setMenuItems,
}) => {
  const addRestaurant = (newRestaurant: Restaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
  };
  const addMenu = (newMenu: Menu) => {
    setRestaurantMenus([...restaurantMenus, newMenu]);
  };
  const addMenuItem = (newMenuItem: MenuItem) => {
    setMenuItems([...menuItems, newMenuItem]);
  };
  return (
    <MenuForm
      addRestaurant={addRestaurant}
      addMenu={addMenu}
      addMenuItem={addMenuItem}
      restaurantMenus={restaurantMenus}
      restaurants={restaurants}
    />
  );
};
