import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket, fetchPosts } from "../store/productsSlice";

const Products = () => {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  const handleAddToBasket = (productId) => {
    dispatch(addToBasket({ productId }));
  };

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])


  return (
    <div>
      <h1>Product Names:</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            <button onClick={() => handleAddToBasket(product.id)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
