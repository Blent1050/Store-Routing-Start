import React from 'react';
import { Link } from 'react-router-dom';

function Shop(props) {
  return (
    <div className="items-list-wrapper">
      {props.itemList.map(item => (
        <div className="item-card" key={item.id}>
          <img
            className="item-list-image"
            src={item.imageUrl}
            alt={item.name}
          />
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Shop;
