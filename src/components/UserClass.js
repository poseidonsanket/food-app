import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Pune</h3>
        <h3>Contact: sanketdadali05@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
