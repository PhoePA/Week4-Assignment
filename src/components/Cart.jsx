import React from "react";
import CartItem from "./CartItem";
import { useContext } from "react";
import { itemContext } from "../store/ItemContext";

const Cart = (props) => {
  const { items, totalAmount } = useContext(itemContext);

  return (
    <section className="cart-box">
      <h2>Your Items are Here!</h2>
      {items.length < 1 ? (
        <h1 className="noItem">No Item in your cart</h1>
      ) : (
        <div>
          {items.map((fruit) => (
            <CartItem key={fruit.id} fruit={fruit} />
          ))}
        </div>
      )}

      <hr />
      <div className="total">
        <h3>Total Price</h3>
        <p>$ {totalAmount}</p>
      </div>
      <div className="btns">
        {items.length < 1 ? (
          <button className="close-btn" onClick={props.hideCartHandler}>
            Close
          </button>
        ) : (
          <div>
            <button className="close-btn" onClick={props.hideCartHandler}>
              Close
            </button>
            <button className="order-btn">Order </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
