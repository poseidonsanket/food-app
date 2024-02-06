import React from "react";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Menu_Api } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      Menu_Api + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    setResInfo(json);
    console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
  };
  if (resInfo === null) return <ShimmerUI />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}Rs
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
