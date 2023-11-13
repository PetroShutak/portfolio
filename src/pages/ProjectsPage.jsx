import ProjectsList from 'components/ProjectsList/ProjectsList';
import React from 'react';
import { Helmet } from 'react-helmet';

const ProjectsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <ProjectsList />
    </div>
  );
};

export default ProjectsPage;
