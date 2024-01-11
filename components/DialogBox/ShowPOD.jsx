import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import '../../pages/ApproverScreen/Button/ButtonModal.css';
import Lightbox from 'react-awesome-lightbox';
const ShowPOD = ({
 dialogOpen,
 handleClose,
 data,
 propertyPapers,
 url1,
}) => {
 //Download func goes here
 const [zoomView, setZoomView] = useState(false);
 return (
  <>
   <Modal
    size="md"
    style={{boxShadow: "2px 10px 14px -1px #888884"}}
    show={dialogOpen}
    onHide={handleClose}
    aria-labelledby="contained-modal-title-vcenter"
    centered
   >
    <Modal.Header closeButton id="podHeader" >
    <Modal.Title>
    <h3 id="trackingDetailks">Tracking Details</h3>
    </Modal.Title>
   </Modal.Header >
    <Modal.Body className="modal-content" id="podFooter">
     {
      <div className="d-flex flex-column justify-content-center" id="modalbody">
        {zoomView && (
         <Lightbox
          image={url1}
          onClose={() => {
           setZoomView(false);
          }}
          title="POD Image"
         />
        )}

     <div className="d-flex gap-5" >
        {' '}
        <strong >POD Image:-</strong>
        <img
         src={url1}
         id="images"
         style={{ height: '10rem', width: '10rem' }}
         onClick={() => {
          setZoomView(true);
         }}
        />
       </div>
       <br></br>
       <div className="d-flex gap-5" >
        <strong id="labeldata">Tracking No:-</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p>{data?.trackingNumber}</p>
       </div>
       <div className="d-flex gap-5" >
        <strong id="labeldata">Vetting Status:-</strong>&nbsp;&nbsp;&nbsp;<p>{data?.vettingStatus?.toString()==="true"?"Yes":"No"}</p>
       </div>
       <div className="d-flex gap-5">
        <strong id="labeldata">RCU Status:-</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p>{data?.rcuState?.toString()==="true"?"Yes":"No"}</p>
       </div>
       <div className="d-flex gap-5" >
        <strong id="labeldata">Property Paper Status:-</strong><p>{propertyPapers?.toString()==="true"?"Yes":"No"}</p>
       </div>
       {data?.dispatchDate &&(<div className="d-flex gap-5"><strong id="labeldata">Dispatch Date:-</strong><p>{data?.dispatchDate}</p></div>)}
      </div>
     }
    </Modal.Body>
    <Modal.Footer className="modal-footer d-flex flex-row justify-content-center " id="podFooter">
    </Modal.Footer>
   </Modal>
  </>
 );
};

export default ShowPOD;