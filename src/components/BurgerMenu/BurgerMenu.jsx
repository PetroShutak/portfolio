import React from 'react';
import { BurgerMenuContainer, BurgerNav, Backdrop } from './BurgerMenustyled';
import { StyledLink } from './BurgerMenustyled';
import {
  FaCode,
  FaMountain,
  FaMusic,
} from 'react-icons/fa';

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
        <br />
        <div
          style={{
            display: 'flex',
            gap: '20px',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          <FaMountain size="30" color="blue" />
          <FaMusic size="30" color="yellow" />
          <FaCode size="30" color="green" />
        </div>
        <br />
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
            Project
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
