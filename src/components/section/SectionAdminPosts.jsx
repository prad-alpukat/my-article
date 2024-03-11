import React from 'react'
import TablePosts from '../block/TablePosts'
import Pagination from '../block/Pagination'

export default function SectionAdminPosts() {
    return (
        <section className='container mt-10'>
            <h2 className='mb-3 text-2xl font-bold text-primary'>Posts:</h2>
            <TablePosts />
            <Pagination />
        </section>
    )
}
