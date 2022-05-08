import "./App.css";
import { MouseEvent, useState, useEffect, useContext } from "react";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddMenu } from "./pages/AddMenu";
import { Menu } from "./components/MenuCard";
import axios from "axios";
import { Restaurant } from "./components/restaurantCard";
import { RestaurantPage } from "./pages/RestaurantPage";
import { MenuItem } from "./components/MenuItemCard";
import { ThemeContext } from "./contexts/ThemeContext";
import storage from "local-storage-fallback";

interface RestaurantAxiosRequest {
  data: Restaurant[];
}

interface MenuAxiosRequest {
  data: Menu[];
}

interface MenuItemAxiosRequest {
  data: MenuItem[];
}

const App = () => {
  const { theme } = useContext(ThemeContext);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [restaurantMenus, setRestaurantMenus] = useState<Menu[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const handleDeleteMenuClick = async (event: MouseEvent, idMenuToDelete: number) => {
    event.stopPropagation();
    await axios.delete(`http://localhost:8000/menus/${idMenuToDelete}`);
    setRestaurantMenus(
      restaurantMenus.filter((restaurantMenu) => restaurantMenu.idMenu !== idMenuToDelete)
    );
  };

  const getInitialRestaurants = async () => {
    const { data: restaurantsResponse }: RestaurantAxiosRequest = await axios.get(
      "http://localhost:8000/restaurants"
    );
    setRestaurants(restaurantsResponse);
  };

  const getMenus = async () => {
    const { data: menusResponse }: MenuAxiosRequest = await axios.get(
      `http://localhost:8000/menus`
    );
    setRestaurantMenus(menusResponse);
  };
  const getMenuItems = async () => {
    const { data: menuItemsResponse }: MenuItemAxiosRequest = await axios.get(
      `http://localhost:8000/menu-items`
    );
    console.log("menuItems", menuItemsResponse);
    setMenuItems(menuItemsResponse);
  };

  useEffect(() => {
    getInitialRestaurants();
    getMenus();
    getMenuItems();
  }, []);

  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                restaurants={restaurants}
                setRestaurants={setRestaurants}
                restaurantMenus={restaurantMenus}
                setRestaurantMenus={setRestaurantMenus}
                handleDeleteMenuClick={handleDeleteMenuClick}
              />
            }
          />
          <Route
            path="/add-form"
            element={
              <AddMenu
                restaurants={restaurants}
                setRestaurants={setRestaurants}
                restaurantMenus={restaurantMenus}
                setRestaurantMenus={setRestaurantMenus}
                menuItems={menuItems}
                setMenuItems={setMenuItems}
              />
            }
          />
          {restaurants.map((restaurant) => (
            <Route
              key={restaurant.idRestaurant}
              path={`/restaurants/${restaurant.idRestaurant}`}
              element={
                <RestaurantPage
                  restaurant={restaurant}
                  restaurantMenus={restaurantMenus.filter(
                    (restaurantMenu) => restaurant.idRestaurant === restaurantMenu.idRestaurant
                  )}
                  menuItems={menuItems}
                  setMenuItems={setMenuItems}
                />
              }
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
