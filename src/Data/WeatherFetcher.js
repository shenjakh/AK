import React, { useState, useEffect, useCallback } from 'react';
import fetchData from '../Data/meteoApi';
import defaultLocations from '../Data/defaultData';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const WeatherFetcher = ({ onFetchComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeatherDataForAllLocations = useCallback(async () => {
    try {
      const dataPromises = defaultLocations.map(async (location) => {
        const data = await fetchData(location.latitude, location.longitude);
        await delay(1000);
        return data;
      });

      const allData = await Promise.all(dataPromises);
      onFetchComplete(allData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [onFetchComplete]);

  useEffect(() => {
    fetchWeatherDataForAllLocations();
  }, [fetchWeatherDataForAllLocations]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default WeatherFetcher;
