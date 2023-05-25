import React from "react";
import { useContext } from "react";
import { itemContext } from "../store/ItemContext";

const CartItem = ({ fruit }) => {
  const { addItem, removeItem } = useContext(itemContext);

  const addAmountHandler = () => {
    addItem({ ...fruit, amount: 1 });
  };
  const removeAmountHandler = () => {
    removeItem(fruit.id);
  };
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
          <button className="card-button m-ctr" onClick={addAmountHandler}>
            {" "}
            +{" "}
          </button>
          <button className="card-button" onClick={removeAmountHandler}>
            {" "}
            -{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
