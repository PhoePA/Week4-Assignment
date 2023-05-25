import React from "react";
import Cart from "./Cart";

const BackDrop = (props) => {
  return (
    <div>
      {props.showCart && (
        <div>
          <section className="backdrop" onClick={props.hideCartHandler} />
          <Cart hideCartHandler={props.hideCartHandler} />
        </div>
      )}
    </div>
  );
};

export default BackDrop;
