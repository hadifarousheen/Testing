import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useEffect, useState } from "react"
import productContext from "../utils/productContext"




const App=()=>{
    const[products,setProducts]=useState([]) 
    const[searchText,setSearchText]=useState("") 
    const[originalProducts,setOriginalProducts]=useState([])
    useEffect(()=>{
getData(); 
    },[])
const getData=async()=>{
     const data=await fetch("https://dummyjson.com/products");
    const dataJson=await data.json();
    setProducts(dataJson.products)
    setOriginalProducts(dataJson.products)
    // console.log(dataJson.products)
}
    return(
        <productContext.Provider value={{products,searchText,setSearchText,setProducts,originalProducts,setOriginalProducts}}>
        <div>
            <Header/>
            <Outlet/>
        </div>
        </productContext.Provider>
    )
}

export default App;