import React from 'react';
import {Link} from 'react-router-dom';
import '../styling/header.css';

const NHeader = () => {
    return(
        <nav style = {{width: '100%'}}>
            <div className='div-header'>
                <div className='div-svg'>
                    <p>Nature</p>
                </div>
                <div className='div-content'>
                <Link className='link-style' to="/">Home</Link>
                <Link className='link-style' to="/animations">Animation</Link>
                <Link className='link-style' to="/socialMedia">Social Media</Link>
                </div>
            </div>
        </nav>
    );
};

export default NHeader;