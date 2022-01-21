import React from "react";
import "./App.css";
import Restaurant from "./components/restaurantCard";

function App() {
  const restaurantDetails = { menus: ["Angus", "Rafa"] };
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://i.guim.co.uk/img/media/11d4c182d094199e26ddb36febe67123a9bbc93a/34_246_2966_4275/master/2966.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=7eb0ab5367140724ef58182973ba5633"
          className="App-logo"
          alt="logo"
        />
      </header>
      <Restaurant menus={restaurantDetails.menus} />
    </div>
  );
}

export default App;
