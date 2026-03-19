import { useContext } from "react";
import productContext from "../utils/productContext";

const Search=()=>{
    const{searchText,setSearchText,products,setProducts,originalProducts}=useContext(productContext)
    return(<div className="w-1/2 mt-4">
        <input data-testid="searchInput" className="w-1/2 py-1 mr-2 border rounded-lg" type="text" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
        }} />
        <button data-testid="searchBtn" className="border px-2 py-1 rounded-lg font-bold" onClick={()=>{
            const filterdProduct=originalProducts?.filter((product)=>product?.title?.toLowerCase().includes(searchText.toLowerCase()));
            setProducts(filterdProduct)
        }}>Search</button>
    </div>)
}

export default Search;