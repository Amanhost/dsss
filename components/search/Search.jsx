

import { RiSearchLine } from 'react-icons/ri';
const Search=({place,searchTerm})=>{
    return(
    <div className='d-flex w-25 rounded me-5'>
    <input
      type='search'
      className='form-control search-input rounded-5'
      id='search'
      placeholder={place}
      value={searchTerm}
      variant="contained"
    />
    <span className='searchicon text-primary'>
      <RiSearchLine />
    </span>
        </div>
    )
}

export default Search;