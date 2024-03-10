import React from 'react'
import Footer from '../components/Footer'

export default function AdminLayout({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <nav>admin navbar</nav>

            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}
