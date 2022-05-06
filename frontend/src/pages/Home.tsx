import { useEffect } from "react";
import "../App.css";
import { RestaurantCard, Restaurant } from "../components/restaurantCard";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Menu } from "../components/MenuCard";

interface HomeProps {
  restaurants: Restaurant[];
  setRestaurants: (restaurants: Restaurant[]) => void;
  restaurantMenus: Menu[];
  setRestaurantMenus: (menus: Menu[]) => void;
  handleDeleteMenuClick: (idMenuToDelete: number) => void;
}

export const Home: FunctionComponent<HomeProps> = ({
  restaurants,
  setRestaurants,
  restaurantMenus,
  setRestaurantMenus,
  handleDeleteMenuClick,
}) => {
  const deleteRestaurant = (idRestaurantToDelete: number) => {
    setRestaurants(
      restaurants.filter(
        (restaurant: Restaurant) => restaurant.idRestaurant !== idRestaurantToDelete
      )
    );
  };

  return (
    <div>
      <h1>Welcome to restaurants</h1>

      {restaurants.map((restaurant) => (
        <Link key={restaurant.idRestaurant} to={`/restaurants/${restaurant.idRestaurant}`}>
          <RestaurantCard
            {...restaurant}
            restaurantMenus={restaurantMenus.filter(
              (restaurantMenu) => restaurant.idRestaurant === restaurantMenu.idRestaurant
            )}
            setRestaurantMenus={setRestaurantMenus}
            deleteRestaurant={deleteRestaurant}
            handleDeleteMenuClick={handleDeleteMenuClick}
          />
        </Link>
      ))}
    </div>
  );
};
