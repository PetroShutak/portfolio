import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import projectsData from '../data/projects'; 
import { ProjectsListConteiner } from './ProjectsList.styled';

const ProjectsList = () => {
  return (
    
    <ProjectsListConteiner>
      {projectsData.map((project) => (
          <ProjectItem key={project.id} {...project} />
          ))}
          </ProjectsListConteiner>
    
  );
};

export default ProjectsList;
