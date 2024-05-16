import React, { useState } from "react";
import Cart from "./Cart";
import CartTable from "./CartTable";

const App = () => {
  const [inputValues, setInputValues] = useState({});
  const [userAddCoin, setUserAddCoin] = useState([]);
  const biticon = [
    { id: 1, name: "BTC", price: 25000, quantity: 0 },
    { id: 2, name: "DOGE", price: 0.75, quantity: 0 },
    { id: 3, name: "PAPALE", price: 1.5, quantity: 0 },
  ];

  const handleInputChange = (e, id) => {
    const { value } = e.target;
    setInputValues({ ...inputValues, [id]: value });
  };

  const handleAdd = (id) => {
    const quantity = parseFloat(inputValues[id]);
    if (!isNaN(quantity) && quantity >= 0) {
      const selectedItem = biticon.find((item) => item.id === id);
      const totalPrice = selectedItem.price * quantity;
      setUserAddCoin([
        ...userAddCoin,
        { ...selectedItem, quantity, totalPrice },
      ]);
    }
    setInputValues({ ...inputValues, [id]: "" });
  };

  // Calculate total amount
  const totalAmount = userAddCoin.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  );

  return (
    <div>
      <div className="container">
        <div className="inner-container">
          <Cart
            value={biticon}
            inputValues={inputValues}
            handleInputChange={handleInputChange}
            handleAdd={handleAdd}
          />
        </div>
      </div>

      <CartTable userAddCoin={userAddCoin} totalAmount={totalAmount} />
    </div>
  );
};

export default App;
