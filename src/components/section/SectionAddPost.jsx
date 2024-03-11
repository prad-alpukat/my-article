import React from 'react'
import FormPost from '../block/FormPost'

export default function SectionAddPost() {
    return (
        <section className='container max-w-screen-sm my-10'>
            <h1 className='text-2xl font-bold text-primary'>Create Post</h1>
            <FormPost />
        </section>
    )
}
