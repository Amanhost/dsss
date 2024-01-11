import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const NestedModal = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        id="_btn"
        type="button"
        className="btn btn-primary"
      >
        {props.btnName}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Are You Sure!</h2>
          <h5>
            You want to assign application to the: <strong>{props.name}</strong>
            .
          </h5>
          {/* <ChildModal /> */}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={props.onClick}
            
          >
            Yes!
          </button>
          <button type="button" className="btn btn-" onClick={handleClose}>
            No!
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default NestedModal;