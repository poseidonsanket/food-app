import { useEffect, useState } from "react";
import { Menu_Api } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      Menu_Api + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu;
