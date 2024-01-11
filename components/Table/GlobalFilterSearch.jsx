import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { useAsyncDebounce } from 'react-table';
import './Table.css';

export const GlobalFilterSearch = ({ filter, setFilter, setValue1 }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
    setValue1(value || undefined)
  }, 300);

  return (
    <div className="global_filter">
      <div className='d-inline-flex rounded mb-2 w-25'>
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
      </div>
    </div>
  );
};
