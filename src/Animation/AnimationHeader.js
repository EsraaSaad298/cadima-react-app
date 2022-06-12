import React from 'react';
import {Link} from 'react-router-dom';
import '../styling/header.css';

const AHeader = () => {
    return(
        <nav style = {{width: window.innerWidth}}>
            <div className='div-header'>
                <div className='div-svg'>
                    <p>Animation</p>
                </div>
                <div className='div-content'>
                <Link className='link-style' to="/nature">Nature</Link>
                <Link className='link-style' to="/">Home</Link>
                <Link className='link-style' to="/socialMedia">Social Media</Link>
                </div>
            </div>
        </nav>
    );
};

export default AHeader;