import { Modal } from 'react-bootstrap';
import '../../pages/ApproverScreen/Button/ButtonModal.css';
import './Modal.css'

const TimeLineModal = ({
  dialogOpen,
  handleClose,
  actionButtonName,
  cancelButtonName,
  handleButton,
  disabled,
  footerMessage,
  size,
  width,
  flag
}) => {
  const flag1 = flag === true ? "62rem" : null
  const flag2 = flag === true ? "53rem" : null
  return (
    <Modal
      size={size}
      show={dialogOpen}
      onHide={handleClose}
      backdrop='static'
      keyboard={false}
      centered
      style={{ marginLeft: "17%", width: `${width}`, height: flag1 }}
    >
      <Modal.Body style={{ height: flag2 }} className="modal-content d-flex justify-content-center" >
        {footerMessage}
      </Modal.Body>
      <Modal.Footer className="alertFooter d-flex flex-row justify-content-between " >
        {handleClose && (
          <button className="btn btn-outline-primary  rounded-5  " onClick={handleClose}>
            {cancelButtonName}
          </button>
        )}
        {handleButton && (
          <button
            className="btn btn-primary fw-bold  rounded-5 border-2 "
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

export default TimeLineModal;
