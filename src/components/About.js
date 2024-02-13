import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold m-2 ">About Us</h1>
      <User name={"Sanket Dadali"} />
      <br></br>
      <UserClass name={"Sanket Dadali"} />
    </div>
  );
};

export default About;
