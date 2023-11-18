import React from 'react';

import { MainWrapper } from 'components/MainComponents/MainComponents.styled';

const MainComponents = () => {
  const handleClick = () => {
    // console.log('click')
    const viewportHeight = window.innerHeight;

    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth',
    });
  };

  return (
    <MainWrapper>
      <button onClick={handleClick}>Get started</button>
    </MainWrapper>
  );
};

export default MainComponents;
