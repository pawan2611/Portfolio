import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';

import Sidebar  from './components/Sidebar';
import Home     from './pages/Home';
import About    from './pages/About';
import Projects from './pages/Projects';
import Contact  from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/"         element={<Home />}     />
            <Route path="/about"    element={<About />}    />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact"  element={<Contact />}  />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
