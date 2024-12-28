import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"
const Body = () =>(
    <>
    <div className="restaurantList">
    {restaurantList.map((restaurant)=><RestaurantCard {...restaurant.info} key={restaurant.info.key}/>)}
    </div>
    </>
)
export default Body