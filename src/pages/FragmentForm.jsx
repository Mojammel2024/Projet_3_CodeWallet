import React from 'react';
import Header from '../components/Header.jsx';

const FragmentForm = () => {
    return (
        <div>
            <Header />
            <h2>New Fragment</h2>
            <form>
                <label>
                    Title:
                    <input type="text" />
                </label>
                <label>
                    Code:
                    <textarea rows="5" />
                </label>
                <label>
                    Tags:
                    <input type="text" placeholder="React, CSS" />
                </label>
                <button type="submit" style={{ background: '#7BC950', color: '#FFFFFF' }}>
                    Save
                </button>
                <button type="button" style={{ background: '#333333', color: '#FFFFFF' }}>
                    Delete
                </button>
            </form>
        </div>
    );
};

export default FragmentForm; // Changé de "export const FragmentForm"