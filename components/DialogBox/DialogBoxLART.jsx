import { Modal } from 'react-bootstrap';
import '../../pages/ApproverScreen/Button/ButtonModal.css'
import './Modal.css'

const DialogBoxLART = ({
 children,
 dialogOpen,
 setDialogOpen,
 handleClose,
 title,
 actionButtonName,
 cancelButtonName,
 handleButton,
 disabled,
 footerMessage,
 size
}) => {
 return (
  <Modal
   size={size}
   show={dialogOpen}
   onHide={handleClose}
   aria-labelledby='contained-modal-title-vcenter'
   backdrop='static'
   keyboard={false}
   centered
   className="mian-modals"
  >
   <Modal.Header id="AddCustomer">
    <Modal.Title>
     <h1 id="CustomerTitle">{title}</h1>
    </Modal.Title>
   </Modal.Header>
   <Modal.Body id="modalbodycss" >{children}</Modal.Body>
   <Modal.Footer className='modal-footer d-flex flex-row justify-content-center' id="modalfooter">
    <h5>{footerMessage}</h5>
    {handleClose && (
     <button className='btn btn-outline-primary rounded-5 btn-width' onClick={handleClose}>
      {cancelButtonName}
     </button>
    )}
    {handleButton && (
     <button
      className='btn btn-primary fw-bold rounded-5 border-2 btn-width'
      onClick={handleButton}
      disabled={disabled}
     >
      {actionButtonName}
     </button>
    )}

   </Modal.Footer>
  </Modal>
 );
};

export default DialogBoxLART;
