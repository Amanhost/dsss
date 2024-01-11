// import { MdFirstPage, MdLastPage } from 'react-icons/md';
// const PageNumber = ({
//   pageIndex,
//   gotoPage,
//   canNextPage,
//   canPreviousPage,
//   previousPage,
//   pageOptions,
//   nextPage,
//   pageCount,
// }) => {
//   return (
//     <div className='d-flex align-items-center justify-content-end flex-wrap flex-row'>
//       <ul className='pagination'>
//         <li
//           className={`page-item ${!canPreviousPage ? `disabled` : ``}`}
//           onClick={() => gotoPage(0)}
//           disabled={!canPreviousPage}
//         >
//           <div className='page-link'>
//             <MdFirstPage />
//           </div>
//         </li>
//         <li
//           className={`page-item ${!canPreviousPage ? `disabled` : ``}`}
//           onClick={() => previousPage()}
//           disabled={!canPreviousPage}
//         >
//           <div className='page-link' onClick={() => previousPage()} disabled={!canPreviousPage}>
//             Previous
//           </div>
//         </li>
//         {pageOptions.map((num) => (
//           <li key={num} className={`page-item ${pageIndex === num ? 'active' : ``}`}>
//             <div className={`page-link`} onClick={() => gotoPage(num)}>
//               {num + 1}
//             </div>
//           </li>
//         ))}
//         <li
//           className={`page-item ${!canNextPage ? `disabled` : ``}`}
//           onClick={() => nextPage()}
//           disabled={!canNextPage}
//         >
//           <div className='page-link'>Next</div>
//         </li>
//         <li
//           className={`page-item ${!canNextPage ? `disabled` : ``}`}
//           onClick={() => gotoPage(pageCount - 1)}
//           disabled={!canNextPage}
//         >
//           <div className='page-link'>
//             <MdLastPage />
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default PageNumber;


import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import PageSize from './PageSize';

// Example items, to simulate fetching from another resources.

const PageNumber = ({
  gotoPage,
  pageOptions,
  TotalData,
  itemsPerPage,
}) => {
  const items = pageOptions;
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {

    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(TotalData / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };



  return (
    <div className=' d-flex justify-content-end direction-row pagination'>
      <ReactPaginate
        onPageChange={handlePageClick}
        onClick={(e) => gotoPage(e.selected)}
        pageCount={pageCount}
        itemsPerPage={PageSize}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>

  );
}
export default PageNumber;