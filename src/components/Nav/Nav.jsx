import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavContainer, StyledLink } from './Nav.styled.jsx';
// FiAlignRight
import { FiAlignRight } from 'react-icons/fi';

const Nav = () => {
  return (
    <NavContainer>
      <StyledLink to="/">Main</StyledLink>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
      <StyledLink to="/projects">Project</StyledLink>
  <FiAlignRight
    style={{
      fontSize: '2rem',
      color: '#282c34',
      marginRight: '0.5rem',
    }}
  />
    </NavContainer>
  );
};

export default Nav;
