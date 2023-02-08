import React, { useState, useContext } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { CartContext } from "../../../../context/CartContext";
import data from "../../../../mockdata/data.json";
import "./ProductList.css";

const ProductList = () => {
  const { books } = data;
  const { cartList, updateCart } = useContext(CartContext);
  const [animate, setAnimate] = useState(false);
  const [cartPosition, setCartPosition] = useState({});

  const handleCart = (e, data) => {
    if (!cartList.some(el => el.id === data.id)) {
      cartList.push(data);
      updateCart(cartList);
      setCartPosition({ x: e.clientX, y: e.clientY });
      setAnimate(true);
    }
  };

  const animationEnd = () => {
    setAnimate(false);
  };

  return (
    <div className="products">
      {books.map((item) => (
        <ProductCard
          {...item}
          key={item.id}
          handleCart={handleCart}
          animationEnd={animationEnd}
          cartPosition={cartPosition}
          animate={animate}
        />
      ))}
    </div>
  );
};

export { ProductList };
