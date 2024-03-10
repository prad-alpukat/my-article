import React from 'react'

export default function Pagination({ currentPage = 0, totalPage = 0, onPrev, onNext }) {
    return (
        <div className="flex justify-center w-full mt-6 join">
            <button
                className="join-item btn"
                disabled={currentPage > 1}
            >
                «
            </button>
            <button className="join-item btn">{currentPage}</button>
            <button
                className="join-item btn"
                disabled={currentPage < totalPage} >
                »
            </button>
        </div>
    )
}
