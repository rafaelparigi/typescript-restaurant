import { useEffect } from "react";
import "../App.css";
import { RestaurantCard, Restaurant } from "../components/restaurantCard";
import { FunctionComponent } from "react";
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
    <div className="home">
      <h1 className="home-title">Welcome to restaurants</h1>
      <div className="home-restaurants">
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
