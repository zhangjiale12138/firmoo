import React from 'react';
import ProductItem from './ProductItem.jsx';
import './Product.css';

let arr = [];
for (let i = 0; i < 9; i++) {
  arr.push(i);
}
export default function Product() {

  return (<div className="products-container">

    {arr.map((item, index) => {
      return (
        <ProductItem
          src={ require('../img/'+parseInt(item+6, 10)+'.jpg') }
          price={'$23.99'}
          key={index}
        />)
    })}

  </div>)



}