import { useContext, useState } from "react";
import productContext from "../utils/productContext";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Header=()=>{
  const{products,setProducts,originalProducts}=useContext(productContext)
  const[login,setLogin]=useState("Login");
  // const[itemNumber,setItemNumber]=useState(0)
  const cartItems=useSelector((store)=>store.cart.items)
    return(<nav className="flex justify-between bg-amber-600 px-2 py-4 shadow-md">
<h1 className="text-2xl font-bold">Amaze</h1>
  <div>
    <Link to="/cart"><button className="text-xl font-bold mr-2">Cart-{cartItems?.length} Items</button></Link>
    <Link to="/contact"><button className="text-xl font-bold mr-2">Contact</button></Link>
      <Link to="/"> <button className="text-xl font-bold mr-2 " onClick={()=>{
          setProducts(originalProducts);
        }}>Get All Products</button></Link> 
    <button className="text-xl font-bold " onClick={()=>{
      setLogin(prev=>prev=="Login"?"Logout":"Login")
    }}>{login}</button>
  </div>
    </nav>)
}
export default Header;