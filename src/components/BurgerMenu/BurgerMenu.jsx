import React from 'react';
import { BurgerMenuContainer, BurgerNav, Backdrop } from './BurgerMenustyled';
import { StyledLink } from './BurgerMenustyled';


import ContactsBlock from 'components/ContactsBlock/ContactsBlock';

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
          <StyledLink onClick={handleLinkClick} to="/">
            Home
          </StyledLink>
          <StyledLink onClick={handleLinkClick} to="/about">
            About
          </StyledLink>
          <StyledLink onClick={handleLinkClick} to="/contacts">
            Contacts
          </StyledLink>
          <StyledLink onClick={handleLinkClick} to="/projects">
            Projects
          </StyledLink>
        </BurgerNav>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ContactsBlock />
        </div>
      </BurgerMenuContainer>
    </Backdrop>
  );
};

export default BurgerMenu;
