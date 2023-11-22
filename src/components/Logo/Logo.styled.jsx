import styled from 'styled-components';

export const WrapperLogo = styled.div`
  font-family: 'Play Bold', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.43;
  color: black;
  text-transform: uppercase;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease-in-out;
  &:hover {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;
