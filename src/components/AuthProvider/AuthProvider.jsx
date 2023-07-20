"use client"

import { SessionProvider } from "next-auth/react"
import react from "react"

const AuthProvider = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default AuthProvider