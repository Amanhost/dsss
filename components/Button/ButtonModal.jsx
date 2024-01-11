import { useContext } from "react";
import "./ButtonModal.css";
import { context } from "../../pages/ApproverScreen/Context";

const RecommendButton = (props) => {
  
  const { modalSearch, name } = useContext(context);
  const btn = () => {
    return props.selectedFlatRows.length === 0 ? true : false;
  };
  const flag = btn();
  return (
    <div className="modal-btn">
      <button
        id="_btn"
        type="button"
        className={`btn ${"btn-primary"}  rounded-5 btn-width-10 justify-content-end `}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        disabled={btn()}
      >
        {name}
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                List
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" id="modal-body">
              {modalSearch}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendButton;
