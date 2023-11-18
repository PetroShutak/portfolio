import styled from 'styled-components';
// FiAlignRight
import { FiAlignRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  font-family: 'Play', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #f5f5f5;
  // background-color: rgba(255, 255, 255, 0.5) ;
  border-bottom: 1px solid #ddd;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Play', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.43;
  color: black;

  &.active {
    color: blue;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledBurger = styled(FiAlignRight)`
  // position: relative;
  font-size: 2rem;
  color: #282c34;
  background: transparent;
  cursor: pointer;
  &:hover {
    color: #61dafb;
  }
`;


export const Logo = styled.div`
  font-family: 'Play', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.43;
  color: black;
  & > a {
    text-decoration: none;
    color: greenmoss;
  }

`;