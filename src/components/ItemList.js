import React from "react";

const ItemList = ({ items }) => {
  console.log(items)
  return items === undefined ? (
    <h1>No items Available</h1>
  ) : (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border border-gray-200 border-b-4 flex justify-between"
        >
          <div>
            <div className="py-2 px-2 text-left font-bold">
              <span className="pr-2">{item.card.info.name} - </span>
              <span>₹{item.card.info.price / 100 || item.card.info.defaultPrice/100} </span>
            </div>
            <p className="text-sm text-left">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 shadow-lg rounded-lg bg-black text-white">
                Add+
              </button>
            </div>

            <img
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                item.card.info.imageId
              }
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
