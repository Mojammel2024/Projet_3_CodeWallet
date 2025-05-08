import React from 'react';

const CodeModal = ({ title, code, onCopy, onClose }) => {
    return (
        <div style={{ position: 'fixed', top: '20%', left: '20%', background: '#FFFFFF', border: '1px solid #333333', padding: '20px' }}>
            <h2>{title}</h2>
            <pre>{code}</pre>
            <button onClick={onCopy} style={{ background: '#7BC950', color: '#FFFFFF' }}>
                Copy
            </button>
            <button onClick={onClose} style={{ background: '#333333', color: '#FFFFFF' }}>
                Close
            </button>
        </div>
    );
};

export default CodeModal; // Changé de "export const CodeModal"