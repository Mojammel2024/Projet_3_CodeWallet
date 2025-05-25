// Import BrowserRouter, Routes, and Route for client-side routing, along with page components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fragments from './pages/Fragments.jsx';
import FragmentForm from './pages/FragmentForm.jsx';
import Tags from './pages/Tags.jsx';
import Info from './pages/Info.jsx';
import './styles/App.css'; // Import global CSS styles

// App component as the main entry point
function App() {
    return (
        // Router component to enable client-side routing
        <Router>
            <Routes>
                <Route path="/" element={<Fragments />} />
                <Route path="/new" element={<FragmentForm />} />
                <Route path="/tags" element={<Tags />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </Router>
    );
}

// Export component as default
export default App;