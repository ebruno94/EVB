import React from 'react';
import AdminLogin from './AdminLogin';
import PropTypes from 'prop-types';
import InquiryList from './InquiryList';
import ItemList from './ItemList';
import ItemForm from './ItemForm';

export default function Admin(props){
  if (!props.adminLoggedIn){
    return (
      <div>
        <AdminLogin onAdminLogin={props.onAdminLogin}/>
      </div>
    );
  } else {
    return (
      <div>
        <style jsx>{`
            h1 {
              text-align: center;
            }

            .container {
              display: block;
              margin-left: 100px;
              margin-right: 100px;
              padding: 20px;
            }

        `}</style>
      <div className='container'>
          <h1>Welcome, Admin!</h1>
          <InquiryList inquiryList={props.inquiryList}/>
          <ItemList itemList={props.itemList}/>
          <h1>Product List</h1>
          <ItemForm/>
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  onAdminLogin: PropTypes.func,
  adminLoggedIn: PropTypes.bool
};
