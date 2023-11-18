import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavContainer, StyledBurger, StyledLink, Logo } from './Nav.styled.jsx';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu.jsx';
import { CSSTransition } from 'react-transition-group';

const Nav = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toogleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <NavContainer>
      <Logo>
        <Link to="/main">Logo</Link>
      </Logo>
      {/* <StyledLink to="/"></StyledLink> */}
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
      <StyledLink to="/projects">Projects</StyledLink>
      <CSSTransition
        in={burgerOpen}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        {state => (
          <BurgerMenu
            open={burgerOpen}
            setOpen={setBurgerOpen}
            transitionState={state}
          />
        )}
      </CSSTransition>
      <StyledBurger onClick={toogleBurger} />
      {/* {burgerOpen && <BurgerMenu open={burgerOpen} setOpen={setBurgerOpen} />} */}
    </NavContainer>
  );
};

export default Nav;
