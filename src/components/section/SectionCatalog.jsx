import { useEffect, useState } from 'react'
import CardPost from '../block/CardPost'
import Pagination from '../block/Pagination'
import { getPosts } from '../../utils'

export default function SectionCatalog() {
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)

    async function fetchData() {
        const data = await getPosts(currentPage)
        setPosts(data.posts)
        setTotalPage(data.total_page)
    }

    useEffect(() => {
        fetchData()
    }, [currentPage])

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
                            title={post.title.rendered}
                            description={post.excerpt.rendered}
                        />)
                }
            </div>

            {/* pagination */}
            <Pagination
                onPrev={() => setCurrentPage(currentPage - 1)}
                onNext={() => setCurrentPage(currentPage + 1)}
                totalPage={totalPage}
                currentPage={currentPage}
            />
        </section>
    )
}
