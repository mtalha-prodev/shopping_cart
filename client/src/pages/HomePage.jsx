import Cart from "../components/product/Cart";
import "./css/home.css";

function HomePage() {
  return (
    <div className=" home_screen container mt-2 mb-4">
      <div className="cart_prduct">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  );
}

export default HomePage;
