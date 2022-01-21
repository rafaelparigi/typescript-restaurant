import React, { useState, FunctionComponent } from "react";

interface Props {
  menus: string[];
  // openingTimes: { day: string, time: string }[];
  // chef: string;
  // address: string;
}

const Restaurant: FunctionComponent<Props> = (Props) => {
  return (
    <div>
      {Props.menus.map((menu) => (
        <h1>{menu}</h1>
      ))}
    </div>
  );
};

export default Restaurant;
