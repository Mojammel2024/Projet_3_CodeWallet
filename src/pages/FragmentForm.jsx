import React, { useState } from 'react';
import Header from '../components/Header.jsx';

const FragmentForm = () => {
    const [title, setTitle] = useState('');
    const [code, setCode] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = new Date().getTime();
        const newFragment = {
            id,
            title,
            code,
            tags: tags.split(',').map(tag => tag.trim()),
        };
        console.log('Attempting to save fragment:', newFragment);
        try {
            const success = await window.api.saveFragment(newFragment);
            console.log('Save fragment response:', success);
            if (success) {
                alert('Fragment saved successfully!');
                setTitle('');
                setCode('');
                setTags('');
                window.location.href = '/';
            } else {
                alert('Error saving fragment.');
            }
        } catch (error) {
            console.error('Error saving fragment in renderer:', error);
            alert('Error saving fragment.');
        }
    };

    return (
        <div>
            <Header />
            <h2>New Fragment</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    Code:
                    <textarea
                        rows="5"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </label>
                <label>
                    Tags (comma-separated, e.g., React, CSS):
                    <input
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </label>
                <button type="submit" style={{ background: '#7BC950', color: '#FFFFFF' }}>
                    Save
                </button>
                <button
                    type="button"
                    onClick={() => (window.location.href = '/')}
                    style={{ background: '#333333', color: '#FFFFFF' }}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default FragmentForm;