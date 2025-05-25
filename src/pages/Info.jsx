
// Import React and Header component
import React from 'react';
import Header from '../components/Header.jsx';

// Info component to display application information
const Info = () => {
    return (
        // Container with header and info content
        <div>
            <Header />
            <h2>Information</h2>
            
            <h3>Features and Functionalities</h3>
            <p>
                This application, Code Wallet, allows users to manage code fragments efficiently. Key features include:
                <ul>
                    <li><b>Fragments Page</b>: Displays a list of saved code snippets with titles and associated tags. Users can view code details by clicking "View Code" (currently triggers a placeholder alert).</li>
                    <li><b>New Fragment Page</b>: Enables users to create new code fragments by entering a title, code content, and comma-separated tags. Fragments are saved via an API and stored in a JSON database.</li>
                    <li><b>Tags Page</b>: Allows users to add, edit, and delete tags used to categorize fragments. Tags are also stored in the JSON database.</li>
                    <li><b>Dark Mode</b>: Supports a dark theme for better readability in low-light environments (implemented via CSS).</li>
                </ul>
            </p>
           
            <h3>Developer</h3>
            <p>
                Developed by Mojammel, a second-year Bachelor's student in Computer Science. Passionate about building user-friendly applications and learning modern web technologies like React and Electron.
            </p>
            
            <h3>Data Management</h3>
            <p>
                Code Wallet is GDPR compliant. All data, including code fragments and tags, is stored locally in a JSON database on the user's device using node-json-db. No personal data is collected or transmitted to external servers, ensuring privacy and compliance with data protection regulations.
            </p>
        </div>
    );
};

// Export component as default
export default Info;