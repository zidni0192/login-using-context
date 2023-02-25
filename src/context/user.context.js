import {createContext, useCallback, useState} from "react";

export const UserContext = createContext({})

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const handleSetUser = useCallback((obj) => {
        setUser({...user, ...(obj || {})})
    }, [user])
    return (
        <UserContext.Provider value={{user, setUser: handleSetUser}}>
            {children}
        </UserContext.Provider>
    )
}
