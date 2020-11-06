import React from "react";

const Modal = ({ closeModal, src, tags }) => {
  return(
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={src} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;