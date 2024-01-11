import React from 'react'
import './Table.css';
const TablePagination = (
  { previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    pageIndex,
    pageOptions,
  }
) => {
  return (
    <>
      <div className='d-flex gap-2 justify-content-end' >
        <button className='buttoncss' onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button className='paginationcount'>
          Page{' '}
          <strong>
            {pageIndex + 1}&nbsp; of &nbsp; {pageOptions?.length}
          </strong>{' '}
        </button>
        <button className='buttoncss' onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div >
    </>
  )
}

export default TablePagination;