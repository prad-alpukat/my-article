import React from 'react'

export default function FileInput({ label = "Pick a file", value, onChange }) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input type="file" value={value} onChange={onChange} className="file-input file-input-bordered w-full" />
        </label>
    )
}
