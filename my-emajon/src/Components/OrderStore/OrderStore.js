import React from 'react';

const OrderStore = (props) => {
    const {carts}= props;
    let price=0;
    let shipping=0;
    let total=0;
    let tax = 0;
    let grandTotal = 0;
    for(const cart of carts){
        price =price + cart.price
        shipping = shipping +  cart.price
        total = price +  shipping
        tax = total*10 /100
        grandTotal = total + tax
    }
    return (
        <div className='order-list'>
           <h2>Order Summery</h2> 
           <h4>Price: ${price}</h4>
           <h5>Shipping Price: $ {shipping}</h5>
           <h6>Tax :  $  {tax}</h6>
           <h3>Grand Total Price {grandTotal}</h3>
        </div>
    );
};

export default OrderStore;