import { Modal } from 'react-bootstrap';
import '../../pages/ApproverScreen/Button/ButtonModal.css';
import './Modal.css'

const FileTrackingAlert = ({
  dialogOpen,
  handleClose,
  actionButtonName,
  cancelButtonName,
  handleButton,
  disabled,
  footerMessage,
  handleCloseFinal,
  size,
  disablesuggested,
  suggestEdits,

}) => {
  return (
    <Modal
      size={size}
      show={dialogOpen}
      onHide={handleCloseFinal}
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Footer className="alertFooter d-flex flex-row justify-content-center " style={{ width: "32rem", height: '10rem' }}>
        <h5>{footerMessage}</h5>

        {handleClose && (
          <button className="btn btn-outline-primary  rounded-5  " onClick={handleClose}>
            {cancelButtonName}
          </button>
        )}
        {handleButton && (
          <button
            className="btn btn-primary fw-bold  rounded-5 border-2 "
            onClick={handleButton}
            // disabled={disabled}

            disabled={disablesuggested == true || suggestEdits.status == "loading" ? true : false}>
            {actionButtonName}
          </button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default FileTrackingAlert;