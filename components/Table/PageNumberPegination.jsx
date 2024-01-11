import { MdFirstPage, MdLastPage } from 'react-icons/md';

const PageNumberPegination = ({
  pageIndex,
  gotoPage,
  canNextPage,
  canPreviousPage,
  previousPage,
  pageOptions,
  nextPage,
  pageCount,
  pageNum,
  AdminData,
  pageNumSet,
}) => {
  return (
    <div className="d-flex align-items-center justify-content-end flex-row">
      <ul className="pagination">
        <li
          className={`page-item ${!canPreviousPage ? `disabled` : ``}`}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <div className="page-link">
            <MdFirstPage />
          </div>
        </li>
        <li
          className={`page-item ${!canPreviousPage ? `disabled` : ``}`}
          onClick={() => {
            previousPage();
            pageNumSet(pageNum > 0 ? pageNum - 1 : 0);
          }}
          disabled={!canPreviousPage+1}
        >
          <div
            className="page-link"
            onClick={() => {
              previousPage();
              pageNumSet(pageNum > 0 ? pageNum - 1 : 0);
            }}
            disabled={!canPreviousPage+1}
          >
            Previous
          </div>
        </li>
        {/* {pageOptions.map((num) => ( */}
        <li key={pageNum} className={`page-item ${'active'}`}>
          <div className={`page-link`} onClick={() => gotoPage(pageNum)}>
            {pageNum + 1}
          </div>
        </li>
        {/* ))} */}
        <li
          className={`page-item ${!canNextPage ? `disabled` : ``}`}
          onClick={() => {
            nextPage();
            pageNumSet(AdminData === 0 ? pageNum : pageNum + 1);
          }}
          disabled={!canNextPage}
        >
          <div
            className="page-link"
            onClick={() => {
              nextPage();
              pageNumSet(AdminData === 0 ? pageNum : pageNum + 1);
            }}
          >
            Next
          </div>
        </li>
        <li
          className={`page-item ${!canNextPage ? `disabled` : ``}`}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <div className="page-link">
            <MdLastPage />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PageNumberPegination;
