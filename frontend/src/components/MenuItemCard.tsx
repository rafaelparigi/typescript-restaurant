import axios from "axios";
import { FunctionComponent, MouseEvent, useContext } from "react";
import "../App.css";
import "../styles/RestaurantPage.css";
import { AdminContext } from "../contexts/AdminContext";
import { ThemeContext } from "../contexts/ThemeContext";

export interface MenuItem {
  idMenuItem: number;
  name: string;
  idMenu: number;
  price: string;
}

export interface MenuItemCardProps extends MenuItem {
  menuItems: MenuItem[];
  setMenuItems: (menuItems: MenuItem[]) => void;
}

export const MenuItemCard: FunctionComponent<MenuItemCardProps> = ({
  idMenuItem,
  name,
  idMenu,
  price,
  menuItems,
  setMenuItems,
}) => {
  const { isAdmin } = useContext(AdminContext);
  const { theme } = useContext(ThemeContext);
  const handleDeleteMenuItemClick = async (event: MouseEvent) => {
    event.stopPropagation();
    await axios.delete(`http://localhost:8000/menu-items/${idMenuItem}`);
    deleteMenuItem(idMenuItem);
  };
  const deleteMenuItem = (idMenuItemToDelete: number) => {
    setMenuItems(menuItems.filter((menuItem) => menuItem.idMenuItem !== idMenuItemToDelete));
  };
  return (
    <div className={`menu-item-card theme-${theme}`}>
      <p>
        {idMenuItem}-{name}
      </p>
      <p>£{price}</p>
      {isAdmin && (
        <button className="delete-button" onClick={(event) => handleDeleteMenuItemClick(event)}>
          X
        </button>
      )}
    </div>
  );
};
