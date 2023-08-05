import Link from "next/link"

const navItems = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'Server Fetching',
        path: '/server',
    },
    {
        label: 'Server Fetching With Library',
        path: '/server-with-lib',
    },
    {
        label: 'Client Fetching',
        path: '/client-fetching',
    },
    {
        label: 'Best Practices',
        path: '/best-practices',
    },
    {
        label: 'Example',
        path: '/example',
    },
]

const ulStyles = {
    listStyleType: 'none',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    width: '100vw',
    justifyContent: 'space-evenly'
}

export default function NavBar(){
    return (
        <ul style={ulStyles}>
            {
                navItems.map((item) => {
                    return (
                        <li key={item.label}>
                            <Link href={item.path}>
                                {item.label}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}