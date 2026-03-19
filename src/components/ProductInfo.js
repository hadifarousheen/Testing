import { useLocation } from "react-router-dom";

const ProductInfo = () => {
  const location = useLocation();
  const { product } = location.state;
  console.log(product)
  return (
    <div>
      <img src={product?.thumbnail} />
      <h1>{product?.title}</h1>
      <h2>{product?.brand}</h2>
      <h2>{product?.category}</h2>
      <p>{product?.description}</p>
      <h3>{product?.rating}</h3>
      <h3>{product?.price}</h3>
    </div>
  );
};
export default ProductInfo;
