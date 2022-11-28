// create a  context 
// provider
// consumer=useContex
import { createContext, useEffect } from "react"
import axios from "axios"

const AppContext = createContext()
const API="https://api.pujakaitem.com/api/products"

const AppProvider = ({ children }) => {

    const getProducts=async(url)=>{
        const res=await axios.get(url);
        const products=await res.data
        console.log(products)


    }

    useEffect(() => {
        getProducts(API)

    }, [])

    return (
        <AppContext.Provider value={{ myName: "Pravin Dhonde" }}>
            {children}
        </AppContext.Provider>
    )

}

export { AppProvider, AppContext }