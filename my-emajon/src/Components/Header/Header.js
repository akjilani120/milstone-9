import React from 'react';
import { Link } from 'react-router-dom';
import'./Header.css'
const Header = () => {
    return (
        <nav>
           <ul>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/order'>Order</Link></li>
               <li><Link to='/about'>About</Link></li>
               <li><Link to='/contact'>Contact</Link></li>
             
               
           </ul>
        </nav>
    );
};

export default Header;