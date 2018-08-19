import React from 'react';
import Project from './Project';
import PropTypes from 'prop-types';

export default function ProjectList(props){
  return(
    <div>
      <h1>Projects</h1>
      <hr/>
      {Object.keys(props.projectList).map(function(projectId){
        let project = props.projectList[projectId];
        return <Project
          location={project.location}
          date={project.date}
          images={project.images}
          key={projectId}
          projectId={projectId}/>;
      })}
    </div>
  );
}

ProjectList.propTypes = {
  projectList: PropTypes.object
};
