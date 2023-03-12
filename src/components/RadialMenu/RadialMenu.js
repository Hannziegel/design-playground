import React from 'react';
import { useState } from 'react';
import { AddOutline, HomeOutline, PersonOutline, SettingsOutline, MailOutline, KeyOutline, VideocamOutline, GameControllerOutline , CameraOutline  } from 'react-ionicons'
import './RadialMenu.css';

const RadialMenu = () => {
    const [toogleMenu, setToggleMenu ] = useState(false);
    /*  let toogle = document.querySelector('.toogle');
        let menu = document.querySelector('.menu');
        toogle.onclick = () => { menu.classList.toogle('active') } */

    return(
        <div className='container-item'>
            <ul className={toogleMenu ? 'menu active' : 'menu'}>
                <div className='toggle' onClick={() => setToggleMenu((prev) => !prev)}><AddOutline color={'#fff'} /></div>
                <li style={{ "--i": 0, "--clr" :"#fff" }}><a href='#'><HomeOutline color={'#ff2972'} /></a></li>
                <li style={{ "--i": 1, "--clr" :"#fff" }}><a href='#'><PersonOutline color={'#ff2972'} /></a></li>
                <li style={{ "--i": 2, "--clr" :"#fff" }}><a href='#'><SettingsOutline color={'#ff2972'} /></a></li>
                <li style={{ "--i": 3, "--clr" :"#fff" }}><a href='#'><MailOutline color={'#ff2972'} /></a></li>
                <li style={{ "--i": 4, "--clr" :"#fff" }}><a href='#'><KeyOutline color={'#ff2972'} /></a></li>
                <li style={{ "--i": 5, "--clr" :"#fff" }}><a href='#'><VideocamOutline color={'#ff2972'} /></a></li>
                <li style={{ "--i": 6, "--clr" :"#fff" }}><a href='#'><GameControllerOutline color={'#ff2972'} /></a></li>
                <li style={{ "--i": 7, "--clr" :"#fff" }}><a href='#'><CameraOutline color={'#ff2972'} /></a></li>
            </ul>
        </div>
    );
};

export default RadialMenu;