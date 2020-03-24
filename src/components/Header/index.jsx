import React from "react";
import Nav from "./Nav";
const Header = props => {
  console.log("header", props);
  return (
    <div>
      <Nav {...props} />
    </div>
  );
};

export default Header;
