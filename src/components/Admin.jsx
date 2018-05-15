import React from 'react';
import AdminLogin from './AdminLogin';
import PropTypes from 'prop-types';
import InquiryList from './InquiryList';

export default function Admin(props){
  if (!props.adminLoggedIn){
    return (
      <div>
        <h1>Please Log in</h1>
        <AdminLogin onAdminLogin={props.onAdminLogin}/>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome, Admin!</h1>
        <InquiryList inquiryList={props.inquiryList}/>
      </div>
    );
  }
}

Admin.propTypes = {
  onAdminLogin: PropTypes.func,
  adminLoggedIn: PropTypes.bool
};
