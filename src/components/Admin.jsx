import React from 'react';
import AdminLogin from './AdminLogin';
import PropTypes from 'prop-types';

export default function Admin(props){
  if (!props.adminLoggedIn){
    return (
      <div>
        <h1>THIS IS THE ADMIN PAGE</h1>
        <AdminLogin onAdminLogin={props.onAdminLogin}/>
      </div>
    );
  } else {
    return (
      <div>
        <h1>GOOD JOB</h1>
      </div>
    );
  }
}

Admin.propTypes = {
  onAdminLogin: PropTypes.func,
  adminLoggedIn: PropTypes.bool
};
