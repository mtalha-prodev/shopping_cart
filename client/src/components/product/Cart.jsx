import React from "react";

function Cart() {
  return (
    <div>
      <div
        className="card mt-3 mx-1"
        style={{ width: "15rem", height: "20rem" }}
      >
        <img
          src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
          className="card-img-top"
          alt="product image"
        />
        <div className="card-body ">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="card_price">
            Price: <span>2530RS </span>
          </p>
          <a href="#" className="btn btn-default d-block mt-3">
            Add Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
