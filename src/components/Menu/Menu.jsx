import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProductList } from "../Pages/Product/ProductList/ProductList";
import { CartList } from "../Pages/Cart/CartList/CartList";
import { CartContext } from "../../context/CartContext";
import menuicon from "../../images/menuicon.png";
import "./Menu.css";

const Menu = () => {
  const [cartList, updateCart] = useState([]);
  const value = { cartList, updateCart };
  return (
    <CartContext.Provider value={value}>
      <Router>
        <div>
          <nav>
            <img src={menuicon} height="70" />
            <Link to="/">Books - Route</Link>
            <Link to="/cart">Cart - Route</Link>
          </nav>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartList />} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
};

export { Menu };
