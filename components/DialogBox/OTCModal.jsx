import { Modal } from 'react-bootstrap';
import '../../pages/ApproverScreen/Button/ButtonModal.css';
import './Modal.css'

const OTCModal = ({
    actionButtonDisable,
    dialogOpen,
    handleClose,
    actionButtonName,
    cancelButtonName,
    handleButton,
    disabled,
    footerMessage,
    size,
    width,
    handleCloseFinal,
    height,
    title1,


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
            <Modal.Header>
                <Modal.Title className="d-flex justify-content-center otcmodalheadr" style={{ color: '#ad3460' }}>{title1}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-content d-flex justify-content-center" style={{ height: height }}>{footerMessage}</Modal.Body>
            <Modal.Footer className="alertFooter d-flex flex-row gap-1 justify-content-between " >
                <div className=" " style={{ marginRight: "10px" }}>
                    {handleClose && (
                        <button className="btn btn-outline-primary  rounded-5   " style={{ marginRight: "10px" }} onClick={handleClose}>
                            {cancelButtonName}
                        </button>
                    )}

                </div>

                <div className="d-flex flex-row gap-1 justify-content-between" >

                    <div>
                        {handleButton && (
                            <button
                                className="btn btn-primary fw-bold  rounded-5 border-2 "
                                onClick={handleButton}
                                disabled={disabled ? true : false}
                            >
                                {actionButtonName}
                            </button>
                        )}

                    </div>

                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default OTCModal;