import React, { useState, FunctionComponent } from "react";

interface RestaurantDetailsType {
  menus: string[];
  // openingTimes: { day: string, time: string }[];
  // chef: string;
  // address: string;
}

const Restaurant: FunctionComponent<RestaurantDetailsType> = ({ menus }) => {
  return (
    <div>
      {menus.map((menu) => (
        <h1>{menu}</h1>
      ))}
    </div>
  );
};

export default Restaurant;
