import "./cartItem.css";
import { Link } from "react-router-dom";

function CartItem({ item, qtyHandler, removeCartHandler }) {
  return (
    <div className="cart__item row ">
      <div className="cart__img col-xl-3 col-md-3 col-sm-3 col-4 offset-xl-0 offset-md-0 offset-sm-0 offset-5 ">
        <img src={item.imageUrl} alt="cart_item" className="d-block" />
      </div>
      <div className="col-xl-9 col-md-9 col-sm-9 col-12 offset-xl-0 offset-md-0 offset-sm-0 items ">
        <Link to={`/product/${11}`} className="item__name">
          <p>{item.name}</p>
        </Link>
        <div className="item__price">${item.price}</div>
        <select
          className="cout__item"
          value={item.qty}
          onChange={(e) => qtyHandler(item.product, e.target.value)}
        >
          {[...Array(item.countInStock).keys()].map((stock) => (
            <option key={stock + 1} value={stock + 1}>
              {stock + 1}
            </option>
          ))}
        </select>

        <button
          className="btn btn-defualt del__item"
          onClick={() => removeCartHandler(item.product)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
