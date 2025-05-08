import React from 'react';
import Header from '../components/Header.jsx';

const Info = () => {
    return (
        <div>
            <Header />
            <h2>Information</h2>
            <p>Features: Fragment management, Dark mode</p>
            <p>Developer: [Your Name]</p>
            <p>Data Management: GDPR compliant</p>
        </div>
    );
};

export default Info; // Changé de "export const Info"