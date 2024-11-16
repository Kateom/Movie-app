import React from 'react'
import "./Pagination.css"

const Pagination = ({pageNo, handelPrev, handelNext}) => {
  return (
    
    <div className='page'>
        <div className='arrow-left' onClick={handelPrev}><i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNo}</div>
        <div className='arrow-right' onClick={handelNext}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
    
  )
}

export default Pagination;