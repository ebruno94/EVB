import React from 'react';
import ProjectList from './ProjectList';
import PropTypes from 'prop-types';

export default function Portfolio(props){
  return(
    <div>
      <h1>Portfolio</h1>
      <hr/>
      <p>Below is a list of projects we have done in the past</p>
      <ProjectList projectList={props.projectList}/>
    </div>
  );
}

Portfolio.propTypes = {
  projectList: PropTypes.object
}
