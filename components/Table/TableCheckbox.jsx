import { useEffect, forwardRef, useRef } from 'react';

export const TableCheckbox = forwardRef(({ indeterminate, hasDisable, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input
        type='checkbox'
        // disabled={hasDisable}
        className='form-check-input'
        ref={resolvedRef}
        {...rest}
      />
    </>
  );
});
