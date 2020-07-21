// @flow
/* -----------------------  Globals ------------------ */
import React from 'react';

/* -----------------------  Material UI ------------------ */
import {
  Box,
} from '@material-ui/core';

/* -----------------------  Child Components ------------------ */
import Hero from '../src/components/Hero';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import About from '../src/components/about/About';
import Project from '../src/components/projects/Project';

/* -----------------------  Components ------------------ */
const Index = () => {
  const [navigationCounter, setNavigationCounter] = React.useState(0);
  const navigations = [<Hero />, <About />, <Project />];

  const handleNavigation = (index) => {
    setNavigationCounter(index);
  };
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      bgcolor="secondary.main"
      flexDirection="column"
      position="relative"
    >
      <Header
        navigationCounter={navigationCounter}
        handleNavigation={handleNavigation}
      />
      {navigations[navigationCounter]}
      <Footer />
    </Box>
  );
};

export default Index;
