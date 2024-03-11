import React from 'react'

export default function NavbarAdmin() {
    return (
        <div className="bg-white shadow navbar">
            <div className="container flex-col sm:flex-row">
                <div className="flex-1">
                    <a className="text-xl btn btn-ghost">My Article - Admin</a>
                </div>
                <div className="flex-none space-x-4">

                    {/* input search */}
                    <div className="join">
                        <input className="w-full input input-sm sm:w-36 input-bordered join-item" placeholder="pencarian..." />
                        <button className="rounded-r-lg btn btn-sm join-item">Cari</button>
                    </div>

                    {/* logout */}
                    <button className='btn btn-sm btn-error'>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}
