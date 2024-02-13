import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="m-4 p-4 w-64 rounded-lg bg-slate-200 hover:bg-slate-300">
      <img
        className="rounded-lg pb-2"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-xl">{name}</h3>
      <h4 className="py-2">{cuisines.join(" , ")}</h4>
      <h4 className="py-2">{avgRating} stars</h4>
      <h4 className="py-2">{costForTwo}</h4>
      <h4 className="py-2">{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
