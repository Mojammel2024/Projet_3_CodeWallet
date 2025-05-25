// Import React for JSX and component creation
import React from 'react';

// FragmentCard component with props for title, tags, and view action
const FragmentCard = ({ title, tags, onView }) => {
    return (
        // Card container with border and padding
        <div style={{ border: '1px solid #333333', padding: '10px', margin: '10px' }}>
            {/* Display card title */}
            <h3>{title}</h3>
            {/* Display tags as a comma-separated string */}
            <p>Tags: {tags.join(', ')}</p>
            {/* View button with purple background */}
            <button onClick={onView} style={{ background: '#9A48D0', color: '#FFFFFF' }}>
                View Code
            </button>
        </div>
    );
};

// Export component as default
export default FragmentCard;