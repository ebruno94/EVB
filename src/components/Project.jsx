import React from 'react';
import PropTypes from 'prop-types';

export default function Project(props){
  return(
    <div>
      <h1>{props.location} - {props.date}</h1>
    </div>
  );
}

Project.propTypes = {
  location: PropTypes.string,
  date: PropTypes.string,
  images: PropTypes.array,
  projectId: PropTypes.string
};
