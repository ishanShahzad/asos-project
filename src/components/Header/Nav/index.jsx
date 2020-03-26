import React from "react";
import PreNav from "./Pre-nav";
import MainNav from "./Main";
const Nav = props => {
  return (
    <div>
      <PreNav {...props} />
      <MainNav />
    </div>
  );
};

export default Nav;
