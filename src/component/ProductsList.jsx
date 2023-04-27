import React from 'react';
import Product from './Product';

function ProductsList() {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 20.99 },
    { id: 3, name: 'Product 3', price: 30.99 }
  ];

  return (
    <div className="products-list">
      {products.map(product => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
}

export default ProductsList;
