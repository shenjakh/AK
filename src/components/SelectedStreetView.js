import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import streetViewData from '../Data/streetViewData';
import '../styles/SelectedStreetView.css';
import ImageModal from '../components/ImageModal';

const SelectedStreetView = () => {
  const location = useLocation();
  const locationName = new URLSearchParams(location.search).get('location');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const locationData = streetViewData.find(
      (location) =>
        location.name.toLowerCase() === locationName.toLowerCase() ||
        (location.cityName &&
          location.cityName.toLowerCase() === locationName.toLowerCase())
    );

    setSelectedLocation(locationData);
  }, [locationName]);

  const openModal = (e, img) => {
    e.preventDefault();
    setModalData({ img });
  };

  const closeModal = (e) => {
    e.preventDefault();
    setModalData(null);
  };

  return (
    <div className="selected-street-view-container">
      {selectedLocation ? (
        <div className="selected-img" onClick={(e) => openModal(e, selectedLocation.img)}>
          <img src={selectedLocation.img} alt="Street View" />
        </div>
      ) : (
        <p className="no-data-message">Kahjuks pole tänavavaade saadaval</p>
      )}

      {modalData && (
        <ImageModal
          img={modalData.img}
          name={modalData.name}
          closeModal={(e) => closeModal(e)}
        />
      )}
    </div>
  );
};

export default SelectedStreetView;
