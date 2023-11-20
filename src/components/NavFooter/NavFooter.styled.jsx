import styled from 'styled-components';

export const NavFooterWrapper = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
  & > a:hover {
    transform: scale(1.1);
  }
`;
