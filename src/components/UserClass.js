import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h1>Class Based Component</h1>
        <h1>Count : {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          CountIncrease
        </button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Pune</h3>
        <h3>Contact: sanketdadali05@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
