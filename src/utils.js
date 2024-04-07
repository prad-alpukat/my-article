const BASE_URL = "https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json"
const AUTHOR_ID = 8

async function getPosts(page = 1) {
    try {
        const response = await fetch(`
            ${BASE_URL}/wp/v2/posts?
                embed=true&
                author=${AUTHOR_ID}&
                page=${page}
        `)
        const posts = await response.json()
        const total_page = response.headers.get("X-WP-TotalPages")
        return { posts, total_page }
    } catch (err) {
        console.error(err)
    }
}

export { getPosts }