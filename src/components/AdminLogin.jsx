import React from 'react';
import PropTypes from 'prop-types';

export default function AdminLogin(props){
  let _username = null;
  let _password = null;

  function handleAdminLogin(event){
    event.preventDefault();
    if (_username.value === 'admin' && _password.value === 'admin'){
      props.onAdminLogin(true);
      _username.value = '';
      _password.value = '';
    }
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
          margin-left: 200px;
          margin-right: 200px;
          border: 2px solid black;
          padding: 20px;
          border-radius: 25px;
        }

        label ,input {
          margin-bottom: 20px;
        }

      `}</style>
      <div className='container'>
        <h1>Please Log In</h1>
        <form onSubmit={handleAdminLogin}>
          <label>Username: </label><br/>
          <input
            type='text'
            id='username'
            ref={(input)=>{_username = input;}} />
          <br/>
          <label>Password: </label><br/>
          <input
            type='password'
            id='password'
            ref={(input)=>{_password = input;}} />
          <br/>
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}

AdminLogin.propTypes = {
  onAdminLogin: PropTypes.func
};
