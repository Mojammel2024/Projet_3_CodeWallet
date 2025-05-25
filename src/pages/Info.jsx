// Import React and Header component
import React from 'react';
import Header from '../components/Header.jsx';

// Info component to display application information
const Info = () => {
    return (
        // Container with header and info content
        <div>
            <Header />
            <h2>Information</h2>
            // List app features
            <p>Features: Fragment management, Dark mode</p>
            // Placeholder for developer name
            <p>Developer: [Your Name]</p>
            // Note on data compliance
            <p>Data Management: GDPR compliant</p>
        </div>
    );
};

// Export component as default
export default Info;