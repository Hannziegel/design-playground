import React from 'react';
import './TextEffect.css';

const TextEffect = () => {
    return(
        <div className='container-item'>
            <h2 data-text="&nbsp;♠ CSS Only ♣&nbsp;">&nbsp;♠ CSS Only ♣&nbsp;</h2>
            <ul>
                <li style={{ "--color": "#00ade1" }}><a href='#' data-text="&nbsp;Home&nbsp;">&nbsp;Home&nbsp;</a></li>
                <li style={{ "--color": "#ff6493" }}><a href='#' data-text="&nbsp;About&nbsp;">&nbsp;About&nbsp;</a></li>
                <li style={{ "--color": "#ffdd1c" }}><a href='#' data-text="&nbsp;Services&nbsp;">&nbsp;Services&nbsp;</a></li>
                <li style={{ "--color": "#00dc82" }}><a href='#' data-text="&nbsp;Team&nbsp;">&nbsp;Team&nbsp;</a></li>
                <li style={{ "--color": "#dc00d4" }}><a href='#' data-text="&nbsp;Contact&nbsp;">&nbsp;Contact&nbsp;</a></li>
            </ul>
        </div>
    );
};

export default TextEffect;