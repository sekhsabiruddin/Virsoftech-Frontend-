import React from "react";

const Cart = ({ value, inputValues, handleInputChange, handleAdd }) => {
  return (
    <div className="box">
      {value.map((item) => (
        <div key={item.id} className="box-content">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <input
            type="number"
            step="any"
            placeholder="qty"
            value={inputValues[item.id] || ""}
            onChange={(e) => handleInputChange(e, item.id)}
          />
          <br />
          <button onClick={() => handleAdd(item.id)}>ADD</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
