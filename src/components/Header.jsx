import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header(props){
  let adminLinkToggle;
  if (props.adminLoggedIn){
    adminLinkToggle = <div> <Link to='/admin'>Admin Page</Link> | <button type='button' onClick={() => props.onAdminLogout(false)}> Logout </button> </div>
  } else {
    adminLinkToggle = <Link to='/admin'>Admin Login</Link>
  }

  return(
    <div>
      <style jsx>{`
          h1, .links {
            text-align: center;
          }

          img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            height: 200px;
            width: 350px;
            margin-bottom: 25px;
          }

          .headerContainer {
            display: block;
            margin-bottom: 25px;
          }
      `}</style>
    <div className='headerContainer'>
        <img src={require('../assets/img/EVB-logo-trans.png')}></img>
        <div className='links'>
          <Link to='/'>Home</Link> | <Link to='/products'>Products</Link> | <Link to='/about'>About Us</Link> | <Link to='/portfolio'> Portfolio</Link> | <Link to='/contact'>Contact Us!</Link> | {adminLinkToggle}
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  onAdminLogout: PropTypes.func,
  adminLoggedIn: PropTypes.bool
};
