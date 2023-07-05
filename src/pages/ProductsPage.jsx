import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket } from "../store/productsSlice";

const Products = () => {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addToBasket());
  };

  return (
    <div>
      <h1>Product Names:</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={handleAddToBasket}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
