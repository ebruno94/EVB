import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(){
  return(
    <div>
      <style jsx>{`
        .pages{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-column-gap: 10px;
          justify-items: center;
        }

        .box{
          display: block;
          border: 2px solid black;
          height: 150px;
          width: 200px;
          text-align: center;
          padding-top: 50px;
          padding-bottom: 0px;
        }

        h1{
          margin-bottom: 0px;
        }

      `}</style>
      <h1>LOGO WILL BE IN HERE</h1>
      <h1>WELCOME</h1>
      <hr/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <hr/>
      <div className='pages'>
        <Link style={{textDecoration: 'none', color: 'black'}} to='/about'>
          <div className='box'>
            <h1>About Us</h1>
          </div>
        </Link>
        <Link style={{textDecoration: 'none', color: 'black'}} to='/portfolio'>
          <div className='box'>
            <h1>Portfolio</h1>
          </div>
        </Link>
        <Link style={{textDecoration: 'none', color: 'black'}} to='/contact'>
          <div className='box'>
            <h1>Contact Us</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
