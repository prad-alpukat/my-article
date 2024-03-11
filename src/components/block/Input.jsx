import React from 'react'

export default function Input({ label = "label", type = "text", placeholder = "type here..." }) {
    return (
        <label className="form-control w-full mb-4">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input type={type} placeholder={placeholder} className="input input-bordered w-full" />
        </label>
    )
}
