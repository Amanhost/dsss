import { Dropdown } from 'react-bootstrap';
import { useEffect } from 'react';

const PageSize = ({ setPageSize, pageSize, setPageSize1, pageSize1, setSearchApp }) => {

  // useEffect(()=>{
  //  localStorage.setItem("pageSize",pageSize)
  // },[pageSize]);

  return (
    <div>
      <div className=" d-flex">
        <Dropdown>
          <Dropdown.Toggle
            style={{ padding: '10px' }}
            className="btn btn-primary   rounded-5 fw-bold"
            variant="primary"
            id="dropdown-basic"
          >
            Select Rows-{pageSize}
          </Dropdown.Toggle>

          <Dropdown.Menu>



            <Dropdown.Item
              onClick={() => {
                setPageSize(5);
                // setPageSize1(5);
              }}
            >
              5
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setPageSize(10);
                // setPageSize1(10);
              }}
            >
              10
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setPageSize(20);
                // setPageSize1(20);
              }}
            >
              20
            </Dropdown.Item>

            <Dropdown.Item
              onClick={() => {
                setPageSize(30);
                // setPageSize1(30);
              }}
            >
              30
            </Dropdown.Item>

            <Dropdown.Item
              onClick={() => {
                setPageSize(40);
                // setPageSize1(40);
              }}
            >
              40
            </Dropdown.Item>

            <Dropdown.Item
              onClick={() => {
                setPageSize(100);
                // setPageSize1(5);
              }}
            >
              100
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setPageSize(200);
                // setPageSize1(5);
              }}
            >
              200
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setPageSize(300);
                // setPageSize1(5);
              }}
            >
              300
            </Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
        {/* <button
                      // style={{ marginLeft:"11rem",marginTop:'1rem' }}
                      className=" btn btn-primary rounded-5"
                      onClick={() => setDialogOpen(true)}
                      disabled={newDepartment === '' ? true : false}
                    >
                      Change Role
                    </button> */}
      </div>

      {/* <div className='d-flex justify-content-between align-items-center flex-row'>

        <select
          name='entries'
          id='entries'
          className='form-select'
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          style={{ width: '70px' }}
        >
          {[5, 10, 25, 200].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>{' '}
      </div> */}
    </div>
  );
};

export default PageSize;
