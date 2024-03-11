import React from 'react'
import Input from './Input'
import FileInput from './FileInput'

export default function FormPost() {
    return (
        <form>
            {/* image featured */}
            <FileInput />

            {/* title */}
            <Input placeholder='title...' label='Title' />

            {/* content */}
            <div className='flex flex-col gap-2 mb-3'>
                <label className='label-text' htmlFor="content">Content:</label>
                <textarea className='textarea textarea-bordered' name="content" id="content" rows="10" placeholder='type content here...'></textarea>
            </div>

            {/* submit */}
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}
