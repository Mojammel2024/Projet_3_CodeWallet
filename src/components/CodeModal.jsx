// Import React for JSX and component creation
import React from 'react';

// CodeModal component with props for title, code, copy, and close actions
const CodeModal = ({ title, code, onCopy, onClose }) => {
    return (
        // Modal container with fixed positioning and basic styling
        <div style={{ position: 'fixed', top: '20%', left: '20%', background: '#FFFFFF', border: '1px solid #333333', padding: '20px' }}>
            {/* Display title */}
            <h2>{title}</h2>
            {/* Display code in preformatted text */}
            <pre>{code}</pre>
            {/* Copy button with green background */}
            <button onClick={onCopy} style={{ background: '#7BC950', color: '#FFFFFF' }}>
                Copy
            </button>
            {/* Close button with dark gray background */}
            <button onClick={onClose} style={{ background: '#333333', color: '#FFFFFF' }}>
                Close
            </button>
        </div>
    );
};

// Export component as default
export default CodeModal;