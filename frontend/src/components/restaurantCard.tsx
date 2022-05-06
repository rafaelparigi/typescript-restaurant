import axios from "axios";
import { FunctionComponent } from "react";
import { Menu } from "./MenuCard";
import "../App.css";

export interface Restaurant {
  idRestaurant: number;
  name: string;
  openingTimes: string;
  chefName: string;
  address: string;
}

interface RestaurantCardProps extends Restaurant {
  deleteRestaurant: (idRestaurantToDelete: number) => void;
  restaurantMenus: Menu[];
  setRestaurantMenus: (menus: Menu[]) => void;
  handleDeleteMenuClick: (idMenuToDelete: number) => void;
}

export const RestaurantCard: FunctionComponent<RestaurantCardProps> = ({
  idRestaurant,
  name,
  openingTimes,
  chefName,
  address,
  deleteRestaurant,
  restaurantMenus,
  handleDeleteMenuClick,
}) => {
  const handleDeleteRestaurantClick = async () => {
    await axios.delete(`http://localhost:8000/restaurants/${idRestaurant}`);
    deleteRestaurant(idRestaurant);
  };

  return (
    <div>
      <div className="restaurant-card">
        <span>{name}</span> <button onClick={handleDeleteRestaurantClick}>X</button>
        <div>
          <p>{openingTimes}</p>
          <p>{chefName}</p>
          <p>{address}</p>
        </div>
        <p>Menus:</p>
        {restaurantMenus.map((restaurantMenu) => (
          <span key={restaurantMenu.idMenu}>
            <span>{restaurantMenu.name}</span>
            <button
              onClick={() => handleDeleteMenuClick(restaurantMenu.idMenu)}
              key={restaurantMenu.idMenu}
            >
              X
            </button>
            <br />
          </span>
        ))}
      </div>
      <br />
    </div>
  );
};
