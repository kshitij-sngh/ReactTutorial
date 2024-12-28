import {useState} from "react"
import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"

const filterRestaurants=(searchText,restaurantList)=>{
    return restaurantList.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
}
const Body = () =>{
    const [searchText, setSearchText] = useState("")
    const [filteredRestaurantList, setFilteredRestaurantList] = useState(restaurantList)
    return <>
            <div className="search-container" key="search-container">
                <input type="text" 
                    className="search-input"
                    placeholder="search" 
                    value={searchText} 
                    onChange={(e)=>{setSearchText(e.target.value)}}
                >
                </input>
                <button 
                    className="search-button" 
                    onClick={()=>{
                        data=filterRestaurants(searchText,restaurantList)
                        setFilteredRestaurantList(data)
                        }
                    }
                >
                Search
                </button>
            </div>
            {
                filteredRestaurantList.length > 0 ?
                    <div className="restaurant-list" key="filtered-restaurant-list">
                        {filteredRestaurantList.map((restaurant)=><RestaurantCard {...restaurant.info} key={restaurant.info.key}/>)}
                    </div>:
                    <h3>No Resturants found with the search text</h3>
            }
    </>
}
export default Body