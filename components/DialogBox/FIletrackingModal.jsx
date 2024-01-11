import { Modal } from 'react-bootstrap';
import '../../pages/ApproverScreen/Button/ButtonModal.css';
import { errorToast } from '../Toasts/Toasts';
import './Modal.css'

const FIletrackingModal = ({
  dialogOpen,
  handleClose,
  handleButton1,
  SendRCUButtonName,
  actionButtonName,
  cancelButtonName,
  handleButton,
  disabled,
  size,
  width,
  handleCloseFinal,
  title1,
  SendToAudit,
  handleAuditSend,
  actionClose,
  sendToOps,
  handleSendOps,
  actionButtonDisable,
  actionClose1,
  actionClose11,
  handleCm,
  handleCMbutton,
  opsstatus

}) => {
  return (
    <Modal
      size={size}
      show={dialogOpen}
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      keyboard={false}
      onHide={handleCloseFinal}
      enforceFocus={true}
      animation={true}
      autoFocus={true}
      restoreFocus={true}
      className="modalContent"
      centered
      style={{ marginLeft: "25%", width: `${width}` }}
    >
      <Modal.Body className="d-flex justify-content-center" style={{ color: '#ad3460', fontWeight: "bold", fontSize: "20px" }}>{title1}</Modal.Body>
      <Modal.Footer className="alertFooter d-flex flex-row gap-1 justify-content-between " >
        <div className=" " style={{ marginRight: "10px" }}>
          {handleClose && (
            <button className="btn btn-outline-primary  rounded-5   " style={{ marginRight: "10px" }} onClick={handleClose}>
              {cancelButtonName}
            </button>
          )}

          {handleButton1 && (
            <button className="btn btn-outline-primary  rounded-5  " style={{ marginRight: "10px" }} onClick={handleButton1}>
              {SendRCUButtonName}
            </button>
          )}

          {handleSendOps && (
            <button className="btn btn-outline-primary  rounded-5  " style={{ marginRight: "10px" }} onClick={handleSendOps
            }>
              {sendToOps}
            </button>
          )}

          {actionClose11 && (
            <button
              className="btn btn-primary fw-bold  rounded-5 border-2 "
              onClick={actionClose11}
              disabled={actionButtonDisable ? actionButtonDisable : disabled}
            >
              {actionClose1}
            </button>
          )}

          {handleAuditSend && (
            <button className="btn btn-outline-primary  rounded-5 gap-1  " onClick={handleAuditSend}>
              {SendToAudit}
            </button>
          )}
        </div>

        <div className="d-flex flex-row gap-1 justify-content-between" >
          {handleCMbutton && (
            <button
              className="btn btn-primary fw-bold  rounded-5 border-2 "
              onClick={handleCMbutton}
              disabled={actionButtonDisable ? actionButtonDisable : disabled}
            >
              {handleCm}
            </button>
          )}
          <div>
            {handleButton && (
              <button
                className="btn btn-primary fw-bold  rounded-5 border-2 "
                 onClick={opsstatus==='query_reverted_by_cm'&& handleButton}
                disabled={actionButtonDisable ? actionButtonDisable : disabled}
              >
                {actionButtonName}
              </button>
            )}

          </div>
          <div>

            {(handleCloseFinal && actionClose) && (
              <button
                className="btn btn-primary fw-bold  rounded-5 border-2 "
                onClick={handleCloseFinal}
                disabled={disabled}
              >
                {actionClose}
              </button>
            )}


          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default FIletrackingModal;
