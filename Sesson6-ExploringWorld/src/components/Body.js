import {useState, useEffect} from "react"
import { API_URL } from "../constants"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"

const filterRestaurants=(searchText,restaurantList)=>{
    return restaurantList.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
}

const Body = () =>{
    const [searchText, setSearchText] = useState("")
    const [allRestaurantList, setAllRestaurantList] = useState([])
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([])

    async function fetchRestaurantList (){
        const data = await fetch(API_URL)
        const jsonData = await data.json()
        const restaurantList = jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setAllRestaurantList(restaurantList)
        setFilteredRestaurantList(restaurantList)
    }

    useEffect(()=>{
        fetchRestaurantList();
    },[])

    if(!allRestaurantList) return null;
    
    return allRestaurantList.length===0?<Shimmer/>:
        (<>
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
                        data=filterRestaurants(searchText,allRestaurantList)
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
        )
}
export default Body