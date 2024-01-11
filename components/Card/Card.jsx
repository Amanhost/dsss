import './Card.css';

const Card = ({ id, type, value, active, icon }) => {
  return (
    <div className={`card shadow-sm ${active === id ? 'bg-primary' : 'bg-white'}  `}>
      <div className={`card-header text-center ${active === id ? 'bg-white' : 'bg-primary'} `}>
        <h6 className={` ${active === id ? 'text-primary' : 'text-white'}`}>{type}</h6>
      </div>
      <div className='card-body text-end'>
        <div className='value'>
          <div className='card-icon'>
            <img src={icon} alt='icon' />
          </div>
          <h1 className={` ${active === id ? 'text-white' : 'text-primary'} fw-bold`}>{value}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;