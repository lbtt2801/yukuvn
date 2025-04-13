import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Theory from './pages/Theory';
import Practice from './pages/Practice';
import MockTest from './pages/MockTest';
import Forum from './pages/Forum';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/mock-test" element={<MockTest />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;