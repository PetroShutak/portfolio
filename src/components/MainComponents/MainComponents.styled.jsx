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
