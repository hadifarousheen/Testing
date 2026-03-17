import { useContext } from "react";
import productContext from "../utils/productContext";
import Item from "./Item";

const Body=()=>{
    const{products}=useContext(productContext)
    console.log(products)
    return(<div>
        {products?.map((product)=>{
           return <Item product={product} key={product?.id}/>
        })}
    </div>)
}
export default Body;