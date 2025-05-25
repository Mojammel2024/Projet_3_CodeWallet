// Import React and useState for state management, and Header component
import React, { useState } from 'react';
import Header from '../components/Header.jsx';

// FragmentForm component for creating new code fragments
const FragmentForm = () => {
    // State for form inputs: title, code, and tags
    const [title, setTitle] = useState('');
    const [code, setCode] = useState('');
    const [tags, setTags] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = new Date().getTime(); // Generate unique ID
        // Create new fragment object
        const newFragment = {
            id,
            title,
            code,
            tags: tags.split(',').map(tag => tag.trim()), // Split and trim tags
        };
        console.log('Attempting to save fragment:', newFragment);
        try {
            // Save fragment via API
            const success = await window.api.saveFragment(newFragment);
            console.log('Save fragment response:', success);
            if (success) {
                alert('Fragment saved successfully!');
                // Reset form fields
                setTitle('');
                setCode('');
                setTags('');
                window.location.href = '/'; // Redirect to home
            } else {
                alert('Error saving fragment.');
            }
        } catch (error) {
            console.error('Error saving fragment in renderer:', error);
            alert('Error saving fragment.');
        }
    };

    return (
        // Form container with header
        <div>
            <Header />
            <h2>New Fragment</h2>
            <form onSubmit={handleSubmit}>
                {/* Title input */}
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                {/* Code textarea */}
                <label>
                    Code:
                    <textarea
                        rows="5"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </label>
                {/* Tags input */}
                <label>
                    Tags (comma-separated, e.g., React, CSS):
                    <input
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </label>
                {/* Save button with green background */}
                <button type="submit" style={{ background: '#7BC950', color: '#FFFFFF' }}>
                    Save
                </button>
                {/* Cancel button with dark gray background */}
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

// Export component as default
export default FragmentForm;