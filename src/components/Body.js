import { useContext } from "react";
import productContext from "../utils/productContext";
import Item from "./Item";
import Search from "./Search";

const Body=()=>{
    const{products}=useContext(productContext)
    console.log(products)
    return(<div className=" bg-amber-200">
        <div className="flex justify-center">
            <Search/>
        </div>
        <div className="flex flex-wrap justify-center">{products?.map((product)=>{
           return <Item product={product} key={product?.id}/>
        })}</div>
        
    </div>)
}
export default Body;