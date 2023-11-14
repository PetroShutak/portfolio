import styled from 'styled-components';

export const ProjectsListConteiner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  padding: 16px;
  justify-items: center;
  box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
`;
