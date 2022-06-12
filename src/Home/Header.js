import React from 'react';
import {Link} from 'react-router-dom';
import '../styling/header.css';

const Header = () => {

    return(
        <nav style = {{width: '100%'}}>
            <div className='div-header'>
                <div className='div-svg'>
                    <p>Home</p>
                </div>
                <div className='div-content'>
                <Link className='link-style' to="/nature">Nature</Link>
                <Link className='link-style' to="/animations">Animation</Link>
                <Link className='link-style' to="/socialMedia">Social Media</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;