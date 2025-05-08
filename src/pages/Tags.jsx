import React from 'react';
import Header from '../components/Header.jsx';
import TagItem from '../components/TagItem.jsx';

const Tags = () => {
    const tags = ['React', 'CSS', 'State'];

    return (
        <div>
            <Header />
            <h2>Tags</h2>
            {tags.map((tag) => (
                <TagItem
                    key={tag}
                    name={tag}
                    onEdit={() => alert('Edit: ' + tag)}
                    onDelete={() => alert('Delete: ' + tag)}
                />
            ))}
        </div>
    );
};

export default Tags; // Changé de "export const Tags"