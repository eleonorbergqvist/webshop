import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ items }) => {
  return (
    <div>
      {items.map(x => (
        <ProductItem {...x} key={x.id} />
      ))}
    </div>
  );
};

export default ProductList;
