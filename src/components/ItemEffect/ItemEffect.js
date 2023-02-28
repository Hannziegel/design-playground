import React from 'react';
import './ItemEffect.css';
import gold from './gold.png'

const ItemEffect = () => {
    return(
        <div className='container-item'>
            <div className="card">
                <div className='circle'></div>
                <div className='content'>
                    <h2>Product Name</h2>
                    <p>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum.</p>
                    <button href='#'>Buy</button>
                </div>
                <img src={gold} alt='gold'></img>
            </div>
        </div>
    );
};

export default ItemEffect;