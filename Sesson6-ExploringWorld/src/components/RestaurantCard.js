import { IMAGE_CDN_URL } from "../constants"
const RestaurantCard = ({cloudinaryImageId,name,cuisines,avgRating}) =>{
    return (<div className="restaurant-card">
        <img src={IMAGE_CDN_URL+cloudinaryImageId}/>
        <h2 className="restaurant-card-name">{name}</h2>
        <h3 className="restaurant-card-cuisines">{cuisines.join(", ")}</h3>
        <h4 className="restaurant-card-avg-rating">{avgRating} stars</h4>
    </div>
    )
}
export default RestaurantCard