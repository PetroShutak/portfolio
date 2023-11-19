import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export const MainWrapper = styled.div`
  button {
    z-index: 1;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.5);
    border: none;

    padding: 10px 20px;
    width: 200px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    }
  }
`;

// home

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Developer = styled.p`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const ContactsBlock = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
  & > a:hover {
    transform: scale(1.1);
  }
`;
