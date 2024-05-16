import React from "react";

const CartTable = ({ userAddCoin, totalAmount }) => {
  return (
    <div className="price-table">
      <h2>My Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {userAddCoin.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">
        <div>TOTAL : {totalAmount}</div>
      </div>
    </div>
  );
};

export default CartTable;
