import "./NoData.css"
const NoData = ({message }) => { 
  return (
    <>
      <div className='no-data-found'>
        {message}
      </div>
    </>
  )
}

export default NoData
