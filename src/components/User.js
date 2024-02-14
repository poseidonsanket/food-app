import React from "react";

const User = (props) => {
  return (
    <div className="m-1 p-4 border-solid border-black border-4">
      <h1>Function Based Component</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Pune</h3>
      <h3>Contact: sanketdadali05@gmail.com</h3>
    </div>
  );
};

export default User;
