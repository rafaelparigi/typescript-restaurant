import "../App.css";
import { Restaurant } from "../components/restaurantCard";
import { Menu } from "../components/MenuCard";
import { MenuItemCard } from "../components/MenuItemCard";
import { FunctionComponent } from "react";
import { MenuItem } from "../components/MenuItemCard";

interface RestaurantPageProps {
  restaurant: Restaurant;
  restaurantMenus: Menu[];
  menuItems: MenuItem[];
  setMenuItems: (menuItems: MenuItem[]) => void;
}

export const RestaurantPage: FunctionComponent<RestaurantPageProps> = ({
  restaurant,
  restaurantMenus,
  menuItems,
  setMenuItems,
}) => {
  return (
    <div>
      <h1>{`Welcome to restaurant ${restaurant.idRestaurant}`}</h1>
      <div>
        {restaurantMenus.map((restaurantMenu) => (
          <div key={restaurantMenu.idMenu}>
            <h2>{restaurantMenu.name}</h2>
            {menuItems
              .filter((menuItem) => restaurantMenu.idMenu === menuItem.idMenu)
              .map((menuItem) => (
                <MenuItemCard {...menuItem} menuItems={menuItems} setMenuItems={setMenuItems} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
