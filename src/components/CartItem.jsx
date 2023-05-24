import React from "react";

const CartItem = ({ fruit }) => {
  return (
    <div className="card cart">
      <div>
        <p className="card-name">{fruit.name}</p>
        <p className="card-price">$ {fruit.price}</p>
      </div>

      <div className="card-right">
        <p className="card-quantity">
          x <span>{fruit.amount}</span>
        </p>
        <div className="quantity-ctr">
          <button className="card-button m-ctr"> + </button>
          <button className="card-button"> - </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
