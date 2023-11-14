import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BurgerMenuContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 300px;
  height: 100vh;
  background-color: #fff;
  z-index: 1000;
  padding: 20px;
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover,
    &:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const BurgerNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    margin: 20px;
    &:hover,
    &:focus {
      color: #aaa;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Play', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.43;
  color: black;

  &.active {
    color: blue;
  }
  //   @media screen and (max-width: 768px) {
  //     display: none;
  //   }
`;
