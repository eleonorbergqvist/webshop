import React from 'react';

const ShoppingCart = ({ products }) => {
  return (
    <div>
      <h2>Shopping cart:</h2>
      <p>{products.length}</p>
      <ul>
        {products.map(x => {
          return <li key={x.id}>{x.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ShoppingCart;
