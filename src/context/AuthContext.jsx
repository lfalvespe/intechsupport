import { useState } from "react"

import { createContext } from "react"


export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [agent, setAgent] = useState('')

    const [editing, setEditing] = useState(false)

    return (
        <AuthContext.Provider value={{ agent, setAgent, editing, setEditing }}>
            {children}
        </AuthContext.Provider>
    )
}