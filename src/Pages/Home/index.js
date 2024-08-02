import React from 'react';
import Header from '../../components/Header/index';
import HeroSection from '../../components/HeroSection/index';
// import Filter from '../../components/Filter/index';
// import PropertyList from '../../components/PropertyList/index';
import './index.css';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* <div className="main-content">
        <Filter />
        <PropertyList />
      </div> */}
    </div>
  );
};

export default Home;
