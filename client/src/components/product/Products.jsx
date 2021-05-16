import React from "react";
import { Link } from "react-router-dom";

function Products({ name, productId, price, description, imageUrl }) {
  return (
    <div>
      <div
        className="card mt-3 mx-1 h-100"
        style={{ width: "15rem", height: "20rem" }}
      >
        <img
          src={imageUrl}
          className="card-img-top d-block w-100 "
          alt={name}
        />
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description.substring(0, 100)}...</p>
          <p className="card_price">
            Price: <span>{price}RS </span>
          </p>
          <Link
            to={`product/${productId}`}
            className="btn btn-default d-block mt-3"
          >
            Cart View
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Products;
