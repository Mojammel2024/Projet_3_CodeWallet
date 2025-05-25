// Import React, useState, and useEffect for state and lifecycle management, along with components
import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import FragmentCard from '../components/FragmentCard.jsx';

// Fragments component to display a list of code fragments
const Fragments = () => {
    // State to store the list of fragments
    const [fragments, setFragments] = useState([]);

    // Load fragments on component mount
    useEffect(() => {
        const loadFragments = async () => {
            try {
                // Fetch fragments from API
                const fragmentList = await window.api.getFragments();
                setFragments(fragmentList);
            } catch (error) {
                console.log('Error loading fragments:', error);
                setFragments([]); // Set empty array on error
            }
        };
        loadFragments();
    }, []); // Empty dependency array for one-time fetch

    return (
        // Container with header and fragment list
        <div>
            <Header />
            <h2>Fragments</h2>
            {/* Conditional rendering based on fragments length */}
            {fragments.length === 0 ? (
                <p>No fragments yet. Add a new one!</p>
            ) : (
                // Map fragments to FragmentCard components
                fragments.map((fragment) => (
                    <FragmentCard
                        key={fragment.id} // Unique key for each card
                        title={fragment.title}
                        tags={fragment.tags}
                        onView={() => alert('Open modal for: ' + fragment.code)} // Temporary view action
                    />
                ))
            )}
        </div>
    );
};

// Export component as default
export default Fragments;