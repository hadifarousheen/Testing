import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    return(
        <div>
            <h1>Cart</h1>
            <button onClick={()=>{
                dispatch(clearCart());
            }}>Clear Cart</button>
            {cartItems?.map((item)=>{ return <div className="w-1/2 " key={item?.id}><Item product={item} key={item?.id}/>
            <button className="bg-red-500 " onClick={()=>{
            dispatch(removeItem(item?.id))
            }}>Remove -</button>
            </div> 
        })}
        </div>
    )
}
export default Cart;