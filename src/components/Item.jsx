import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function Item(props){
  let quantity = (props.quantity !== 0) ? props.quantity : 'Out of Stock';
  return (
    <div>
      <style jsx>{`
          img {
            height: 175px;
            width: 175px;
          }

          .items {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: minmax(200px, 200px);
            justify-items: center;
          }

          .itemImage, .itemName, .itemQuantity{
            padding: 20px;
          }

      `}</style>
      <div>
        <div className='items'>
          <div className='itemImage'>
            <img src={props.image}/>
          </div>
          <div className='itemName'>
            {props.name}
          </div>
          <div className='itemQuantity'>
            {quantity}
          </div>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default connect()(Item);
