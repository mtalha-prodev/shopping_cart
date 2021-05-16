import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/product.css";
import { getProductDetail } from "../redux/action/productAction";
import { addToCart } from "../redux/action/cartAction";

function ProductPage({ match, history }) {
  const [qty, setQty] = useState(1);
  const ProductDetail = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();
  const { loading, product, error } = ProductDetail;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetail(match.params.id));
    }
  }, [dispatch, match, product]);

  const addCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
  };

  return (
    <div className="container mt-4">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        { error }
      ) : (
        <>
          <div className="row">
            <div className="col-xl-6 col-md-8 offset-xl-0 offset-md-2  mb-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="d-block"
              />
            </div>
            <div className="col-xl-3 col-md-4 offset-xl-0 offset-md-2 mb-4 ">
              <div className="card-body ">
                <p className="card-title">product 1</p>
                <p className="price">
                  Price: <span>${product.price}</span>
                </p>
                <p className="card-text">
                  <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
                  {product.description.substring(0, 200)}...
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-4  ">
              <div className="card-body">
                <div className="row card-title m-0 ">
                  <div className="col-6">price:</div>
                  <div className="col-6">
                    <span className="qty__price">${product.price}</span>
                  </div>
                </div>
                <div className="row card-title m-0 ">
                  <div className="col-6">Status:</div>
                  <div className="col-6">
                    {product.countInStock > 0 ? "In Stock" : "off Stock"}
                  </div>
                </div>
                <div className="row card-title m-0 ">
                  <div className="col-6">Qty</div>
                  <div className="col-6">
                    <select
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((stock) => (
                        <option key={stock + 1} value={stock + 1}>
                          {stock + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-12 d-grid gap-2">
                  <button onClick={addCartHandler} className="btn btn-default ">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductPage;
