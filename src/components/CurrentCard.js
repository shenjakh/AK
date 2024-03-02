import React, { useEffect, useState } from 'react';
import '../styles/CurrentCard.css';
import completeData from '../Data/completeData';
import SelectedStreetView from './SelectedStreetView';

const CurrentCard = ({ locations, selectedLocationName }) => {
  const [currentData, setCurrentData] = useState(null);

  const fetchCurrentData = async (latitude, longitude) => {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,rain,showers,snowfall,wind_speed_10m&hourly=temperature_2m&wind_speed_unit=ms`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.error) {
        console.error(`API Error: ${data.reason}`);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchDataForLocations = async () => {
      if (!locations || locations.length === 0) {
        console.error('No locations provided.');
        return;
      }

      let selectedLocation = locations.find((location) => location.name === selectedLocationName);

      if (!selectedLocation) {
        console.warn(`Location not found for: ${selectedLocationName}. Using completeData.`);
        selectedLocation = completeData.find((location) => location.name === selectedLocationName);
      }

      if (!selectedLocation) {
        console.error(`Location not found in completeData for: ${selectedLocationName}`);
        return;
      }

      const data = await fetchCurrentData(selectedLocation.latitude, selectedLocation.longitude);

      if (data) {
        const firstDayData = {
          temperature_2m: data.current.temperature_2m,
          relative_humidity_2m: data.current.relative_humidity_2m,
          apparent_temperature: data.current.apparent_temperature,
          wind_speed_10m: data.current.wind_speed_10m,
        };

        setCurrentData(firstDayData);
      } else {
        console.error('Error fetching current data.');
        setCurrentData(null);
      }
    };

    fetchDataForLocations();
  }, [locations, selectedLocationName]);

  return (
    <div className="current-card-container">
      {currentData ? (
        <div className="current-data-and-street-view">
          <div className="current-data">
            <h2>{selectedLocationName}</h2>
            <p>Temperatuur: {currentData.temperature_2m} °C</p>
            <p>Näiv temperatuur: {currentData.apparent_temperature} °C</p>
            <p>Suhteline niiskus: {currentData.relative_humidity_2m}%</p>
            <p>Tuule kiirus: {currentData.wind_speed_10m} m/s</p>
          </div>
        </div>
      ) : (
        <p className="no-data-message">No current data available</p>
      )}
    </div>
  );  
}
export default CurrentCard;
