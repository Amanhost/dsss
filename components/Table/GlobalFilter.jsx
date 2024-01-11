import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { useAsyncDebounce } from 'react-table';
import './Table.css';

export const GlobalFilter = ({ flag,filter, setFilter,setSearchApp,searchApp}) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined); 
  }, 300);
  
  return (
    <div className="global_filter">
      <div className='d-inline-flex rounded mb-2 ' style={{width:"30rem"}}>
        <input
          type='search'
          className='form-control border-0 bg-white shadow-sm search-input rounded-5'
          id='search'
          placeholder='Application number or name'
          value={value || ''}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
        />

                <span className='searchicon text-secondary'>
                    <RiSearchLine />  
                
                </span>
                  {flag &&(<>
               
                <button className=" btn btn-primary   rounded rounded-5 fw-bold " 
                 onClick={() => {
                
                  setSearchApp(value||undefined)
                }}
                >Search</button>
                <button style={{marginLeft:"4px"}} className="btn btn-primary   rounded rounded-5 fw-bold "
                 onClick={() => {
                
                  setSearchApp("")
                }}
                >Clear</button> &nbsp;&nbsp;&nbsp;
              { searchApp&&<p className="SearchName" style={{marginTop: "3px", marginBottom: "6px"}}>{searchApp}</p>}

                </>)}

            </div>

        </div>
  );
};
