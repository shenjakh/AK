import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomeList.css';

const HomeList = ({ locations }) => {
  const [tableData, setTableData] = useState([]);
  const [dateHeaders, setDateHeaders] = useState([]);
  const navigate = useNavigate();

  const formatWeekday = (dateString) => {
    const options = { weekday: 'short' };
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('et-EE', options);
    return formatter.format(date);
  };

  const fetchData = async (location) => {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=temperature_2m_max,temperature_2m_min&wind_speed_unit=ms&timezone=auto`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();


      if (data.error) {
        console.error(`API Error: ${data.reason}`);
        return null;
      }

      return data;
    } catch (error) {
      console.error(`Error fetching data for ${location.name}:`, error);
      return null;
    }
  };

  useEffect(() => {
    const fetchDataForLocations = async () => {
      if (!locations || locations.length === 0) {
        console.error('No locations provided.');
        return;
      }


      const firstLocation = locations[0];
      const firstData = await fetchData(firstLocation);

      if (firstData !== null && firstData.daily && firstData.daily.time && Array.isArray(firstData.daily.time) && firstData.daily.time.length > 0) {
        setDateHeaders(firstData.daily.time);
      } else {
        console.error('No date headers found or incomplete data in the first API response.');
        console.log('API response:', firstData);
      }


      const dataPromises = locations.map(async (location) => {
        const data = await fetchData(location);

        if (data !== null && data.daily && data.daily.time && Array.isArray(data.daily.time) && data.daily.time.length > 0) {
          const dailyData = data.daily;


          const rows = dailyData.time.map((date, index) => ({
            location: location.name,
            maxTemperature: dailyData.temperature_2m_max[index],
            minTemperature: dailyData.temperature_2m_min[index],
            date: date,
            key: `${location.name}_${index}`,
          }));

          return rows;
        } else {
          console.error(`No or incomplete daily data found for ${location.name}`);
          console.log('API response:', data);
          return null;
        }
      });

      const resolvedData = await Promise.all(dataPromises);

      const flattenedData = resolvedData.flat().filter(Boolean);
      setTableData(flattenedData);
    };

    fetchDataForLocations();
  }, [locations]); 

  const handleRowClick = (locationName) => {
    navigate(`/selected?location=${encodeURIComponent(locationName)}`);
  };

  return (
    <div className="table-container">
      <table className="full-width-table">
        <thead>
          <tr>
            <th></th>
            {dateHeaders.slice(0, 4).map((date, index) => (
              <th key={index}>{formatWeekday(date)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {locations.map((location, locationIndex) => (
            <React.Fragment key={locationIndex}>
              <tr onClick={() => handleRowClick(location.name)}>
                <td>{location.name}</td>
                {dateHeaders.slice(0, 4).map((date, dateIndex) => {
                  const rowData = tableData.find((row) => row.location === location.name && row.date === date);
                  const averageTemperature = rowData ? (rowData.minTemperature + rowData.maxTemperature) / 2 : 'N/A';
                  const formattedTemperature = isNaN(averageTemperature) ? 'N/A' : Math.floor(averageTemperature);
                  return <td key={dateIndex}>{formattedTemperature}°</td>;
                })}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeList;
