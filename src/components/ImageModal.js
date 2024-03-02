import React from 'react';
import '../styles/ImageModal.css';

const ImageModal = ({ img, name, closeModal }) => {
  return (
    <div className="image-modal-overlay" onClick={closeModal}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={img} alt={name} />
        <button className="close-modal-button" onClick={closeModal}>
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
