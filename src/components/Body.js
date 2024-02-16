import RestaurantCard, { isOpenLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchFound, setSearchFound] = useState("");

  const RestaurantCardOpen = isOpenLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  //Whenever There Is change in state variable react rerenders component

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>No internet</h1>;
  }

  //Conditional Rendering

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div>
      <div className="flex">
        <div>
          <input
            className="ml-4 border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="m-4 px-4 py-1 bg-blue-400 w-20 rounded-lg"
            onClick={() => {
              const searchRestaurent = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              if (searchRestaurent.length === 0) {
                setSearchFound("No results Found");
                setFilteredRestaurent([]);
              } else {
                setSearchFound("");
                setFilteredRestaurent(searchRestaurent);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="ml-1 px-2 mb-3 mt-3 bg-blue-400 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurent(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="p-4 font-bold">UserName:</div>
        <input
          className="p-2 border border-solid border-black"
          type="text"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
      </div>
      <div className="flex flex-wrap">
        <h1>{searchFound}</h1>
        {filteredRestaurent.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.availability.opened ? (
              <RestaurantCardOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
