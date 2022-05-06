import axios from "axios";
import { FunctionComponent } from "react";
import "../App.css";

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
  const handleDeleteMenuItemClick = async () => {
    await axios.delete(`http://localhost:8000/menu-items/${idMenuItem}`);
    deleteMenuItem(idMenuItem);
  };
  const deleteMenuItem = (idMenuItemToDelete: number) => {
    setMenuItems(menuItems.filter((menuItem) => menuItem.idMenuItem !== idMenuItemToDelete));
  };
  return (
    <div className="menu-card">
      <p>
        {idMenuItem}-{name}
      </p>
      <p>£{price}</p>
      <button onClick={handleDeleteMenuItemClick}>X</button>
    </div>
  );
};
