import styled from "styled-components";

export const ContactsBlockContainer = styled.div`
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