import React from 'react';
import Header from '../components/Header.jsx';
import FragmentCard from '../components/FragmentCard.jsx';

const Fragments = () => {
    const fragments = [
        { id: 1, title: 'Hook useState', code: 'const [state, setState] = useState(0);', tags: ['React', 'State'] },
        { id: 2, title: 'CSS Grid', code: 'display: grid;', tags: ['CSS', 'Layout'] },
    ];

    return (
        <div>
            <Header />
            <h2>Fragments</h2>
            {fragments.map((fragment) => (
                <FragmentCard
                    key={fragment.id}
                    title={fragment.title}
                    tags={fragment.tags}
                    onView={() => alert('Open modal for: ' + fragment.code)}
                />
            ))}
        </div>
    );
};

export default Fragments; // Changé de "export const Fragments"