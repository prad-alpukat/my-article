import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TablePosts() {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>
                            <p className='w-40 line-clamp-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum eveniet omnis repudiandae ex optio, possimus sapiente consequuntur quae quos.</p>
                        </td>
                        <td>
                            <div className='overflow-hidden w-72 line-clamp-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto corporis alias nam vel repellendus voluptates sapiente quibusdam consectetur at nemo iusto iure, voluptas, minima natus.
                            </div>
                        </td>
                        <td>
                            <div className='flex gap-3'>
                                <NavLink to="/admin/edit-post/12" className='btn btn-sm btn-success'>Edit</NavLink>
                                <button className='btn btn-sm btn-error btn-outline'>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
