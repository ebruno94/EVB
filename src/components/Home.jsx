import React from 'react';
import {Link} from 'react-router-dom';


export default function Home(){
  return(
    <div>
      <style jsx>{`
        .pages{
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-column-gap: 10px;
          justify-items: center;
        }

        .container {
          display: block;
          margin-left: 100px;
          margin-right: 100px;
          padding: 20px;
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
          text-align: center;
        }

        img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          height: 300px;
          width: 450px;
        }

      `}</style>
      <img src={require('../assets/img/EVB-logo-trans.png')}></img>
      <div className='container'>
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
          <Link style={{textDecoration: 'none', color: 'black'}} to='/products'>
            <div className='box'>
              <h1>Products</h1>
            </div>
          </Link>
          <Link style={{textDecoration: 'none', color: 'black'}} to='/contact'>
            <div className='box'>
              <h1>Contact Us</h1>
            </div>
          </Link>
          <Link style={{textDecoration: 'none', color: 'black'}} to='/admin'>
            <div className='box'>
              <h1>Admin Login</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
