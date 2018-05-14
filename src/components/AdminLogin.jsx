import React from 'react';

export default function AdminLogin(){
  let _username = null;
  let _password = null;

  function handleAdminLogin(event){
    event.preventDefault()
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
