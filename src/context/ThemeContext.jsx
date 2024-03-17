// 'use client'

// import { useState } from "react"
// import { createContext } from "react"

// export const ThemeContext = createContext()

// export const ThemeProvider = ({children}) => {
//     const [mode, setMode] = useState('moon')
//     // const toggle = () => setMode(prev => prev === 'moon' ? 'sun' : 'moon')
//     useEffect(() => {
//         const savedTheme = localStorage.getItem('theme');
//         if (savedTheme) {
//           setTheme(savedTheme);
//         }
//       }, []);

//     return(
//         <ThemeContext.Provider value={{toggle, mode}}>
//             <div className={`theme ${mode}`}>{children}</div>
//         </ThemeContext.Provider>
//     )
// }