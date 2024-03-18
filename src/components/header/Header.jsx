// 'use client'
import { ThemeProvider } from "@/context/ThemeContext"
import Link from "next/link"
import Button from '../button/Button'
import {ThemeToggle} from '../DarkModelToggle/DarkModelToggle'

const navItems = [
    // {id: 1, label: 'Home', href: '/'},
    {id: 2, label: 'Blog', href: '/blog'},
    {id: 3, label: 'Contacts', href: '/contacts'},
    {id: 4, label: 'About', href: '/about'},
    {id: 5, label: 'Dashboard', href: '/dashboard'},
    {id: 6, label: 'Portfolio', href: '/portfolio'},
]

const Header = () => {
    return (
        <ThemeProvider>
             <header className='header'>
                <div className="logoWrap">
                    <Link href='/'>
                        <img src="/logo.png" alt="logo" className="logo"/>
                    </Link>
                </div>

                <ThemeToggle />
            
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