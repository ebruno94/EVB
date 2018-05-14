import React from 'react';
import PropTypes from 'prop-types';

export default function Contact(props){
  let _name = null;
  let _phone = null;
  let _email = null;
  let _question = null;

  function handleNewFormSubmission(e){
    e.preventDefault();
    props.onNewInquirySubmission({name: _name.value, phone: _phone.value, email: _email.value, question: _question.value});
    _name = '';
    _phone = '';
    _email = '';
    _question = '';
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
        <label>Comment</label>
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
