// Import React for JSX and component creation, and Link for routing
import React from 'react';
import { Link } from 'react-router-dom';

// Header component for navigation
const Header = () => {
    return (
        // Header container with dark background and white text
        <header style={{ background: '#333333', color: '#FFFFFF', padding: '10px' }}>
            {/* Main title link to home page */}
            <Link to="/" style={{ color: '#B288C0', textDecoration: 'none' }}>
                Code Wallet
            </Link>
            {/* Navigation menu with links */}
            <nav>
                {/* Link to Fragments page */}
                <Link to="/" style={{ color: '#FFFFFF', margin: '0 10px' }}>
                    Fragments
                </Link>
                {/* Link to Tags page */}
                <Link to="/tags" style={{ color: '#FFFFFF', margin: '0 10px' }}>
                    Tags
                </Link>
                {/* Link to New page with green text */}
                <Link to="/new" style={{ color: '#7BC950', margin: '0 10px' }}>
                    New
                </Link>
                {/* Link to Info page */}
                <Link to="/info" style={{ color: '#FFFFFF', margin: '0 10px' }}>
                    Info
                </Link>
            </nav>
        </header>
    );
};

// Export component as default
export default Header;