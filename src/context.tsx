import { useState , createContext } from "react"
export const DikrContext : any = createContext(null)


function AdkarContextProvider ({children} : any){
    const [i , setI] = useState<number>(0)
    const contextValue = { i , setI}
    return <DikrContext.Provider value = {contextValue}>
        {children}
    </DikrContext.Provider>
}

export default AdkarContextProvider