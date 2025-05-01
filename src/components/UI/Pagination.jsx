import React from 'react'

function Pagination({currentPage, totalPages, onPageChange}) {
  return (
    <div className='flex justify-center items-center gap-4 space-x-2 my-10'>
        <button className='px-4 py-2 rounded-md disabled:bg-gray-300 disabled:text-gray-500 transition-colors active:bg-red-700 disabled:hover:bg-gray-300 hover:bg-red-600 text-white bg-red-500' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
        <span>{currentPage}</span>
        <button className='px-4 py-2 rounded-md disabled:bg-gray-300 disabled:text-gray-500 transition-colors active:bg-red-700 disabled:hover:bg-gray-300 hover:bg-red-600 text-white bg-red-500' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
    </div>
  )
}

export default Pagination