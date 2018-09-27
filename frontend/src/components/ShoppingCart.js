import React from 'react';

const ShoppingCart = ({ products }) => {
  return (
    <div>
      <h2>Shopping cart:</h2>
      <p>Varor: {products.length}</p>
      <ul>
        {products.map(({ product, option }, index) => {
          return (
            <li key={index}>
              {product.name} ({option.label})
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingCart;
