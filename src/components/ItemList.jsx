import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export default function ItemList(props){
  return(
    <div>
      <style jsx>{`
        .listHeader{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          justify-items: center;
        }

        .listContainer {
          margin-bottom: 75px;
          display: block;
          margin-left: 100px;
          margin-right: 100px;
          padding: 20px;
        }

        h1{
          text-align: center;
        }
      `}</style>
    <div className='listContainer'>
        <div className='listHeader'>
          <div className='header'>
            <h1>Image</h1>
          </div>
          <div className='header'>
            <h1>Name</h1>
          </div>
          <div className='header'>
            <h1>Quantity Available</h1>
          </div>
        </div>
        <hr/>
        {(props.itemList.length !== undefined) ?
          Object.keys(props.itemList).map(function(itemId){
          let item = props.itemList[itemId];
          return <Item
            name={item.name}
            image={item.image}
            quantity={item.quantity}
            key={itemId}
            itemId={itemId}
          />;
      }) : <h1>There are no products yet.</h1>}
      </div>
    </div>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.object
};
