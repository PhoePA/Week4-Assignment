import { useState, useContext } from "react";
import { itemContext } from "../store/ItemContext";
const Card = ({ fruit }) => {
  const { id, name, price } = fruit;
  const { addItem } = useContext(itemContext);
  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;

  const addToCartHandler = () => {
    if (currentAmountNumber < 1 || currentAmountNumber > 100) {
      alert("Please Enter Valid Amount!");
      return;
    }
    addItem({
      id,
      name,
      price,
      amount: currentAmountNumber,
    });
  };
  return (
    <div className="card">
      <div>
        <h3 className="card-name">{fruit.name}</h3>
        <span className="card-price">$ {fruit.price}</span>
        <p className="card-description">{fruit.description}</p>
      </div>

      <div>
        <input
          type="number"
          className="card-input"
          min={1}
          max={100}
          value={currentAmount}
          onChange={(e) => {
            setCurrentAmount(e.target.value);
          }}
        />
        <button className="card-button" onClick={addToCartHandler}>
          {" "}
          + ADD
        </button>
      </div>
    </div>
  );
};

export default Card;
