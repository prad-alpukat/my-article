import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ClientLayout({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}
