import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ background: '#333333', color: '#FFFFFF', padding: '10px' }}>
            <Link to="/" style={{ color: '#B288C0', textDecoration: 'none' }}>
                Code Wallet
            </Link>
            <nav>
                <Link to="/" style={{ color: '#FFFFFF', margin: '0 10px' }}>
                    Fragments
                </Link>
                <Link to="/tags" style={{ color: '#FFFFFF', margin: '0 10px' }}>
                    Tags
                </Link>
                <Link to="/new" style={{ color: '#7BC950', margin: '0 10px' }}>
                    New
                </Link>
                <Link to="/info" style={{ color: '#FFFFFF', margin: '0 10px' }}>
                    Info
                </Link>
            </nav>
        </header>
    );
};

export default Header; // Changé de "export const Header" à "export default Header"