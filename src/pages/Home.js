import React, { useState, useEffect } from 'react';
import LandingPage from '../components/Home/LandingPage';
import ServicesHome from '../components/Home/ServicesHome';
import Navbar from '../components/Home/Navbar';

const useScrollVisibility = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return visible;
};

const Home = () => {
  const visible = useScrollVisibility();

  return (
    <div>
      <Navbar visible={visible} />
      <LandingPage />
      <ServicesHome />
    </div>
  );
};

export default Home;
