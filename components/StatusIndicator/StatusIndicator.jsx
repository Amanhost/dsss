import './StatusIndicator.css';

const STYLES = [
  'default',
  'success',
  'failure',
  'revert',
  'orange',
  'blue',
  'pending',
  'suggested_edit',
  'approved',
  'resolved',
  'WIP',
  'send_to_cm',
  'send_to_rcu',
  'send_to_audit',
  'RCU'
];

const SIZES = ['lg', 'md', 'sm'];



const StatusIndicator = ({msg,children, onClick, status, size,dept }) => {
  const indicatorStyle = STYLES.includes(status) ? status : STYLES[0];
  const indicatorSize = SIZES.includes(size) ? size : SIZES[0];
  return (
<>
    <span className={`${indicatorStyle} ${indicatorSize} fw-bold`} onClick={onClick}>
    {dept}{children}      
    </span>   
    </>
  );
};

export default StatusIndicator;
