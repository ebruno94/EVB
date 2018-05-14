import React from 'react';

export default function Contact(){
  let _name = null;
  let _phone = null;
  let _email = null;
  let _question = null;

  function handleNewFormSubmission(e){
    e.preventDefault();
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
