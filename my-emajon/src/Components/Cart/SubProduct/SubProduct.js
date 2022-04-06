import React from 'react';
import './SubProduct.css'
const SubProduct = (props) => {
    const{handleAddData, product} =props
    const {name, price, img, shipping}=product
   
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <h6>{shipping}</h6>
            <button onClick={() => handleAddData(product)} className='add-btn'>Added Product</button>
        </div>
    );
};

export default SubProduct;