import { Link } from 'react-router-dom';
import './ProductCard.css';
import React from 'react';

function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.slice(0, 60)}...</p>
      <p className="price">${product.price}</p>
      <Link to={`/product/${product.id}`} className="details-link">View Details</Link>
    </div>
  );
}

export default ProductCard;
