import React from 'react';

export default function ProductItem({ src, price }) {


    return (
        <div className="product-item">
            <div className="product-item-img-container">
                <img src={src} alt="" />
            </div>
            <div className="product-item-price-container">{price}</div>
        </div>
    )



}