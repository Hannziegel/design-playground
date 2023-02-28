import React from 'react';

const Carrousel = () => {
    return(
        <main>
            <div className='project-description'>
                <h2> Project Name</h2>
                <p>Lorem Lorem Lorem Lorem Lorem</p>
                <a href='#'> Open project {"->"} </a>
            </div>

            <div className='project-image'>

            </div>

            <div className='menu-items'>
                <div className='menu-item item-1'>
                    <a>Project 1</a>
                    <div className='icon'></div>
                </div>
                <div className='menu-item item-2'>
                    <a>Project 2</a>
                    <div className='icon'></div>
                </div>
                <div className='menu-item item-3'>
                    <a>Project 3</a>
                    <div className='icon'></div>
                </div>
            </div>
        </main>
    )
};

export default Carrousel;