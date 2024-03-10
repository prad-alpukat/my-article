import React from 'react'

export default function CardPost({ image = "https://placehold.co/400x200", title = "title", description = "description" }) {
    return (
        <div className="shadow-xl card bg-base-100">
            <figure>
                <img className='object-cover object-center w-full aspect-video' src={image} alt={title} />
            </figure>
            <div className="p-4 card-body">
                <h2 className="text-sm card-title sm:text-lg">{title}</h2>
                <p className='text-xs line-clamp-2 sm:text-base'>{description}</p>
                <div className="justify-end card-actions">
                    <button className="btn sm:btn-sm btn-xs btn-primary">Read Me</button>
                </div>
            </div>
        </div>
    )
}
