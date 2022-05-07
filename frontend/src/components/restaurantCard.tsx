import axios from "axios";
import { FunctionComponent, MouseEvent, useContext } from "react";
import { Menu } from "./MenuCard";
import "../App.css";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../contexts/AdminContext";

export interface Restaurant {
  idRestaurant: number;
  name: string;
  openingTimes: string;
  chefName: string;
  address: string;
  photo: string;
}

interface RestaurantCardProps extends Restaurant {
  deleteRestaurant: (idRestaurantToDelete: number) => void;
  restaurantMenus: Menu[];
  setRestaurantMenus: (menus: Menu[]) => void;
  handleDeleteMenuClick: (event: MouseEvent, idMenuToDelete: number) => void;
}

export const RestaurantCard: FunctionComponent<RestaurantCardProps> = ({
  idRestaurant,
  name,
  openingTimes,
  chefName,
  address,
  photo,
  deleteRestaurant,
  restaurantMenus,
  handleDeleteMenuClick,
}) => {
  const { isAdmin } = useContext(AdminContext);
  let navigate = useNavigate();
  const handleDeleteRestaurantClick = async (event: MouseEvent) => {
    event.stopPropagation();
    await axios.delete(`http://localhost:8000/restaurants/${idRestaurant}`);
    deleteRestaurant(idRestaurant);
  };
  const handleRestaurantClick = (idRestaurant: number) => {
    navigate(`/restaurants/${idRestaurant}`, { replace: true });
  };

  return (
    <span
      onClick={() => handleRestaurantClick(idRestaurant)}
      style={{
        background: `linear-gradient(rgba(255,255,255,.9), rgb(219, 231, 241, .8)), url("${photo}")`,
        backgroundSize: "cover",
      }}
      className="restaurant-card"
    >
      <span className="menu-title">{name} </span>
      {isAdmin && (
        <button className="delete-button" onClick={(event) => handleDeleteRestaurantClick(event)}>
          X
        </button>
      )}
      <div>
        <p>Opening times: {openingTimes}</p>
        <p>Chef: {chefName}</p>
        <p>Address: {address}</p>
      </div>
      <br />
      <p className="menu-title">Menus:</p>
      {restaurantMenus.map((restaurantMenu) => (
        <span key={restaurantMenu.idMenu}>
          <span>{restaurantMenu.name}</span>
          {isAdmin && (
            <button
              onClick={(event) => handleDeleteMenuClick(event, restaurantMenu.idMenu)}
              key={restaurantMenu.idMenu}
              className="delete-button"
            >
              X
            </button>
          )}
          <br />
        </span>
      ))}
    </span>
  );
};
