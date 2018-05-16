import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header(props){

  return(
    <div>
      <h1>EVB</h1>
      <h1>Construction and Trading Services</h1>
      <Link to='/'>Home</Link> | <Link to='/about'>About Us</Link> | <Link to='/portfolio'> Portfolio</Link> | <Link to='/contact'>Contact Us!</Link> {(props.adminLoggedIn)?
        <div> <Link to='/admin'>Admin Page</Link><button type='button' onClick={() => props.onAdminLogout(false)}>Logout</button>
        </div>  : <span></span>}
    </div>
  );
}

Header.propTypes = {
  onAdminLogout: PropTypes.func,
  adminLoggedIn: PropTypes.bool
};
