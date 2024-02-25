import Link from "next/link"

const navItems = [
    {id: 1, label: 'Home', href: '/'},
    {id: 2, label: 'Blog', href: '/blog'},
    {id: 3, label: 'Contacts', href: '/contacts'},
    {id: 4, label: 'About', href: '/about'},
    {id: 5, label: 'Dashboard', href: '/dashboard'},
    {id: 6, label: 'Portfolio', href: '/portfolio'},
]

const Header = () => {
    return (
        <header className='header'>
            {/* <Link href='/'>Logo</Link> */}
            <nav>
                {navItems.map((link)=> (
                        <Link key={link.id} href={link.href} className='linkHeader'>
                            {link.label}
                        </Link>
                ))}
            </nav>
        </header>
    )
}

export {Header}