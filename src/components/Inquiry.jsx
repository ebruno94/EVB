import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

function Inquiry(props){

  function handleResolve(){
    console.log(props);
    const {dispatch} = props;
    const action = {
      type: 'REMOVE_INQUIRY',
      id: props.inquiryId
    };
    if (confirm('Resolve this inquiry? (This action will delete the inquiry!)')){
      dispatch(action);
    };
  }

  return(
    <div>
      <h1>Name: {props.name}</h1>
      <h3>E-mail: {props.email}</h3>
      <h4>Phone: {props.phone}</h4>
      <p>Question: {props.question}</p>
      <button onClick={handleResolve} type='button'>Resolve</button>
      <hr/>
    </div>
  );
}

Inquiry.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  question: PropTypes.string,
  inquiryId: PropTypes.string
};

export default connect()(Inquiry);
