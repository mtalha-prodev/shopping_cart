import "./css/navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidedrower from "./Sidedrower";
import { useSelector } from "react-redux";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);

  const carts = useSelector((state) => state.cart);
  const { cartItems } = carts;

  const getCountCart = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const sideBar__remove = () => {
    setSideBar(!sideBar);
  };

  return (
    <nav className="navbar__menu">
      <div className="navbar__logo">
        <h2>Shopping Cart</h2>
      </div>
      {sideBar ? (
        <div>
          <Sidedrower
            getCountCart={getCountCart}
            sideBar__remove={sideBar__remove}
          />
          <div
            className="over_layour"
            onClick={() => setSideBar(!sideBar)}
          ></div>
        </div>
      ) : null}

      <div className="navbar__hamburger" onClick={() => setSideBar(!sideBar)}>
        <i className="fas fa-bars"></i>
      </div>

      <ul className="navbar__link">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-cart-arrow-down"></i>
            <span>
              Cart
              <span className="cart__badge">{getCountCart()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
