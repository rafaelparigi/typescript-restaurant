import { MouseEvent, useContext } from "react";
import "../App.css";
import { RestaurantCard, Restaurant } from "../components/restaurantCard";
import { FunctionComponent } from "react";
import { Menu } from "../components/MenuCard";
import { ThemeContext } from "../contexts/ThemeContext";

interface HomeProps {
  restaurants: Restaurant[];
  setRestaurants: (restaurants: Restaurant[]) => void;
  restaurantMenus: Menu[];
  setRestaurantMenus: (menus: Menu[]) => void;
  handleDeleteMenuClick: (event: MouseEvent, idMenuToDelete: number) => void;
}

export const Home: FunctionComponent<HomeProps> = ({
  restaurants,
  setRestaurants,
  restaurantMenus,
  setRestaurantMenus,
  handleDeleteMenuClick,
}) => {
  const { theme } = useContext(ThemeContext);
  const deleteRestaurant = (idRestaurantToDelete: number) => {
    setRestaurants(
      restaurants.filter(
        (restaurant: Restaurant) => restaurant.idRestaurant !== idRestaurantToDelete
      )
    );
  };

  return (
    <div className={`home theme-${theme}`}>
      <h1 className={`home-title theme-${theme}`}>Restaurant list</h1>
      <div className={`home-restaurants theme-${theme}`}>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.idRestaurant}
            {...restaurant}
            restaurantMenus={restaurantMenus.filter(
              (restaurantMenu) => restaurant.idRestaurant === restaurantMenu.idRestaurant
            )}
            setRestaurantMenus={setRestaurantMenus}
            deleteRestaurant={deleteRestaurant}
            handleDeleteMenuClick={handleDeleteMenuClick}
          />
        ))}
      </div>
    </div>
  );
};
