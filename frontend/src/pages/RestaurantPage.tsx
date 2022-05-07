import "../App.css";
import "../styles/RestaurantPage.css";
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
    <div className="restaurant-page">
      <h1 className="restaurant-page-title">{`Welcome to restaurant ${restaurant.idRestaurant}`}</h1>
      <div className="menus-layout">
        {restaurantMenus.map((restaurantMenu) => (
          <div className="menu-card" key={restaurantMenu.idMenu}>
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
