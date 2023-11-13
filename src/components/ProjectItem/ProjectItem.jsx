import React from 'react';
import { ProjectItemContainer } from './ProjectItem.styled';
import { AiFillGithub } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';
// AiFillGithub
// GoLinkExternal


const ProjectItem = ({ title, url, repository, image }) => {
  return (
    <ProjectItemContainer>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <GoLinkExternal
            style={{
              fontSize: '1.5rem',
              color: '#282c34',
              marginRight: '0.5rem',
            }}
          />
          {url}
        </a>
      </p>
      <p>
        <a href={repository} target="_blank" rel="noopener noreferrer">
          {
            <AiFillGithub
              style={{
                fontSize: '1.5rem',
                color: '#282c34',
                marginRight: '0.5rem',
              }}
            />
          }
          {repository}
        </a>
      </p>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
