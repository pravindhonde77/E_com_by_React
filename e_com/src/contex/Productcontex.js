// create a  context 
// provider
// consumer=useContex
import { createContext } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{myName:"Pravin Dhonde"}}>
            {children}
        </AppContext.Provider>
    )

}

export { AppProvider,AppContext  }