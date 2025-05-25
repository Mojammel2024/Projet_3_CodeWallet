import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import FragmentCard from '../components/FragmentCard.jsx';

const Fragments = () => {
    const [fragments, setFragments] = useState([]);

    useEffect(() => {
        const loadFragments = async () => {
            try {
                const fragmentList = await window.api.getFragments();
                setFragments(fragmentList);
            } catch (error) {
                console.log('Erreur lors du chargement des fragments:', error);
                setFragments([]);
            }
        };
        loadFragments();
    }, []);

    return (
        <div>
            <Header />
            <h2>Fragments</h2>
            {fragments.length === 0 ? (
                <p>No fragments yet. Add a new one!</p>
            ) : (
                fragments.map((fragment) => (
                    <FragmentCard
                        key={fragment.id}
                        title={fragment.title}
                        tags={fragment.tags}
                        onView={() => alert('Open modal for: ' + fragment.code)}
                    />
                ))
            )}
        </div>
    );
};

export default Fragments;