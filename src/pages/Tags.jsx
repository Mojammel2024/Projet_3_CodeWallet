import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import TagItem from '../components/TagItem.jsx';

const Tags = () => {
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    useEffect(() => {
        const loadTags = async () => {
            try {
                const tagList = await window.api.getTags();
                console.log('Tags loaded:', tagList);
                setTags(tagList);
            } catch (error) {
                console.error('Error loading tags in renderer:', error);
                setTags([]);
            }
        };
        loadTags();
    }, []);

    const addTag = async () => {
        if (newTag.trim()) {
            const id = new Date().getTime();
            const tag = { id, name: newTag.trim() };
            console.log('Attempting to save tag:', tag);
            try {
                const success = await window.api.saveTag(tag);
                console.log('Save tag response:', success);
                if (success) {
                    setTags([...tags, tag]);
                    setNewTag('');
                }
            } catch (error) {
                console.error('Error saving tag in renderer:', error);
            }
        }
    };

    const deleteTag = async (id) => {
        console.log('Attempting to delete tag:', id);
        try {
            const success = await window.api.deleteTag(id);
            console.log('Delete tag response:', success);
            if (success) {
                setTags(tags.filter(tag => tag.id !== id));
            }
        } catch (error) {
            console.error('Error deleting tag in renderer:', error);
        }
    };

    return (
        <div>
            <Header />
            <h2>Tags</h2>
            <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="New tag"
            />
            <button onClick={addTag} style={{ background: '#7BC950', color: '#FFFFFF' }}>
                Add Tag
            </button>
            {tags.length === 0 ? (
                <p>No tags yet. Add a new one!</p>
            ) : (
                tags.map((tag) => (
                    <TagItem
                        key={tag.id}
                        name={tag.name}
                        onEdit={() => alert('Edit tag: ' + tag.name)}
                        onDelete={() => deleteTag(tag.id)}
                    />
                ))
            )}
        </div>
    );
};

export default Tags;