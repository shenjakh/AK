import React from 'react';
import { useLocation } from 'react-router-dom';
import CurrentCard from '../components/CurrentCard';
import SelectedStreetView from '../components/SelectedStreetView'
import defaultData from '../Data/defaultData';
import Header from '../components/Header'
import SelectedCityList from '../components/SelectedCityList'
import HomeButton from '../components/HomeButton';
import Footer from '../components/Footer';
import '../styles/SelectedPage.css'



const SelectedCity = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedLocationName = searchParams.get('location');

  return (
    <div>
      <Header />
      <div className='Current'>
      <CurrentCard locations={defaultData} selectedLocationName={selectedLocationName}/>
      </div>
      <SelectedCityList />
      <HomeButton />
      <Footer />
    </div>
  );
};

export default SelectedCity;
