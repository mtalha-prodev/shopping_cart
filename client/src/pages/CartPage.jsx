import CartItem from "../components/cardItem/CartItem";
import "./css/cart.css";

function CartPage() {
  return (
    <div className=" container  card__item">
      <div className="row">
        <div className="col-xl-9 col-md-8 ">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="col-xl-3 col-md-4 info__right ">
          <div className="cart__checkout">
            <h3 className="total__items">
              SubTotal <span>(2)</span> items
            </h3>
            <p className="total__price">23500RS</p>
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
