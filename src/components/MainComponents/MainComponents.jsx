import React from 'react'
import { Link } from 'react-router-dom'
import { MainWrapper } from 'components/MainComponents/MainComponents.styled';

const MainComponents = () => {
  return (
    <MainWrapper>
    {/* <h1>Start Page</h1> */}
    <Link to="/"> 
      <button>Get started</button>
    </Link>
    </MainWrapper>
  )
}

export default MainComponents;