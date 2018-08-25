import React from 'react';
import { Link } from 'react-router-dom';
import ChevronRight from '../images/chevron-right.svg';
import './ProductItem.css';

const ProductItem = ({ id, name, description, price, images }) => {
  return (
    <Link to={`/product/${id}`} className="ListItem">
      <div className="ListItem__ColTime">
        <img className="FeaturedImage" src={`../images/${images[0]}`} alt="" />
      </div>
      <div className="ListItem__ColTitle">
        <h2 className="ListItem__Title">{name}</h2>
        <img className="ListItem__RatingsIcon" src="" alt="" />
        <p className="ListItem__RatingsCount" />
        <p className="ListItem__Address">{description}</p>
      </div>
      <div className="ListItem__ColPrice">
        <p className="ListItem__Price">{price} kr</p>
        <p className="ListItem__Mins">XX min</p>
      </div>
      <div className="ListItem__ColButton">
        <img className="ProductItem__Button" src={ChevronRight} alt="" />
      </div>
    </Link>
  );
};

export default ProductItem;
