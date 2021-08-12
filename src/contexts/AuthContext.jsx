import { createContext, useState } from "react";

import avatar from '../assets/avatar.svg'

export const AuthContext = createContext({})

export function AuthProvider({children}) {
    const [user, setUser] = useState({
        name: 'Tam Tran',
        avatar: avatar
    })

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
} 