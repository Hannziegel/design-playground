import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './ThreeDimensionHoverIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import VanillaTilt from 'vanilla-tilt';


// import VanillaTilt from 'vanilla-tilt';
function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }


const ThreeDimensionHoverIcon = () => {
    const [backgroundColorHover, setBackgroundColorHover ] = useState("");

    const handleMouseEnter = (color) => {
        setBackgroundColorHover(color);
        
    };

    const handleMouseLeave = () => {
        setBackgroundColorHover('#fff');
    };

    const options = {
        max: 30,
        speed: 400,
        glare: true,
        "max-glare": 1,
    };


    return(
        <div className='socialMedia' style={{backgroundColor: backgroundColorHover}}>
            <ul className='sci'>
                <li data-text="Facebook" onMouseEnter={() => handleMouseEnter("#1877f2")} onMouseLeave={() => handleMouseLeave()}>     
                    <Tilt options={options}>
                        <a href='#' className='facebook'><FontAwesomeIcon icon={faFacebook} className='fa'/></a>
                    </Tilt>   
                </li>
                <li data-text="Twitter" onMouseEnter={() => handleMouseEnter("#0099ff")} onMouseLeave={() => handleMouseLeave()}>
                    <Tilt options={options}>
                            <a href='#' className='twitter'><FontAwesomeIcon icon={faTwitter} className='fa'/> </a>
                    </Tilt>
                </li>
                <li data-text="Youtube" onMouseEnter={() => handleMouseEnter("#ff0000")} onMouseLeave={() => handleMouseLeave()}>
                    <Tilt options={options}>
                            <a href='#' className='youtube'><FontAwesomeIcon icon={faYoutube} className='fa'/> </a>
                    </Tilt>
                </li>
                <li data-text="Instagram" onMouseEnter={() => handleMouseEnter("#e4405f")} onMouseLeave={() => handleMouseLeave()}>
                    <Tilt options={options}>
                            <a href='#' className='instagram'><FontAwesomeIcon icon={faInstagram} className='fa'/> </a>
                    </Tilt>
                </li>
                <li data-text="Whatsapp" onMouseEnter={() => handleMouseEnter("#28c209")} onMouseLeave={() => handleMouseLeave()}>
                    <Tilt options={options}>
                            <a href='#' className='whatsapp'><FontAwesomeIcon icon={faWhatsapp} className='fa'/> </a>
                    </Tilt>
                </li>
                
            </ul>
        </div>
    );
};

export default ThreeDimensionHoverIcon;