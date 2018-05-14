import React from 'react';

export default function Footer(){
  return(
    <div>
      <style jsx>{`
        h1{
          text-align: center;
          bottom: 0;
          left: 0;
          position: fixed;
          background-color: gray;
          width: 100%;
          z-index: 1;
          margin-bottom: 0px;
        }
      `}</style>
      <h1>Copyright (c) 2018 Ernest Bruno</h1>
    </div>
  );
}
