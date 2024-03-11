import React from 'react'

export default function SectionPost() {
    return (
        <section className='container max-w-screen-sm'>
            {/* image featured */}
            <img className='w-full mb-3 aspect-video' src="https://placehold.co/400x200" alt="featured image" />

            {/* title */}
            <h1 className='mb-6 text-2xl font-bold text-center'>Title Post</h1>

            {/* content */}
            <article className='prose'>
                <h3>hello world</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, excepturi nulla illo porro distinctio sit nihil cupiditate eius obcaecati natus officia nisi tenetur fugiat. Temporibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, excepturi nulla illo porro distinctio sit nihil cupiditate eius obcaecati natus officia nisi tenetur fugiat. Temporibus.</p>
            </article>
        </section>
    )
}
