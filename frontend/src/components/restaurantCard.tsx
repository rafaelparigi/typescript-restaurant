import axios from "axios";
import React, { FunctionComponent, useState } from "react";
import "../App.css";

export interface Restaurant {
  idRestaurants: number;
  name: string;
  openingTimes: string;
  chefName: string;
  address: string;
}

interface RestaurantCardProps extends Restaurant {
  deleteRestaurant: (idRestaurantToDelete: number) => void;
}

export const RestaurantCard: FunctionComponent<RestaurantCardProps> = ({ idRestaurants, name, openingTimes, chefName, address, deleteRestaurant }) => {
  const handleClick = async () => {
    await axios.delete(`http://localhost:8000/restaurants/${idRestaurants}`);
    deleteRestaurant(idRestaurants);
  }
  return (
    <div className='restaurant-card'>
      <p>{name}</p>
      <p>{openingTimes}</p>
      <p>{chefName}</p>
      <p>{address}</p>
      <button onClick={handleClick}>X</button>
    </div>
  );
};