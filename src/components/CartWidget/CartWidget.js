import React, { useContext } from "react";
import cartIcon from "./assets/logo_carro_compra.png";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart" className="CartWidget" style={{ textDecoration: "none" }}>
      <div className="CartWidget__icon">
        <img src={cartIcon} alt="cart-widget" />
      </div>
      <div className="CartWidget__quantity">{totalQuantity}</div>
    </Link>
  );
};

export default CartWidget;
