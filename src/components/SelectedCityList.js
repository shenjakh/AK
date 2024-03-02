import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchData from '../Data/meteoApi';
import defaultLocations from '../Data/defaultData';
import completeData from '../Data/completeData';
import '../styles/SelectedCityList.css';

const SelectedCityList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedLocation = searchParams.get('location');

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const selectedLocationData =
        defaultLocations.find((loc) => loc.name === selectedLocation) ||
        completeData.find((loc) => loc.name === selectedLocation);

      if (selectedLocationData) {
        const { latitude, longitude } = selectedLocationData;
        try {
          const data = await fetchData(latitude, longitude);

          if (data?.daily && Array.isArray(data.daily.time)) {
            const formattedData = data.daily.time.map((date, index) => ({
              date,
              maxTemperature: data.daily.temperature_2m_max[index],
              minTemperature: data.daily.temperature_2m_min[index],
              sunrise: data.daily.sunrise[index],
              sunset: data.daily.sunset[index],
              precipitation: data.daily.precipitation_sum[index],
              windSpeed: data.daily.wind_speed_10m_max[index],
            }));

            setTableData(formattedData);
          } else {
            console.error('Invalid or missing daily data structure:', data);
            setTableData([]);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setTableData([]);
        }
      } else {
        console.error('Selected location not found in default or complete data.');
        setTableData([]);
      }
    };

    fetchWeatherData();
  }, [selectedLocation]);

  const formatWeekday = (dateString) => {
    const options = { weekday: 'long', day: 'numeric', month: 'short' };
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('et-EE', options);
    const formattedDate = formatter.format(date);
    return formattedDate;
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Kõrgem temperatuur</th>
            <th>Madalam temperatuur</th>
            <th>Päikesetõus</th>
            <th>Päikeseloojang</th>
            <th>Sademed(mm)</th>
            <th>Tuule kiirus(m/s)</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(tableData) && tableData.length > 0 ? (
            tableData.map((rowData, index) => (
              <tr key={index}>
                <td>{formatWeekday(rowData.date)}</td>
                <td>{rowData.maxTemperature}°</td>
                <td>{rowData.minTemperature}°</td>
                <td>{rowData.sunrise.slice(-5)}</td>
                <td>{rowData.sunset.slice(-5)}</td>
                <td>{rowData.precipitation === 0 ? '-' : rowData.precipitation}</td>
                <td>{rowData.windSpeed ? ((rowData.windSpeed * 1000) / 3600).toFixed(1) : 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Andmeid pole saadaval</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedCityList;
