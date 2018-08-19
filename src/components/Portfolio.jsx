import React from 'react';
import ProjectList from './ProjectList';
import PropTypes from 'prop-types';

export default function Portfolio(props){
  return(
    <div>
      <style jsx>{`
          h1 {
            text-align: center;
          }


      `}</style>
      <div>
        <h1>Portfolio</h1>
        <hr/>
        <h1> THIS PAGE IS UNDER CONSTRUCTION </h1>
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  projectList: PropTypes.object
};
