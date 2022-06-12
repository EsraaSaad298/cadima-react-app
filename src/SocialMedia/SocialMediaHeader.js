import React from 'react';
import {Link} from 'react-router-dom';
import '../styling/header.css';

const SHeader = () => {
    return(
        <nav style = {{width: window.innerWidth}}>
            <div className='div-header'>
                <div className='div-svg'>
                    <p>Social Media</p>
                </div>
                <div className='div-content'>
                <Link className='link-style' to="/nature">Nature</Link>
                <Link className='link-style' to="/animations">Animation</Link>
                <Link className='link-style' to="/">Home</Link>
                </div>
            </div>
        </nav>
    );
};

export default SHeader;