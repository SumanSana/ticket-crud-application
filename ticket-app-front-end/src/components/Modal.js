import React from 'react';

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Update Ticket</h2>
            </div>
        <   div className="modal-body">
                {children}
            </div>
      </div>
    </div>
  );
};

export default Modal;