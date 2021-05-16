import "./cartItem.css";
import { Link } from "react-router-dom";

function CartItem() {
  return (
    <div className="cart__item row ">
      <div className="cart__img col-xl-3 col-md-3 col-sm-3 col-4 offset-xl-0 offset-md-0 offset-sm-0 offset-5 ">
        <img
          src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
          alt="cart_item"
          className="d-block"
        />
      </div>
      <div className="col-xl-9 col-md-9 col-sm-9 col-12 offset-xl-0 offset-md-0 offset-sm-0 items ">
        <Link to={`/product/${11}`} className="item__name">
          <p>Product 1</p>
        </Link>
        <div className="item__price">250RS</div>
        <select className="cout__item">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <button className="btn btn-defualt del__item">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
