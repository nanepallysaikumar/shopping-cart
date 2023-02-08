import React, { useContext } from "react";
import { CartCard } from "../CartCard/CartCard";
import { CartContext } from "../../../../context/CartContext";
import "./CartList.css";

const CartList = () => {
  const { cartList, updateCart } = useContext(CartContext);

  const removeProduct = (data) => {
    const updatedCartList = cartList.filter((item) => item.id !== data.id);
    updateCart(updatedCartList);
  };

  return (
    <div className="cart-list">
      <section className="cart-section">
        {cartList.length > 0 ? (
          cartList.map((item) => {
            return (
              <CartCard {...item} key={item.id} removeProduct={removeProduct} />
            );
          })
        ) : (
          <p className="warning-msg">No Products Added to the Cart.Please Add.</p>
        )}
      </section>
    </div>
  );
};

export { CartList };
