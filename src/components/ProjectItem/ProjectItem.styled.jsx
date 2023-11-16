import { AiFillGithub } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';
import styled from 'styled-components';

export const ProjectItemContainer = styled.div`
  width: 360px;
  height: auto;
  padding: 24px;
  border-radius: 15px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  margin: 24px;

  a {
    display: flex;
    align-items: center;
  }
`;

export const StyledGithubIcon = styled(AiFillGithub)`
  font-size: 1.5rem;
  color: #282c34;
  transition: all 0.3s ease;

  &:hover {
    color: #563d7c;
    transform: scale(1.2);
  }
`;

export const StyledExternalLinkIcon = styled(GoLinkExternal)`
  font-size: 1.5rem;
  color: #282c34;
  transition: all 0.3s ease;

  &:hover {
    color: #daa520;
    transform: scale(1.2);
  }
`;

export const ImageCard = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  border: 0.5px solid #ccc;
  margin-bottom: 24px;
  transition: 0.5s;
  &:hover {
    cursor: zoom-in;
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
export const Desc = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  padding: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid #888;
  width: 80%;
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    margin-bottom: 24px;
  }
  p {
    text-align: left;
    margin: 0;
  }
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
export const Placeholder = styled.div`
  width: 100%;
  height: 400px;
  background-color: #ccc;
  border-radius: 15px;
  margin-bottom: 24px;
`;
