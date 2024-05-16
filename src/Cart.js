import React from "react";

const Cart = ({ value, inputValues, handleInputChange, handleAdd }) => {
  return (
    <div className="box">
      {value.map((item) => (
        <div key={item.id} className="box-content">
          <div className="nameandprice">
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
          <div>
            <input
              type="number"
              step="any"
              placeholder="Qty"
              value={inputValues[item.id] || ""}
              onChange={(e) => handleInputChange(e, item.id)}
            />
            <br />
            <div className="btn">
              <button onClick={() => handleAdd(item.id)}>ADD</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
