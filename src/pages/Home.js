import React from 'react';
import LandingPage from '../components/Home/LandingPage';
import ServicesHome from '../components/Home/ServicesHome';
import Navbar from '../components/Home/Navbar';

import { Container } from '@mui/material';

const Home = () => {

  return (
    <div>
      <Navbar />
      <LandingPage/>
      <Container>
        <ServicesHome/>
      </Container>
    </div>
  );
};

export default Home;
