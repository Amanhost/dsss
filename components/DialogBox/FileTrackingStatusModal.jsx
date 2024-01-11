import { Modal } from 'react-bootstrap';
import '../../pages/ApproverScreen/Button/ButtonModal.css';

const FileTrackingStatusModal = ({
  children,
  dialogOpen,
  handleClose,
  title,
  actionButtonName,
  cancelButtonName,
  handleButton,
  disabled,
  footerFlag,
  size,
}) => {
  return (
    <Modal className="modal" style={{height:'40rem'}}
      size={size}
      show={dialogOpen}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
        backdrop='static'
      keyboard={false}
      centered
    >
      <Modal.Header  closeButton>
        <Modal.Title>
         {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-content" style={{height:'30rem'}}>{children}</Modal.Body>
      <Modal.Footer className='modal-footer d-flex flex-row justify-content-between '>
       
      
        {footerFlag&&(<>
          <button className='btn btn-outline-primary  rounded-5  btn-width' onClick={handleClose}>
            {cancelButtonName}
          </button>
      
          <button
            className='btn btn-primary fw-bold  rounded-5 border-2 btn-width'
            onClick={handleButton}
            disabled={disabled}
          >
            {actionButtonName}
          </button>
          </>)
}
    
      </Modal.Footer>
    </Modal>
  );
};

export default FileTrackingStatusModal;
