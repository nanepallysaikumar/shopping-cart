import React from "react";

const CartContext = React.createContext({
  cartList: [],
  updateCart: () => {},
});

export { CartContext };
