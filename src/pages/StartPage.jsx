import MainComponents from 'components/MainComponents/MainComponents';

import React from 'react';

import { Helmet } from 'react-helmet';

const StartPage = () => {
  return (
    <div>
      <Helmet>
        <title>StartPage</title>
      </Helmet>
      <div
      style={{
        height: '100vh',
      }}
      >

    <MainComponents />
      </div>
    
    </div>
  );
};

export default StartPage;
