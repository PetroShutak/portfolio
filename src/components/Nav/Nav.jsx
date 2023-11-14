import React from 'react';
import { useState } from 'react';
import { NavContainer, StyledBurger, StyledLink } from './Nav.styled.jsx';

import BurgerMenu from 'components/BurgerMenu/BurgerMenu.jsx';

const Nav = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toogleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <NavContainer>
      <StyledLink to="/">Main</StyledLink>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
      <StyledLink to="/projects">Projects</StyledLink>
      <StyledBurger onClick={toogleBurger} />
      {burgerOpen && <BurgerMenu open={burgerOpen} setOpen={setBurgerOpen} />}
    </NavContainer>
  );
};

export default Nav;
