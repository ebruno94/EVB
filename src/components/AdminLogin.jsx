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
      <h1>Welcome, Admin!</h1>
      <form onSubmit={handleAdminLogin}>
        <label>Username: </label>
        <input
          type='text'
          id='username'
          ref={(input)=>{_username = input;}} />
        <label>Password: </label>
        <input
          type='password'
          id='password'
          ref={(input)=>{_password = input;}} />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

AdminLogin.propTypes = {
  onAdminLogin: PropTypes.func
};
