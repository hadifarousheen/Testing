import { useContext } from "react";
import productContext from "../utils/productContext";

const Header=()=>{
  const{products,setProducts,originalProducts}=useContext(productContext)
    return(<nav className="flex justify-between bg-amber-600 px-2 py-4 shadow-md">
<h1 className="text-2xl font-bold">Amaze</h1>
  <div>
        <button className="text-xl font-bold mr-2 " onClick={()=>{
          setProducts(originalProducts);
        }}>Get All Products</button>
    <button className="text-xl font-bold ">Login</button>
  </div>
    </nav>)
}
export default Header;