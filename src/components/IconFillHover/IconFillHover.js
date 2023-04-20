import React from 'react';
import './IconFillHover.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const IconFillHover = () => {
    return(
        <div className='container-item'>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.4.0/css/all.css"></link>
            <ul>
                <li><a href='#'><FontAwesomeIcon icon={faTwitter} className='fa'/> </a></li>
                <li><a href='#'><FontAwesomeIcon icon={faYoutube} className='fa'/> </a></li>
                <li><a href='#'><FontAwesomeIcon icon={faWhatsapp} className='fa'/> </a></li>
            </ul>
        </div>
    );
};

export default IconFillHover;