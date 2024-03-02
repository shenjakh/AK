import React, { useState } from 'react';
import Header from '../components/Header';
import HomeList from '../components/HomeList';
import StreetView from '../components/StreetView';
import Footer from '../components/Footer';
import '../styles/Home.css'

import defaultLocations from '../Data/defaultData';

const Home = () => {

  return (
    <div>
      <Header />

      <HomeList locations={defaultLocations} />

      <h2 className="Webcams">Veebikaamerad</h2>

      <StreetView />

      <Footer />
    </div>
  );
};

export default Home;
