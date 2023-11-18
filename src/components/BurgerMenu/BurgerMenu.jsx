import React from 'react';
import { BurgerMenuContainer, BurgerNav, Backdrop } from './BurgerMenustyled';
import { StyledLink } from './BurgerMenustyled';

const BurgerMenu = ({ setOpen }) => {
  const closeBurger = () => {
    setOpen(false);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleCloseBurger = event => {
    if (event.target.classList.contains('backdrop')) {
      setOpen(false);
    }
  };

  return (
    <Backdrop className="backdrop" onClick={handleCloseBurger}>
      <BurgerMenuContainer>
        <span className="close" onClick={closeBurger}>
          &times;
        </span>
        <BurgerNav>
          {/* <StyledLink onClick={handleLinkClick} to="/main">
            Main
          </StyledLink> */}
          <StyledLink onClick={handleLinkClick} to="/home">
            Home
          </StyledLink>
          <StyledLink onClick={handleLinkClick} to="/about">
            About
          </StyledLink>
          <StyledLink onClick={handleLinkClick} to="/contacts">
            Contacts
          </StyledLink>
          <StyledLink onClick={handleLinkClick} to="/projects">
            Project
          </StyledLink>
        </BurgerNav>
      </BurgerMenuContainer>
    </Backdrop>
  );
};

export default BurgerMenu;
