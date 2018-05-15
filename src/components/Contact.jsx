import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

export default function Contact(props){
  let _name = null;
  let _phone = null;
  let _email = null;
  let _question = null;

  function handleNewFormSubmission(event){
    event.preventDefault();
    props.onNewInquirySubmission({id: v4(), name: _name.value, phone: _phone.value, email: _email.value, question: _question.value});
    _name.value = '';
    _phone.value = '';
    _email.value = '';
    _question.value = '';
  }

  return(
    <div>
      <h1>This is the Contact page</h1>
      <form onSubmit={handleNewFormSubmission}>
        <label>Name</label>
        <input
          type='text'
          id='name'
          ref={(input)=>{_name = input;}} />
        <br/>
        <label>Phone Number</label>
        <input
          type='text'
          id='phone'
          ref={(input)=>{_phone = input;}} />
        <br/>
        <label>E-mail</label>
        <input
          type='text'
          id='email'
          ref={(input)=>{_email = input;}} />
        <br/>
        <label>Comments</label>
        <textarea
          type='text'
          id='question'
          ref={(textarea)=>{_question = textarea;}} />
        <br/>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

Contact.propTypes = {
  onNewInquirySubmission: PropTypes.func
};
