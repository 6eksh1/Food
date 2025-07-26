import { useState } from "react"
function Body(){
    let [data,setData]=useState([])
    let link="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    
    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    .then((val)=>val.json())
    .then((res)=>{
        console.log(res)
        setData(res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

    })
    return <div className="body">
        <div>
            <input></input>
            <button>Search</button>
        </div>
        <div className="card_con">
            {
                data.map((x)=><div className="card">
                    <img className="cardImg"src={link+x.info.cloudinaryImageId}></img>
                    <div>{x.info.name}</div>
                    <div>{x.info.avgRating}</div>
                    <div>{x.info.locality}</div>
                    
                </div>)
            }
        </div>
    </div>
}
export default Body;
