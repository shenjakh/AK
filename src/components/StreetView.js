

import React, { useState, useEffect } from 'react';
import streetViewData from '../Data/streetViewData';
import '../styles/StreetView.css';
import ImageModal from './ImageModal';

const StreetViewCard = ({ img, name, openModal }) => {
  return (
    <div className="card" onClick={(e) => openModal(e, img, name)}>
      <img src={img} alt={name} />
      <p className="name">{name}</p>
    </div>
  );
};

const StreetView = () => {
  const [modalData, setModalData] = useState(null);
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {

    setShuffledData(streetViewData.sort(() => Math.random() - 0.5));
  }, []);

  const openModal = (e, img, name) => {
    e.preventDefault();
    setModalData({ img, name });
    document.body.classList.add('overlay-hidden');
  };

  const closeModal = (e) => {
    e.preventDefault();
    setModalData(null);
    document.body.classList.remove('overlay-hidden');
  };

  const handleCardHover = (index, isHovered) => {
    const card = document.querySelector(`.card:nth-child(${index + 1})`);
    if (card) {
      card.classList.toggle('hovered', isHovered);
    }
  };


  const selectedData = shuffledData.slice(0, 6);

  return (
    <div className="street-view-container">
      {selectedData.map((location, index) => (
        <StreetViewCard
          key={index}
          img={location.img}
          name={location.name}
          openModal={(e) => openModal(e, location.img, location.name)}
          onMouseEnter={() => handleCardHover(index, true)}
          onMouseLeave={() => handleCardHover(index, false)}
        />
      ))}

      {modalData && (
        <ImageModal
          img={modalData.img}
          name={modalData.name}
          closeModal={(e) => closeModal(e)}
        />
      )}

      <button onClick= {() => window.location.href = '/AK/allCams'} className="streetViewButton">Ava kõike</button>
    </div>
  );
};

export default StreetView;
