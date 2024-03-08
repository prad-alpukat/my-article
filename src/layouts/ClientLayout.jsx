import React from 'react'

export default function ClientLayout({ children }) {
    return (
        <>
            <nav>Navbar</nav>

            <main>
                {children}
            </main>

            <footer>Footer</footer>
        </>
    )
}
