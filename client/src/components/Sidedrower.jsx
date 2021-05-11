import "./css/sidedrower.css";
import { Link } from "react-router-dom";

function Sidedrower() {
  return (
    <div>
      <ul className="side__bar">
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
    </div>
  );
}

export default Sidedrower;
