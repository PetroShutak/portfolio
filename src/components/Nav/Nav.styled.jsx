import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
  }
`;

export const StyledLink = styled(NavLink)`
font-family: 'Play', sans-serif;
  font-size: 18px;
  line-height: 1.43;
  color: black;

  &.active {
    color: blue;
  }
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
`;
