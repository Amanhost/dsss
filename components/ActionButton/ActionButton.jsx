import { useRef } from 'react';
import './ActionButton.css';

export const ActionItem = ({ title, onClick, disabled }) => {
  return (
    <div className={`action-item p-2 ${disabled ? 'action-item-disabled' : ''}`} type='button' onClick={onClick}>
      {title}
    </div>
  );
};

const ActionsButton = ({ children, actionToggle, setActionToggle }) => {
  const ref = useRef();
  const handleClick = () => {
    setActionToggle(!actionToggle);
    document.addEventListener('click', handleClickOutside);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setActionToggle(false);
    }
    document.removeEventListener('mousedown', handleClickOutside);
  };
  return (
    <div className='action-container' ref={ref}>
      <button className='action-btn' onClick={handleClick}>
        Actions
      </button>
      {actionToggle && <div className='action-menu'>{children}</div>}
    </div>
  );
};

export default ActionsButton;