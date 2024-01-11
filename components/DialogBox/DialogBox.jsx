import { Modal } from 'react-bootstrap';
import '../../pages/ApproverScreen/Button/ButtonModal.css'

const DialogBox = ({
  children,
  dialogOpen,
  setDialogOpen,
  handleClose,
  title,
  actionButtonName,
  cancelButtonName,
  handleButton,
  disabled,
  size,
  ContiniuebuttonName,
  HandleContiniueButton,
  

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
    >
      <Modal.Header closeButton>
        <Modal.Title className="d-flex justify-content-center" style={{ color: '#ad3460', fornSize: "5px" }}>
          <h1>{title}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-content" >{children}</Modal.Body>
      <Modal.Footer className='modal-footer d-flex flex-row justify-content-between '>

        {handleClose && (
          <button className='btn btn-outline-primary  rounded-5  btn-width' onClick={handleClose}>
            {cancelButtonName}
          </button>
        )}
        {handleButton && (
          <button
            className='btn btn-primary fw-bold  rounded-5 border-2 btn-width'
            onClick={() => { setDialogOpen(false); handleButton() }}
            disabled={disabled}
          >
            {actionButtonName}
          </button>
        )}

        {HandleContiniueButton && (
          <button
            className='btn btn-primary fw-bold  rounded-5 border-2 btn-width'
            onClick={HandleContiniueButton}
            disabled={disabled}
          >
            {ContiniuebuttonName}
          </button>
        )}

      </Modal.Footer>
    </Modal>
  );
};

export default DialogBox;
