import React from 'react';
import PropTypes from 'prop-types';

export default function Inquiry(props){
  return(
    <div>
      <h1>Name: {props.name}</h1>
      <h3>E-mail: {props.email}</h3>
      <h4>Phone: {props.phone}</h4>
      <p>Question: {props.question}</p>
      <button type='button'>Resolve</button>
    </div>
  );
}

Inquiry.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  question: PropTypes.string,
};
