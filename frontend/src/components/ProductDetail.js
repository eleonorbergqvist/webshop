import React from 'react';
import CartPlus from '../images/cart-plus.svg';
import './ProductDetail.css';

const ProductDetail = ({
  images,
  description,
  options,
  selectedChoiceId,
  onAddToCartClick,
  onChoiceChange
}) => {
  const handleOnChange = e => {
    const id = Number(e.target.value);
    onChoiceChange(id);
  };

  return (
    <div>
      <h2>Name</h2>
      <img
        className="ProductDetail__Image"
        src={`../images/${images[0]}`}
        alt=""
      />
      <p className="ProductDetail__Description">{description}</p>

      <select
        className="ProductDetail__Select"
        onChange={handleOnChange}
        value={selectedChoiceId}
      >
        {options.map(x => {
          const inStock = x.quantity > 0;
          return (
            <option key={x.id} value={x.id} disabled={!inStock}>
              {x.label}
            </option>
          );
        })}
      </select>
      <img
        className="ProductDetail__Add"
        src={CartPlus}
        alt=""
        onClick={onAddToCartClick}
      />
    </div>
  );
};

export default ProductDetail;
