import { useContext } from "react";
import productContext from "../utils/productContext";
import Item from "./Item";
import Search from "./Search";
import { Link } from "react-router-dom";

const Body=()=>{
    const{products}=useContext(productContext)
    console.log(products)
    return(<div className=" bg-amber-200">
        <div className="flex justify-center">
            <Search/>
        </div>
        <div className="flex flex-wrap justify-center">{products?.map((product)=>{
           return <Link to={"/product/"+product?.id} key={product?.id} state={{product:product}}><Item product={product} key={product?.id}/></Link>
        })}</div>
        
    </div>)
}
export default Body;