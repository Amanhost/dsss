import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import './Table.css';

const Table = ({ getTableProps, headerGroups, getTableBodyProps, page, prepareRow }) => {
  return (
    <table {...getTableProps()}className='table shadow-sm rounded'>
      <thead className='thead'>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className='tr'>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} className='th'>
                <div className='d-flex justify-content-center gap-3'>
                  <div>{column.render('Header')} </div>
                  <div {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaSortUp />
                      ) : (
                        <FaSortDown />
                      )
                    ) : column.canSort ? (
                      <FaSort color='#f6f6f647' />
                    ) : null}
                  </div>{' '}
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className='tbody'>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className='tr'>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} className='td '>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
