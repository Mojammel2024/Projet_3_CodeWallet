// Import React, useState, and useEffect for state and lifecycle management, along with components
import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import TagItem from '../components/TagItem.jsx';

// Tags component to manage and display tags
const Tags = () => {
    // State for tag list and new tag input
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    // Load tags on component mount
    useEffect(() => {
        const loadTags = async () => {
            try {
                // Fetch tags from API
                const tagList = await window.api.getTags();
                console.log('Tags loaded:', tagList);
                setTags(tagList);
            } catch (error) {
                console.error('Error loading tags in renderer:', error);
                setTags([]); // Set empty array on error
            }
        };
        loadTags();
    }, []); // Empty dependency array for one-time fetch

    // Function to add a new tag
    const addTag = async () => {
        if (newTag.trim()) {
            const id = new Date().getTime(); // Generate unique ID
            const tag = { id, name: newTag.trim() }; // Create tag object
            console.log('Attempting to save tag:', tag);
            try {
                // Save tag via API
                const success = await window.api.saveTag(tag);
                console.log('Save tag response:', success);
                if (success) {
                    setTags([...tags, tag]); // Add new tag to list
                    setNewTag(''); // Clear input
                }
            } catch (error) {
                console.error('Error saving tag in renderer:', error);
            }
        }
    };

    // Function to delete a tag by ID
    const deleteTag = async (id) => {
        console.log('Attempting to delete tag:', id);
        try {
            // Delete tag via API
            const success = await window.api.deleteTag(id);
            console.log('Delete tag response:', success);
            if (success) {
                setTags(tags.filter(tag => tag.id !== id)); // Remove tag from list
            }
        } catch (error) {
            console.error('Error deleting tag in renderer:', error);
        }
    };

    return (
        // Container with header, input, and tag list
        <div>
            <Header />
            <h2>Tags</h2>
            {/* Input for new tag */}
            <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="New tag"
            />
            {/* Add tag button with green background */}
            <button onClick={addTag} style={{ background: '#7BC950', color: '#FFFFFF' }}>
                Add Tag
            </button>
            {/* Conditional rendering based on tags length */}
            {tags.length === 0 ? (
                <p>No tags yet. Add a new one!</p>
            ) : (
                // Map tags to TagItem components
                tags.map((tag) => (
                    <TagItem
                        key={tag.id} // Unique key for each tag
                        name={tag.name}
                        onEdit={() => alert('Edit tag: ' + tag.name)} // Temporary edit action
                        onDelete={() => deleteTag(tag.id)} // Delete action
                    />
                ))
            )}
        </div>
    );
};

// Export component as default
export default Tags;