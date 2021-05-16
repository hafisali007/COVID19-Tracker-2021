import React, { Fragment } from 'react';
import SectionContainer from '../Components/SectionContainer';
import Countries from '../Components/Countries';
import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';

const Home = () => {
  return (
    <Fragment>    
         <Navbar/>
         <Countries/>
    <SectionContainer/>
    <Footer/>
    </Fragment>
  );
};

export default Home;
