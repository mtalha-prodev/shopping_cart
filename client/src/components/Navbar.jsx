import "./css/navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidedrower from "./Sidedrower";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {}, []);

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
          <Sidedrower sideBar__remove={sideBar__remove} />
          <div
            className="over_layour"
            onClick={() => setSideBar(!sideBar)}
          ></div>
        </div>
      ) : null}

      <div className="navbar__hamburger" onClick={() => setSideBar(!sideBar)}>
        <i class="fas fa-bars"></i>
      </div>

      <ul className="navbar__link">
        <li>
          <Link to="/cart" className="cart__link">
            <i class="fas fa-cart-arrow-down"></i>
            <span>
              Cart
              <span className="cart__badge">0</span>
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
