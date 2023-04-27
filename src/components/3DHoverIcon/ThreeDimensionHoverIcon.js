import React from 'react';
import './ThreeDimensionHoverIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


// import VanillaTilt from 'vanilla-tilt';

const ThreeDimensionHoverIcon = () => {
    return(
        <div className='socialMedia'>
            <ul className='sci'>
                <li data-text="Facebook"><a href='#' className='facebook'><FontAwesomeIcon icon={faFacebook} className='fa'/> </a></li>
                <li data-text="Twitter"><a href='#' className='twitter'><FontAwesomeIcon icon={faTwitter} className='fa'/> </a></li>
                <li data-text="Youtube"><a href='#' className='youtube'><FontAwesomeIcon icon={faYoutube} className='fa'/> </a></li>
                <li data-text="Instagram"><a href='#' className='instagram'><FontAwesomeIcon icon={faInstagram} className='fa'/> </a></li>
                <li data-text="Whatsapp"><a href='#' className='whatsapp'><FontAwesomeIcon icon={faWhatsapp} className='fa'/> </a></li>
            </ul>
        </div>
    );
};

export default ThreeDimensionHoverIcon;