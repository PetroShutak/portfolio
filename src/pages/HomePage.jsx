import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div
      style={{
        height: '100vh',
      }}>HomePage</div>
    </>
  );
};

export default HomePage;
