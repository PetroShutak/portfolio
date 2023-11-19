import { MainWrapper } from 'components/HomeStart/HomeStart.styled';

import React from 'react';

const StartPage = ({ onHideStartPage }) => {
  const handleClick = () => {
    onHideStartPage();
  };
  return (
    <div>
      <div
        style={{
          height: '100vh',
        }}
      >
        <MainWrapper>
          <button onClick={handleClick}>Get started</button>
        </MainWrapper>
      </div>
    </div>
  );
};

export default StartPage;
