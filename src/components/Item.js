import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Item=({product})=>{
    const dispatch=useDispatch();
    return(<div className="px-2 py-4">
        <img src={product?.thumbnail}/>
        <h1 className="flex justify-center text-xl font-semibold">{product?.title}</h1>
         <button className="border px-1 bg-amber-400 font-bold" onClick={()=>{
            dispatch(addItem(product))
         }}>Add + </button>
    </div>)
}

export default Item;