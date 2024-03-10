import React from 'react'
import CardPost from '../block/CardPost'
import Pagination from '../block/Pagination'

export default function SectionCatalog() {

    const posts = [
        {
            id: 1,
            title: "Posts 1",
            description: "Description 1"
        },
        {
            id: 2,
            title: "Posts 2",
            description: "Description 2"
        },
        {
            id: 3,
            title: "Posts 3",
            description: "Description 3"
        },
        {
            id: 4,
            title: "Posts 4",
            description: "Description 4"
        },
    ]

    return (
        <section className='container py-10'>
            {/* title */}
            <h3 className='mb-4 text-2xl font-bold sm:text-4xl text-primary'>Posts</h3>

            {/* posts */}
            <div className='grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-6 lg:grid-cols-4 md:grid-cols-3'>
                {
                    posts.map(post =>
                        <CardPost
                            key={post.id}
                            title={post.title}
                            description={post.description}
                        />)
                }
            </div>

            {/* pagination */}
            <Pagination />
        </section>
    )
}
