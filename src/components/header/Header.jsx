 'use client'

import { ThemeProvider } from "@/context/ThemeContext"
import Link from "next/link"
import Button from '../button/Button'
import {ThemeToggle} from '../DarkModelToggle/DarkModelToggle'
import { useTheme } from "@/context/ThemeContext"

const navItems = [
    // {id: 1, label: 'Home', href: '/'},
    {id: 2, label: 'Blog', href: '/blog'},
    {id: 3, label: 'Contacts', href: '/contacts'},
    {id: 4, label: 'About', href: '/about'},
    {id: 5, label: 'Dashboard', href: '/dashboard'},
    {id: 6, label: 'Portfolio', href: '/portfolio'},
]




const Header = () => {

    const { toggleTheme } = useTheme();

    const handleToggleTheme = () => {
    toggleTheme();
    }

    return (
        <ThemeProvider>
             <header className='header'>
                <div className="logoWrap">
                    <Link href='/'>
                        <img src="/logo.png" alt="logo" className="logo"/>
                    </Link>
                </div>

                <label className='toggle-label theme' >
                        <input type='checkbox' onClick={toggleTheme}/>
                        <span className='back'>
                        <span className='toggle'></span>
                        <span className='label on'>SUN</span>
                        <span className='label off'>MOON</span>  
                    </span>
                </label>

                {/* <ThemeToggle /> */}
                {/* <button onClick={handleToggleTheme} className='btn'>fire</button> */}
            
                <nav>
                    {navItems.map((link)=> (
                            <Link key={link.id} href={link.href} className='linkHeader'>
                                {link.label}
                            </Link>
                    ))}
                </nav>
                <Button text='Logout' url='#'/>
            </header>
        </ThemeProvider>
       
    )
}

export {Header}