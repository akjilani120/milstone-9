import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import SubProduct from '../Cart/SubProduct/SubProduct';
import GetLocalStorage from '../LocalStorage/GetLocalStorage';
import OrderStore from '../OrderStore/OrderStore';
import "./Shop.css"
const Home = () => {
    const [products , setProducts] =useState([])
    const [carts, setcarts] =useState([])
    useEffect(() =>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const handleAddData = (product) =>{
       const newData =[...carts, product]
     const addedId= GetLocalStorage(product.id)
    // const addedIdData = addToDb(product.id)
       setcarts(newData)
    }
    return (
        <div className='container'>
           <div className="products-container">
            {
                products.map( product =><SubProduct product={product} key={product.id} handleAddData ={handleAddData}></SubProduct> )
            }
           </div>
           <div className="orders-container">
           <OrderStore carts={carts}></OrderStore>
           </div>
        </div>
    );
};

export default Home;