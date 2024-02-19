import React, { useContext } from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between items-center shadow-lg mb-6 bg-gray-200">
      <div className="w-56 pl-8 ">
        <Link to="/">
          <img src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex justify-evenly">
        <ul className="flex">
          <li className="px-4 font-bold text-lg">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 font-bold text-lg"><Link to="/cart">Cart ({cartItems.length})</Link></li>
          <button
            className="mr-6 ml-2 px-4 bg-blue-400 rounded-lg py-1"
            onClick={() => {
              btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-2 font-bold text-lg">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
