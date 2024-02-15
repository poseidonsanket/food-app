import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ catData, showItems, setShowIndex, dummy }) => {
  const arr = catData?.itemCards;
  let length1 = 0;
  if (arr) {
    length1 = arr.length;
  }
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="text-center">
      <div className="mx-auto my-4 w-6/12 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {catData.title} ({length1})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={catData?.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
