import Home from 'components/HomeStart/Home';
import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <Home />
      </div>
    </>
  );
};

export default HomePage;
