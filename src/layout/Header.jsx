import React from "react";
import Nav from "../components/Nav";
import Summary from "../components/Summary";

const Header = (props) => {
  return (
    <div className="main">
      <Nav showCartHandler={props.showCartHandler} />
      <Summary />
    </div>
  );
};

export default Header;
