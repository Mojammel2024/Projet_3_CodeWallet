import React from 'react';

const TagItem = ({ name, onEdit, onDelete }) => {
    return (
        <div style={{ padding: '5px', margin: '5px' }}>
            <span>{name}</span>
            <button onClick={onEdit} style={{ marginLeft: '10px', background: '#B288C0', color: '#FFFFFF' }}>
                Edit
            </button>
            <button onClick={onDelete} style={{ marginLeft: '10px', background: '#333333', color: '#FFFFFF' }}>
                Delete
            </button>
        </div>
    );
};

export default TagItem; // Changé de "export const TagItem"
