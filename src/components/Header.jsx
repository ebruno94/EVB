import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
  return(
    <div>
      <h1>EVB</h1>
      <h1>Construction and Trading Services</h1>
      <Link to='/'>Home</Link> | <Link to='/about'>About Us</Link> | <Link to='/portfolio'> Portfolio</Link> | <Link to='/contact'>Contact Us!</Link>
    </div>
  );
}
