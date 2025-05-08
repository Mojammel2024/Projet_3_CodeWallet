import React from 'react';

const FragmentCard = ({ title, tags, onView }) => {
    return (
        <div style={{ border: '1px solid #333333', padding: '10px', margin: '10px' }}>
            <h3>{title}</h3>
            <p>Tags: {tags.join(', ')}</p>
            <button onClick={onView} style={{ background: '#9A48D0', color: '#FFFFFF' }}>
                View Code
            </button>
        </div>
    );
};

export default FragmentCard; // Changé de "export const FragmentCard"