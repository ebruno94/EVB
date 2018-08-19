import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList'

export default function Products(props){
  return(
    <div>
      <h1 style={{textAlign: 'center'}}>Products</h1>
      <ItemList itemList={props.itemList}/>
    </div>
  );
}
