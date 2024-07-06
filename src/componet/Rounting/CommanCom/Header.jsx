import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
             <h3> This is a staic routing </h3>
            <ul style={{ display: 'flex', justifyContent: 'space-evenly', width: '300px', cursor: 'pointer', listStyle: 'none', padding: 0 }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
