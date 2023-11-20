import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  margin: 24px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5) ;
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    text-decoration: none;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      color: #3f51b5;
    }
  }
  p {
    font-size: 24px;
    font-weight: 700;
    color: lightgray;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #61dafb;
`;
