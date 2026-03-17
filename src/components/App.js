import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useEffect } from "react"

const App=()=>{
    useEffect(()=>{
        const data=fetch()
    },[])
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default App;