import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Products from "../components/product/Products";

import { getProducts as listProducts } from "../redux/action/productAction";

import "./css/home.css";

function HomePage() {
  // get value to raducer
  const getProducts = useSelector((state) => state.products);
  // DESTRUCTURE
  const { loading, products, error } = getProducts;
  // DISPATCH ACTION
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className=" home_screen container mt-2 mb-4">
      <div className="cart_prduct">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          error
        ) : (
          products.map((product) => (
            <Products
              key={product._id}
              productId={product._id}
              name={product.name}
              imageUrl={product.imageUrl}
              description={product.description}
              price={product.price}
              countInStock={product.countInStock}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
