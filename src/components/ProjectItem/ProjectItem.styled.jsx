import styled from 'styled-components';

export const ProjectItemContainer = styled.div`
  width: 400px;
  height: auto;
  padding: 24px;
  border-radius: 15px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  margin: 24px;
  img {
    img: 100%;
    height: auto;
    border-radius: 15px;
    margin-bottom: 24px;
  }

  &:hover {
    img {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
`;
