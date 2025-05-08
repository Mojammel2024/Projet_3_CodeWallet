import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fragments from './pages/Fragments.jsx';
import FragmentForm from './pages/FragmentForm.jsx';
import Tags from './pages/Tags.jsx';
import Info from './pages/Info.jsx';
import './styles/App.css';

function App() {
    return (
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

export default App;