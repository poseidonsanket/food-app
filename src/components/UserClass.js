import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "sanket",
        location: "default",
      },
    };

    console.log("Constructor Called");
  }

  async componentDidMount() {
    console.log("Component Loaded");

    //API Calls
    const data = await fetch("https://api.github.com/users/poseidonsanket");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }
  render() {
    console.log("Render Called");

    const { name, location, html_url } = this.state.userInfo;
    return (
      <div className="m-1 p-4 border-solid border-black border-4">
        <h1>Class Based Component</h1>
        <h1>
          <a href={html_url} target="_blank">
            Github Link
          </a>
        </h1>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h3>Contact: sanketdadali05@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
