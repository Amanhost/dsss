import { MdFirstPage, MdLastPage } from 'react-icons/md'
const AdminPageNumberPagination = ({
  gotoPage,
  canNextPage,
  canPreviousPage,
  previousPage,
  nextPage,
  pageCount,
  pageNum,
  AdminData,
  pageNumSet,
  status
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
            pageNumSet(pageNum > 1 ? pageNum - 1 : 1);
          }}
          disabled={!canPreviousPage}
        >
          <div
            className="page-link"
            onClick={() => {
              previousPage();
              pageNumSet(pageNum > 1 ? pageNum - 1 : 1);
            }}
            disabled={pageNum <= 1}
          >
            Previous
          </div>
        </li>
        {status === "loading" ?
          <button class="btn btn-primary" type="button" disabled style={{ height: "30px", marginTop: "6px" }}>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span class="sr-only">Loading...</span>
          </button> :
          <li key={pageNum} className={`page-item ${'active'}`}>
            <div className="btn btn-outline-primary" onClick={() => gotoPage(pageNum)}>
              {pageNum}
            </div>
          </li>}

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

export default AdminPageNumberPagination;