import React from 'react'
import NavbarAdmin from '../components/section/NavbarAdmin'
import Footer from '../components/section/Footer'

export default function AdminLayout({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavbarAdmin />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}
