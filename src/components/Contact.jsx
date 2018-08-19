import React from 'react';
import {connect} from 'react-redux';
import {addInquiry} from './../actions';

function Contact(props){
  let _name = null;
  let _phone = null;
  let _email = null;
  let _question = null;

  function handleNewFormSubmission(event){
    const {dispatch} = props;
    event.preventDefault();
    dispatch(addInquiry(_name.value, _phone.value, _email.value, _question.value));
    _name.value = '';
    _phone.value = '';
    _email.value = '';
    _question.value = '';
  }

  return(
    <div>
      <style jsx>{`
          h1, label, input, form, p {
            text-align: center;
            justify-content: center;
          }

          .container {
            display: block;
            margin-left: 100px;
            margin-right: 100px;
            border: 2px solid black;
            padding: 20px;
            border-radius: 25px;
          }
      `}</style>
      <div>
        <div className='container'>
          <h1>Contact Us!</h1>
          <hr/>
          <p> Thank you for your interest in our products. </p>
          <p> Please fill out the form below if you have any questions and we will get back to you as soon as possible </p>
          <form onSubmit={handleNewFormSubmission}>
            <label>Name</label><br/>
            <input
              type='text'
              id='name'
              ref={(input)=>{_name = input;}} />
            <br/>
            <label>Phone Number</label><br/>
            <input
              type='text'
              id='phone'
              ref={(input)=>{_phone = input;}} />
            <br/>
            <label>E-mail</label><br/>
            <input
              type='text'
              id='email'
              ref={(input)=>{_email = input;}} />
            <br/>
            <label>Comments</label><br/>
            <textarea
              type='text'
              id='question'
              ref={(textarea)=>{_question = textarea;}} />
            <br/>
            <button type='submit'>Submit!</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default connect()(Contact);
