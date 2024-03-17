'use client'

import { useState } from "react"
import { createContext } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState('moon')
    const toggle = () => setMode(prev => prev === 'moon' ? 'sun' : 'moon')

    return(
        <ThemeContext.Provider value={{toggle, mode}}>
            <div>children</div>
        </ThemeContext.Provider>
    )
}