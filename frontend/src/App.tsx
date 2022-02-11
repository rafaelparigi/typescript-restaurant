import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { RestaurantCard, Restaurant } from "./components/restaurantCard";
import { RestaurantForm } from "./components/RestaurantForm";

interface AxiosRequest {
  data: Restaurant[];
}

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const getInitialRestaurants = async () => {
    const { data: response }: AxiosRequest = await axios.get(
      "http://localhost:8000/restaurants"
    );
    console.log("HELLO", response);
    setRestaurants(response);
  };

  const addRestaurant = (newRestaurant: Restaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
  };

  const deleteRestaurant = (idRestaurantToDelete: number) => {
    setRestaurants(
      restaurants.filter(
        (restaurant) => restaurant.idRestaurants !== idRestaurantToDelete
      )
    );
  };

  useEffect(() => {
    getInitialRestaurants();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to restaurants</h1>
      <RestaurantForm addRestaurant={addRestaurant} />
      {restaurants.map((restaurant) => (
        <RestaurantCard {...restaurant} deleteRestaurant={deleteRestaurant} />
      ))}
    </div>
  );
}

export default App;
