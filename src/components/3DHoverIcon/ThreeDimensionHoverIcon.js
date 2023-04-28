import React from 'react';
import { useState } from 'react';
import './ThreeDimensionHoverIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


// import VanillaTilt from 'vanilla-tilt';

const ThreeDimensionHoverIcon = () => {
    const [backgroundColorHover, setBackgroundColorHover ] = useState("");

    const handleMouseEnter = (color) => {
        setBackgroundColorHover(color);
        
    };

    const handleMouseLeave = () => {
        setBackgroundColorHover('#fff');
    };

    return(
        <div className='socialMedia' style={{backgroundColor: backgroundColorHover}}>
            <ul className='sci'>
                <li data-text="Facebook" onMouseEnter={() => handleMouseEnter("#1877f2")} onMouseLeave={() => handleMouseLeave()}>
                    <a href='#' className='facebook'><FontAwesomeIcon icon={faFacebook} className='fa'/></a>
                </li>
                <li data-text="Twitter" onMouseEnter={() => handleMouseEnter("#0099ff")} onMouseLeave={() => handleMouseLeave()}>
                    <a href='#' className='twitter'><FontAwesomeIcon icon={faTwitter} className='fa'/> </a>
                </li>
                <li data-text="Youtube" onMouseEnter={() => handleMouseEnter("#ff0000")} onMouseLeave={() => handleMouseLeave()}>
                    <a href='#' className='youtube'><FontAwesomeIcon icon={faYoutube} className='fa'/> </a>
                </li>
                <li data-text="Instagram" onMouseEnter={() => handleMouseEnter("#e4405f")} onMouseLeave={() => handleMouseLeave()}>
                    <a href='#' className='instagram'><FontAwesomeIcon icon={faInstagram} className='fa'/> </a>
                </li>
                <li data-text="Whatsapp" onMouseEnter={() => handleMouseEnter("#28c209")} onMouseLeave={() => handleMouseLeave()}>
                    <a href='#' className='whatsapp'><FontAwesomeIcon icon={faWhatsapp} className='fa'/> </a>
                </li>
            </ul>
        </div>
    );
};

export default ThreeDimensionHoverIcon;