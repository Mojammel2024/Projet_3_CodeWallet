// Import React for JSX and component creation
import React from 'react';

// TagItem component with props for name, edit, and delete actions
const TagItem = ({ name, onEdit, onDelete }) => {
    return (
        // Container for tag item with padding and margin
        <div style={{ padding: '5px', margin: '5px' }}>
            {/* Display tag name */}
            <span>{name}</span>
            {/* Edit button with purple background */}
            <button onClick={onEdit} style={{ marginLeft: '10px', background: '#B288C0', color: '#FFFFFF' }}>
                Edit
            </button>
            {/* Delete button with dark gray background */}
            <button onClick={onDelete} style={{ marginLeft: '10px', background: '#333333', color: '#FFFFFF' }}>
                Delete
            </button>
        </div>
    );
};

// Export component as default
export default TagItem;