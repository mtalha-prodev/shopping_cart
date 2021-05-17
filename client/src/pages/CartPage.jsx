import CartItem from "../components/cardItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../redux/action/cartAction";
import "./css/cart.css";
import { Link } from "react-router-dom";

function CartPage() {
  const carts = useSelector((state) => state.cart);
  const { cartItems } = carts;

  const dispatch = useDispatch();

  const qtyHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeCartHandler = (id) => {
    dispatch(removeToCart(id));
  };

  // total item to purchese
  const getCountCart = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getSubTotal = () => {
    return cartItems.reduce(
      (price, item) => Number(item.price * item.qty) + price,
      0
    );
  };

  // useEffect(() => {}, []);
  return (
    <div className=" container  card__item">
      <div className="row">
        <div className="col-xl-9 col-md-8 ">
          {cartItems.length === 0 ? (
            <div>
              <h3>cart is empty !</h3>
              <Link to="/">Go Back</Link>
            </div>
          ) : (
            /* <CartItem /> */
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyHandler={qtyHandler}
                removeCartHandler={removeCartHandler}
              />
            ))
          )}
        </div>
        <div className="col-xl-3 col-md-4 info__right ">
          <div className="cart__checkout">
            <h3 className="total__items">
              SubTotal <span>({getCountCart()})</span> items
            </h3>
            <p className="total__price">${getSubTotal().toFixed(2)}</p>
            <div className="d-grid gap-2 col-12">
              <button className="btn btn-default  ">Proceed To CheckOut</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
