import React from 'react';
import './TextHoverEffect.css';

const TextHoverEffect = () => {
    return(
        <div className='container-item'>
            <ul>
                <li><a href='#' data-text="Home">Home</a></li>
                <li><a href='#' data-text="About">About</a></li>
                <li><a href='#' data-text="Team">Team</a></li>
                <li><a href='#' data-text="Contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default TextHoverEffect;