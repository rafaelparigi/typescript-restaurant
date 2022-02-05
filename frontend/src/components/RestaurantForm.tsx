import { useState, FunctionComponent, useEffect } from "react";
import { Restaurant } from './restaurantCard';
import axios from "axios";

interface Props {
    addRestaurant: (newRestaurant: Restaurant) => void; 
}

export const RestaurantForm: FunctionComponent<Props> = ({addRestaurant}) => {
    //newRestaurant state is only used in the frontend, thus actual value of idRestaurants does not matter here, and can be set to whatevah
    const emptyForm = {idRestaurants: 0, name: '', openingTimes: '', chefName: '', address: ''};
    const [newRestaurant, setNewRestaurant] = useState<Restaurant>(emptyForm);
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const result = await axios.post('http://localhost:8000/restaurants', {...newRestaurant });
        //adds the restaurant to our frontend and updates idRestaurant with its actual value from the database
        addRestaurant({...newRestaurant, idRestaurants: result.data.insertId});
        setNewRestaurant(emptyForm);
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter a restaurant name: </label>
                <input type="text" value={newRestaurant.name} onChange={(e) => setNewRestaurant({...newRestaurant, name: e.target.value})} required/><br/>
                <label>Enter opening times: </label>
                <input type="text" value={newRestaurant.openingTimes} onChange={(e) => setNewRestaurant({...newRestaurant, openingTimes: e.target.value})} required/><br/>
                <label>Enter chef name: </label>
                <input type="text" value={newRestaurant.chefName} onChange={(e) => setNewRestaurant({...newRestaurant, chefName: e.target.value})} required/><br/>
                <label>Enter address: </label>
                <input type="text" value={newRestaurant.address} onChange={(e) => setNewRestaurant({...newRestaurant, address: e.target.value})} required/><br/>
                <input type="submit"/>
            </form>
        </div>
    );
}

